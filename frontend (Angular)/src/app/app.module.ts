import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduktComponent } from './produkt/produkt.component';
import { MenuComponent } from './menu/menu.component';
import { ProduktSpecComponent } from './produkt-spec/produkt-spec.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ZamowienieComponent } from './zamowienie/zamowienie.component';
import { PoprawneZamComponent } from './poprawne-zam/poprawne-zam.component';
import { KontoComponent } from './konto/konto.component';
import { KoszykComponent } from './koszyk/koszyk.component';
import { KatalogComponent } from './katalog/katalog.component';


@NgModule({
  declarations: [
    AppComponent,
    ProduktComponent,
    MenuComponent,
    KatalogComponent,
    ProduktSpecComponent,
    ZamowienieComponent,
    PoprawneZamComponent,
    KontoComponent,
    KoszykComponent
  ],
  imports: [
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
