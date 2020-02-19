import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



/**
 * Serwis odpowiedzialny za wysyłanie zapytań o zasoby produktów do serwera
 */
@Injectable({
  providedIn: 'root'
})
export class KlientService {

  constructor(private httpClient:HttpClient) { }
  /**
   * Metoda odpowiedzialna za wysłanie zapytania GET /klieci/{id} do serwera
   * @param id Id Klienta
   * @returns Obserwator, czekający na odpowiedź z serwera
   */
  getKlientById(id){
    return this.httpClient.get<Klient>(`http://localhost:8080/klienci/${id}`)
  }
}


export class Klient{
  constructor(public idKlient:number,public login: string, public haslo: string, public imie: string, public nazwisko: string, public telefon: string, 
    public email: string, public kodPocz: string, public nrDomu: string, public miasto: string, public ulica: string) { }
}
