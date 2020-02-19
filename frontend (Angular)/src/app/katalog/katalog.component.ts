import { Component, OnInit, EventEmitter } from '@angular/core';
import { Produkt, Kategoria } from '../produkt/produkt.component';
import { ProduktService } from '../service/produkt.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';


/**
 * Komponent odpowiedzialny za prezentację katalogu produktów
 */
@Component({
  selector: 'app-katalog',
  templateUrl: './katalog.component.html',
  styleUrls: ['./katalog.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('show', style({
        opacity: 1,
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show => hide', [
        animate('300ms')
      ]),
      transition('hide => show', [
        animate('300ms')
      ]),
    ]),
    trigger('alignAnimation', [
      // ...
      state('show', style({
        transform: 'translateX(49%)'
        
      })),
      state('hide', style({
        transform: 'translateX(0%)'
      })),
      transition('show => hide', [
        animate('200ms')
      ]),
      transition('hide => show', [
        animate('200ms')
      ]),
    ])
  ]
})
export class KatalogComponent implements OnInit {
  categories : Kategoria[]
  currentKat : string

  inputSearch:string = ''
  public eventsSubject: Subject<string> = new Subject<string>();
  
  public sortSubject: Subject<string> = new Subject<string>();

  filtrSubject: Subject<any> = new Subject<any>();
  buttonPressed :boolean = false
  checkboxFiltr = false
  priceDown = null
  priceTop = null

  
  get stateName(){
    return this.buttonPressed ? 'show':'hide'
  }

  /**
   * Metoda odpowiedzialna za wywołanie wyszukania produktu po naciśnięciu przycisku wyszukaj do ProduktComponent 
   */
  search(){
    this.eventsSubject.next(this.inputSearch);
  }
  /**
   * Metoda odpowiedzialna za wywołanie sortowania do ProduktComponent
   * @param type typ sortowania, może przyjmować następujące wartości - ASC, DESC
   */
  sortuj(type:string){
    this.sortSubject.next(type)
  }

  /**
   * Metoda odpowiedzialna za wywołanie filtrowania do ProduktComponent
   */
  filtruj(){
    this.trigger()
    this.filtrSubject.next({checkboxFiltr:this.checkboxFiltr, priceDown:this.priceDown, priceTop:this.priceTop})
  }

  constructor(private router:ActivatedRoute,private service:ProduktService) { }

  /**
   * Metoda wywoływana przy inicjalizacji komponentu, pobiera wszystkie kategorie, 
   * oraz przekazuje do ProduktComponent informację o wybranej kategorii
   */
  ngOnInit() {
    this.service.getAllCategories().subscribe(response => this.categories = response)
    this.router.params.subscribe(
      params => {
          this.currentKat = this.router.snapshot.params['category']
      });
     
 
  }
  
  /**Metoda wywołana po wciśnieciu przycisku filtra */
  trigger(){
    this.buttonPressed = ! this.buttonPressed
  }


}
