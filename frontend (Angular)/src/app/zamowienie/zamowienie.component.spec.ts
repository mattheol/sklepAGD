import { async, ComponentFixture, TestBed, tick, fakeAsync, inject, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgForm, FormBuilder } from '@angular/forms';

import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZamowienieComponent } from './zamowienie.component';
import { DebugElement, NgZone } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { KatalogComponent } from '../katalog/katalog.component';
import { PoprawneZamComponent } from '../poprawne-zam/poprawne-zam.component';
import { ProduktComponent, Produkt, Kategoria } from '../produkt/produkt.component';
import { ProduktSpecComponent } from '../produkt-spec/produkt-spec.component';
import { KoszykComponent } from '../koszyk/koszyk.component';
import { KontoComponent } from '../konto/konto.component';
import { ZamowienieService, Zamowienie, Towar } from '../service/zamowienie.service';
import { Observable, of } from 'rxjs';
import { Klient } from '../service/klient.service';
import { doesNotThrow } from 'assert';
import { AppComponent } from '../app.component';
import { MenuComponent } from '../menu/menu.component';
import { ProduktService } from '../service/produkt.service';
describe('ZamowienieComponent', () => {
  let component: ZamowienieComponent;
  let fixture: ComponentFixture<ZamowienieComponent>;
  let de: DebugElement;
  let zamowienieService:ZamowienieService;
  let spy:any;
  let spy2:any;
  let ngZone:any;
  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent, ZamowienieComponent, KatalogComponent, PoprawneZamComponent, ProduktComponent, ProduktSpecComponent,
      MenuComponent, KoszykComponent,KontoComponent ],
      imports: [ FormsModule,BrowserModule,
        AppRoutingModule,
        MatTabsModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        HttpClientTestingModule
        ],
        providers:[{provide:ComponentFixtureAutoDetect,useValue:true}]
    })
    .compileComponents().then(()=>{
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
        fixture = TestBed.createComponent(ZamowienieComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement
        tick()
    })
  }));



  it('should pick Kurier as default', () =>{
    expect(component.dostawa).toEqual('Kurier');
  });

  it('should have empty dodOpis', () =>{
    expect(component.dodOpis).toBe(undefined);
  });



  it('zlozZamowienie() should show alert message if ZamowienieForm is invalid ',()=>{
            spyOn(window,'alert')
            component.zlozZamowienie(component.zamForm)
            expect(window.alert).toHaveBeenCalledWith("Wprowadź poprawne dane!\nSprawdź, czy wszystkie wymagane pola są wypełnione poprawnie.")
  
  });

  it('should have default pay method as payu', () =>{
     expect(component.typPlat).toEqual(1);
  });
 

  it('should have ZamowienieForm as invalid if telefon length !=9',(async(done)=>{
            component.klient.telefon='1234';
            fixture.detectChanges()
            await fixture.whenStable()
            expect(component.zamForm.invalid).toBeTruthy();
            done()
        }));
        
      

  it('zlozZamowienie() should invoke saveZamowienie once if ZamowienieForm is valid',(async(done) =>{
    component.klient = new Klient(1,'','','imie','nazwisko','123456789','','22222','3a','Miasto','Ulica');
    zamowienieService = de.injector.get(ZamowienieService);
    let produktService:ProduktService = de.injector.get(ProduktService)
    spy = spyOn(zamowienieService,'saveZamowienie').and.returnValue(of(new Zamowienie(-1,null,'',
    '',null,1,'','','','','','','','','','')))
    let prod =new Produkt(-1,'',1,'','',1,1,new Kategoria(1,''))
    let spy1 = spyOn(produktService,'getProductById').and.returnValue(of(prod))
    component.koszyk.push(new Towar(null,prod,3));
    spy2 = spyOn(zamowienieService,'saveTowary').and.returnValue(of(null))
    fixture.detectChanges()
    await fixture.whenStable()
    component.zlozZamowienie(component.zamForm)
    expect(zamowienieService.saveZamowienie).toHaveBeenCalledTimes(1)
    done()
  }));

  it('zlozZamowienie() should not invoke saveZamowienie if ZamowienieForm is invalid(invalid kodPocz and telefon)',(async(done)=>{
      component.klient = new Klient(1,'','','imie','nazwisko','000','','0','3a','Miasto','Ulica');
      zamowienieService = de.injector.get(ZamowienieService);
      spy = spyOn(zamowienieService,'saveZamowienie').and.returnValue(of(new Zamowienie(-1,null,'',
      '',null,1,'','','','','','','','','','')))
      spy2 = spyOn(zamowienieService,'saveTowary').and.returnValue(of(null))
      fixture.detectChanges()
      await fixture.whenStable()
      component.zlozZamowienie(component.zamForm)
      expect(zamowienieService.saveZamowienie).toHaveBeenCalledTimes(0)
      done()
    }));

})
