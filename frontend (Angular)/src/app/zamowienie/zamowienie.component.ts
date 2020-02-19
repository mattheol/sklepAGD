import { Component, OnInit, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { Klient, KlientService } from '../service/klient.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ZamowienieService, Zamowienie, Towar } from '../service/zamowienie.service';
import { ProduktService } from '../service/produkt.service';

import { Injectable } from '@angular/core';


/**
 * Komponent odpowiedzialny za składanie zamówienia poprzez formularz
 */
@Component({
  selector: 'app-zamowienie',
  templateUrl: './zamowienie.component.html',
  styleUrls: ['./zamowienie.component.css'],

})
export class ZamowienieComponent implements OnInit {
  @ViewChild('zamForm',{static:false}) zamForm
  koszyk: Towar[]=[]
  ilosc: number[]=[]
  klient:Klient
  dodOpis
  dostawa
  typPlat
  koszt
  nrZam

  constructor(private zamowienieService:ZamowienieService,private klientService:KlientService,
    private router:Router,private produktService:ProduktService,private platnoscZam:Platnosc) {
     }

  /**
   * Metoda wywoływana przy inicjalizacji komponentu, pobiera produkty z koszyka
   */
  ngOnInit() {
    this.typPlat=1
    this.dostawa="Kurier"
    this.klient = new Klient(-1,'','','','','','','','','','')
    this.klientService.getKlientById(1).subscribe(res=> this.klient=res)
    this.produktService.getProductById(7).subscribe(res => this.koszyk.push(new Towar(null,res,1)))
    this.produktService.getProductById(8).subscribe(res => this.koszyk.push(new Towar(null,res,3)))
  }

  /**
   * Metoda odpowiedzialna za złożenie oraz walidację zamówienia
   * @param form Aktualny stan formularza
   */
  zlozZamowienie(form :NgForm){
    if(form.invalid){
      alert("Wprowadź poprawne dane!\nSprawdź, czy wszystkie wymagane pola są wypełnione poprawnie.")
    }else{
      this.koszt = this.koszyk.map(towar => towar.produkt.cena*towar.ilosc).reduce((sum,current) => sum + current)

      let platnosc = ''
      switch(String(this.typPlat)){
        case '1':{
          platnosc = 'payu'; 
          break;
        }
        case "2": {
          platnosc = 'przelewy24';
          break;
        }
        case "3": {
          platnosc = 'na miejscu';
          break;
        }
      }
      if(this.dostawa=='Odbiór osobisty'){

        this.zamowienieService.saveZamowienie(new Zamowienie(-1,this.klient,this.klient.imie,this.klient.nazwisko,
          Date.now(),this.koszt,this.dostawa,this.klient.telefon,this.klient.email,this.dodOpis,'Oczekujące',platnosc,
          '','','','')).subscribe(res => 
            {
              this.nrZam=res.idZam
              this.platnoscZam.zaplac(platnosc)
              this.zamowienieService.saveTowary( this.koszyk.map(t=>{
                t.zamowienie=res
                return t}) ).subscribe(_ => this.router.navigate(['/poprawne-zamowienie',this.nrZam]))
            } ) 
      } 
      else{
        this.koszt += 9.99
        this.zamowienieService.saveZamowienie(new Zamowienie(-1,this.klient,this.klient.imie,this.klient.nazwisko,
          Date.now(),this.koszt,this.dostawa,this.klient.telefon,this.klient.email,this.dodOpis,'Oczekujące',platnosc,
          this.klient.miasto,this.klient.ulica,this.klient.nrDomu,this.klient.kodPocz)).subscribe(res => {
            this.nrZam=res.idZam
            this.platnoscZam.zaplac(platnosc)
            this.zamowienieService.saveTowary( this.koszyk.map(t=>{
              t.zamowienie=res
              return t}) ).subscribe(_ => this.router.navigate(['/poprawne-zamowienie',this.nrZam]))
          } )
      }
    }
  }

}

@Injectable({
  providedIn: 'root'
})
export class Platnosc{
  constructor(){}
 
  zaplac(typPlat){
    if(typPlat === 'payu'){
      window.open('https://www.payu.pl');

    }
    if(typPlat === 'przelewy24'){
      window.open('https://www.przelewy24.pl');

    }
  }
}