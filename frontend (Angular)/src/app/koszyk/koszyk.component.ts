import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduktService } from '../service/produkt.service';
import { Towar } from '../service/zamowienie.service';
import { Produkt } from '../produkt/produkt.component';

/**
 * Komponent służący do obsługi koszyka 
 */
@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.css']
})
export class KoszykComponent implements OnInit {
  koszyk: Towar[]=[]

  constructor(private router: Router, private produktService: ProduktService) { }

  ngOnInit() {
    this.produktService.getProductById(7).subscribe(res => this.koszyk.push(new Towar(null,res,1)))
    this.produktService.getProductById(8).subscribe(res => this.koszyk.push(new Towar(null,res,3)))
  }

  doZamowienia(){
    this.router.navigate(['/zloz-zamowienie'])
  }

}
