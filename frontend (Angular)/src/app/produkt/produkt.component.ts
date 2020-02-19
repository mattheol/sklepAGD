import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ProduktService } from '../service/produkt.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr);



/**
 * Klasa służąca do przechowywania informacji o produkcie
 */
export class Produkt{
  constructor(public idProd:number, public nazwa:string, public cena:number,
    public opis:string,public specyfikacja:string,public liczbaSztuk:number,
    public waga:number,public kategoria:Kategoria ){}
}



/**
 * Klasa służąca do przechowywania informacji o kategoorii
 */
export class Kategoria{
  constructor(public id:number, public nazwa:string){}
}




const chunk = 5;


/**
 * Komponent odpowiedzialny za prezentację listy produktów
 */
@Component({
  selector: 'app-produkt',
  templateUrl: './produkt.component.html',
  styleUrls: ['./produkt.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('items', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0}),  // initial
        animate('500ms cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ])
    ])
  ],
})
export class ProduktComponent implements OnInit {
  eventsSubscription: Subscription;
  @Input() events: Observable<string>;
  @Input() sortEvent: Observable<string>;
  @Input() filtrEvent: Observable<any>;
  products:Produkt[]
  category : string
  pages : number[]=[]
  currentPage :number
  pageProducts:any=[]
  currentProducts: Produkt[]
  constructor(private productService:ProduktService,private router:ActivatedRoute) { };

  /**
   * Metoda wywoływana przy inicjalizacji komponentu, rejestruje obserwatorów z komponentu Katalog oraz regauje na zmiany,
   * pobiera produkty z wybranej kategorii.
   */
  ngOnInit() {
    this.events.subscribe(data=> this.search(data));
    this.sortEvent.subscribe(type=> this.sort(type));
    this.filtrEvent.subscribe(filtr => this.filtruj(filtr));
    this.router.params.subscribe(
      params => {
        this.currentProducts = []
        this.pageProducts = []
        this.pages =[]
        this.category = this.router.snapshot.params['category']
        if(this.category){
          this.productService.getAllProductsByCategory(this.category).subscribe(response => {
            this.products=response
            for (let i=0;i<this.products.length; i+=chunk) {
              this.pageProducts.push(this.products.slice(i,i+chunk))
            }
            for(let j=0;j<this.pageProducts.length;j++){
              this.pages.push(j+1)
            }
            this.currentProducts=this.pageProducts[0]    
            this.currentPage = 0
          })
        }
        else{
          this.productService.getAllProducts().subscribe( response => {
            this.products = response

            for (let i=0;i<this.products.length; i+=chunk) {
              this.pageProducts.push(this.products.slice(i,i+chunk))
            }
            for(let j=0;j<this.pageProducts.length;j++){
              this.pages.push(j+1)
            }
            this.currentProducts=this.pageProducts[0]    
            this.currentPage = 0

          })
        }
      });     
  }

  changePage(page){
    this.currentPage = page-1
    this.currentProducts=this.pageProducts[page-1]    
  }

  /**
   * Metoda odpowiedzialna za sortowanie produktów
   * @param type Rodzaj sortowania(ASC, DESC)
   */
  sort(type:string){
    this.currentProducts = []
    this.pageProducts = []
    this.pages =[]
    if(type =="asc"){
    this.products.sort((a,b)=>{
      if(a.cena>b.cena) return 1
      if(a.cena==b.cena) return 0
      else return -1
    })
    }
    else{
      this.products.sort((a,b)=>{
        if(a.cena>b.cena) return -1
        if(a.cena==b.cena) return 0
        else return 1
      })
      }
      for (let i=0;i<this.products.length; i+=chunk) {
        this.pageProducts.push(this.products.slice(i,i+chunk))
      }
      for(let j=0;j<this.pageProducts.length;j++){
        this.pages.push(j+1)
      }
      this.currentProducts=this.pageProducts[0]    
      this.currentPage = 0
    }
 /**
  * Metoda odpowiedzialna za wyszukanie produktów z aktualnej kategorii, które zawierają podane wyrażenie
  * @param data wyrażenie do wyszukania
  */
  search(data:string){
        this.currentProducts = []
        this.pageProducts = []
        this.pages =[]
        if(this.category){
          this.productService.getAllProductsByCategory(this.category).subscribe(response => 
            {
              this.products=response
              this.products=this.products.filter(product => 
                (product.nazwa.toLowerCase().includes(data.toLowerCase())))
              for (let i=0;i<this.products.length; i+=chunk) {
                this.pageProducts.push(this.products.slice(i,i+chunk))
              }
              for(let j=0;j<this.pageProducts.length;j++){
                this.pages.push(j+1)
              }
              this.currentProducts=this.pageProducts[0]    
              this.currentPage = 0
              })
        }
        else{
          this.productService.getAllProducts().subscribe( response => {
            this.products = response
            this.products=this.products.filter(product => 
              (product.nazwa.toLowerCase().includes(data.toLowerCase()))
            )
            for (let i=0;i<this.products.length; i+=chunk) {
              this.pageProducts.push(this.products.slice(i,i+chunk))
            }
            for(let j=0;j<this.pageProducts.length;j++){
              this.pages.push(j+1)
            }
            this.currentProducts=this.pageProducts[0]    
            this.currentPage = 0
          })
        }
  }
 /**
  * Metoda odpowiedzialna za zastosowanie filtra do aktualnie przeglądanych produktów
  * @param filtr Zawiera informacje o filtrze do zastosowania
  */
  filtruj(filtr){  
    this.currentProducts = []
    this.pageProducts = []
    this.pages =[]
    if(!filtr.priceDown){
      filtr.priceDown = 0
    }
    if(!filtr.priceTop){
      filtr.priceTop = Infinity
    }
    this.products=this.products.filter(product => {
      if(filtr.checkboxFiltr)
        return filtr.priceDown <= product.cena && product.cena <= filtr.priceTop && product.liczbaSztuk>0
      else
        return filtr.priceDown <= product.cena && product.cena <= filtr.priceTop
    })
    for (let i=0;i<this.products.length; i+=chunk) {
      this.pageProducts.push(this.products.slice(i,i+chunk))
    }
    for(let j=0;j<this.pageProducts.length;j++){
      this.pages.push(j+1)
    }
    this.currentProducts=this.pageProducts[0]    
    this.currentPage = 0
  }




}
