import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForCapitalComponent } from './countrie/pages/for-capital/forCapital.component';
import { ForCountrieComponent } from './countrie/pages/for-countrie/for-countrie.component';
import { ForRegionComponent } from './countrie/pages/for-region/for-region.component';
import { SeeCountrieComponent } from './countrie/pages/see-countrie/see-countrie.component';

const routes: Routes = [

  {
    path: '',
    component: ForCountrieComponent,
    pathMatch: 'full'
  },
  {
    path: 'region',
    component: ForRegionComponent,
  },
  {
    path: 'capital',
    component: ForCapitalComponent

  },
  { 
    path: 'pais/:id',
    component: SeeCountrieComponent
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
