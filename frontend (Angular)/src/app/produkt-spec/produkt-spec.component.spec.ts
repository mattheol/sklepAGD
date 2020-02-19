import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktSpecComponent } from './produkt-spec.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { KatalogComponent } from '../katalog/katalog.component';
import { ZamowienieComponent } from '../zamowienie/zamowienie.component';
import { PoprawneZamComponent } from '../poprawne-zam/poprawne-zam.component';
import { KoszykComponent } from '../koszyk/koszyk.component';
import { ProduktComponent } from '../produkt/produkt.component';
import { KontoComponent } from '../konto/konto.component';
