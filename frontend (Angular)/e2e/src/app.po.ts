import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl+'zloz-zamowienie') as Promise<any>;
  }

  getForm() {
    return element(by.name('zamowienieForm'))
  }

  getImie() {
    return element(by.name('imie'));
   }

   getNazwisko() {
    return element(by.name('nazwisko'));
   }

   getDostawa(){
    return element(by.name('dostawa'));

   }

   getMiasto(){
    return element(by.name('miasto'));

   }
   getUlica(){
    return element(by.name('ulica'));

   }

   getkodPocz(){
    return element(by.name('kodPocz'));
   }

   getNrDomu(){
    return element(by.name('nrDomu'));

   }
   getTelefon(){
    return element(by.name('telefon'));

   }

   getEmail(){
    return element(by.name('email'));
   }
   getButton(){
    return element(by.css("button[type = 'submit']"));
   }

   getNaMiejscu(){
     return element(by.css('h5'));
   }

   getNaMiej(){
    return element.all(by.css('h5'))
   }

   getPrzelewy(){
    return element(by.css('[src="assets/przelewy.jpg"]'));
  }

   getPrz(){
    return element.all(by.css('[src="assets/przelewy.jpg"]'))
   }


  getPayU(){
    return element(by.css('[src="assets/payu.jpg"]'));
  }

  getPa(){
    return element.all(by.css('[src="assets/payu.jpg"]'))
  }
}
