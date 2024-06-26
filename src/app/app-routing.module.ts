import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DetailCountryComponent } from './components/detail-country/detail-country.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'detail-country/:nameCountry', component: DetailCountryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
