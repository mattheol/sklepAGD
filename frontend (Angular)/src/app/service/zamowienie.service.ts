import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produkt } from '../produkt/produkt.component';




/**
 * Serwis odpowiedzialny za wysyłanie zapytań o zasoby zamówienia oraz towaru do serwera
 */
@Injectable({
  providedIn: 'root'
})
export class ZamowienieService {

  constructor(private httpClient:HttpClient) { }

  /**
   * Metoda odpowiedzialna za wysłanie zapytania POST /zamowienia do serwera
   * @param newZamowienie Zamówienie
   * @returns Obserwator, czekający na odpowiedź z serwera
   */
  saveZamowienie(newZamowienie:Zamowienie){
    console.log(newZamowienie)
    return this.httpClient.post<Zamowienie>(`${address}/zamowienia`,newZamowienie)
  }

   /**
   * Metoda odpowiedzialna za wysłanie zapytania POST /towary do serwera
   * @param newTowary Lista towarów
   * @returns Obserwator, czekający na odpowiedź z serwera
   */
  saveTowary(newTowary:Towar[]){
    return this.httpClient.post<Towar[]>(`${address}/towary`,newTowary)
  }
}

const address = 'http://localhost:8080';




/**
 * XD
 */
export class Zamowienie{
  constructor(public idZam,public klient, public imie,public nazwisko, public dataZam,
     public koszt, public typDostawy, public telefon, public email,public dodOpis,
     public status, public typPlatnosci, public miasto,public ulica,public nrDomu, public kodPocz){}
}





export class Towar{
  constructor(public zamowienie:Zamowienie,public produkt:Produkt, public ilosc){}
}
