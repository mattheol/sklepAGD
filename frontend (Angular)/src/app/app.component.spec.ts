import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ProduktSpecComponent } from './produkt-spec/produkt-spec.component';
import { ProduktComponent } from './produkt/produkt.component';
import { MenuComponent } from './menu/menu.component';
import { ZamowienieComponent } from './zamowienie/zamowienie.component';
import { PoprawneZamComponent } from './poprawne-zam/poprawne-zam.component';
import { KontoComponent } from './konto/konto.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { KatalogComponent } from './katalog/katalog.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        MatTabsModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
      ],
      declarations: [
        AppComponent,
        ProduktComponent,
        MenuComponent,
        ProduktSpecComponent,
        ZamowienieComponent,
        PoprawneZamComponent,
        KontoComponent,
        KoszykComponent,
        KatalogComponent,

      ],
      providers: [],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'sklepAGD'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('sklepAGD');
  });

});
