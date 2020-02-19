import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduktComponent } from './produkt/produkt.component';
import { KatalogComponent } from './katalog/katalog.component';
import { ProduktSpecComponent } from './produkt-spec/produkt-spec.component';
import { ZamowienieComponent } from './zamowienie/zamowienie.component';
import { PoprawneZamComponent } from './poprawne-zam/poprawne-zam.component';
import { KontoComponent } from './konto/konto.component';
import { KoszykComponent } from './koszyk/koszyk.component';


const routes: Routes = [
  {path:'',redirectTo:'katalog',pathMatch:'full'},
  {path:'katalog', component: KatalogComponent},
  {path:'katalog/:category', component: KatalogComponent},
  {path:'produkt/:id', component: ProduktSpecComponent},
  {path:'zloz-zamowienie', component: ZamowienieComponent},
  {path:'poprawne-zamowienie/:id', component: PoprawneZamComponent},
  {path: 'konto', component: KontoComponent},
  {path: 'koszyk', component:KoszykComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
