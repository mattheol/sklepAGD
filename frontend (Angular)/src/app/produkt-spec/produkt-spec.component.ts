import { Component, OnInit } from '@angular/core';
import { Produkt } from '../produkt/produkt.component';
import { ProduktService } from '../service/produkt.service';
import { ActivatedRoute } from '@angular/router';

/**
 * Komponent odpowiedzialny za prezentację wybranego produktu
 */
@Component({
  selector: 'app-produkt-spec',
  templateUrl: './produkt-spec.component.html',
  styleUrls: ['./produkt-spec.component.css']
})
export class ProduktSpecComponent implements OnInit {
  id:number
  product : Produkt
  spec: string[]
  constructor(private productService: ProduktService, private router:ActivatedRoute) { }
  
  /**
   * Metoda wywoływana przy inicjalizacji komponentu, pobiera wybrany produkt 
   */
  ngOnInit() {
    this.id = this.router.snapshot.params['id']
    this.productService.getProductById(this.id).subscribe(response => {
      this.product = response
      this.spec = response.specyfikacja.split(';')
    }
      );
  }
  /**
   * Metoda dodająca produkt do koszyka po wciśnięciu przycisku "dodaj do koszyka"
   */
  dodajDoKoszyka(){
    alert('Dodano do koszyka: '+this.product.nazwa)
  }



}
