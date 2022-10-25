import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForCapitalComponent } from './countries/pages/for-capital/forCapital.component';
import { ForCountryComponent } from './countries/pages/for-country/for-country.component';
import { ForRegionComponent } from './countries/pages/for-region/for-region.component';
import { SeeCountyComponent } from './countries/pages/see-country/see-country.component';

const routes: Routes = [

  {
    path: '',
    component: ForCountryComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: ForRegionComponent,
  },
  {
    path: 'capital',
    component: ForCapitalComponent,

  },
  { 
    path: 'pais/:id',
    component: SeeCountyComponent,
  },
  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
