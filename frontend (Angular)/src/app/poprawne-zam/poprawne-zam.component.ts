import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Komponent odpowiedzialny za wyświetlenie informacji o poprawnie złożonym zamówieniu
 */
@Component({
  selector: 'app-poprawne-zam',
  templateUrl: './poprawne-zam.component.html',
  styleUrls: ['./poprawne-zam.component.css']
})
export class PoprawneZamComponent implements OnInit {
  id
  
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  /**
  *  Metoda wywołana przy inicjalizacji komponentu; odpowiedzialna za pobranie id zamowienia z aktywowanej drogi(activatedRoute) 
   */
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id']
  }
  
  /**
   * Metoda odpowiedzialna za nawigację do katalogu po naciśnięciu przycisku "Powrót do katalogu"
   */
  doKatalogu(){
    this.router.navigate(['/katalog'])
  }

}
