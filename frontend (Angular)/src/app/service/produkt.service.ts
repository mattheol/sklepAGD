import { Injectable } from '@angular/core';
import { Produkt } from '../produkt/produkt.component';
import { Kategoria } from '../produkt/produkt.component';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

const address = 'http://localhost:8080';


/**
 * Serwis odpowiedzialny za wysyłanie zapytań o zasoby produktów do serwera
 */
@Injectable({
  providedIn: 'root'
})
export class ProduktService {

  constructor(private httpClient:HttpClient) { }
  
  products :Produkt[]= [
   // new Produkt(1,'Telewizor SAMSUNG LED UE43RU7102',2250, this.categories[1]),
   // new Produkt(2,'Telewizor',2250, this.categories[1]),
   // new Produkt(3,'Pralka',7682.99, this.categories[0]),
    //new Produkt(4,'Suszarka', 1080.69,  this.categories[0])
  ] 

    /**
   * Metoda odpowiedzialna za wysłanie zapytania GET /produkty do serwera
   * @returns Obserwator, czekający na odpowiedź z serwera
   */
  getAllProducts(){
    return this.httpClient.get<Produkt[]>(`${address}/produkty`)
  }

    /**
   * Metoda odpowiedzialna za wysłanie zapytania GET /produkty/{id} do serwera
   * @param id Id produktu
   * @returns Obserwator, czekający na odpowiedź z serwera
   */
  getProductById(id:number){
    return this.httpClient.get<Produkt>(`${address}/produkty/${id}`)
  }

    /**
   * Metoda odpowiedzialna za wysłanie zapytania GET /kategoria do serwera
   * @returns Obserwator, czekający na odpowiedź z serwera
   */
  getAllCategories(){
    return this.httpClient.get<Kategoria[]>(`${address}/kategorie`)
  }

    /**
   * Metoda odpowiedzialna za wysłanie zapytania GET /produkty/?kategoria='nazwa' do serwera
   * @param kategoria Nazwa kategorii
   * @returns Obserwator, czekający na odpowiedź z serwera
   */
  getAllProductsByCategory(kategoria:string){
    let headers = new HttpHeaders()
    headers.append('Content-Type', 'application/json');
    let params = new HttpParams().set("kategoria",kategoria)
    return this.httpClient.get<Produkt[]>(`${address}/produkcik`,{headers,params})
  }

 
}
