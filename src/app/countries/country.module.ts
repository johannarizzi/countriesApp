import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForCapitalComponent } from './pages/for-capital/forCapital.component';
import { ForCountryComponent } from './pages/for-country/for-country.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { SeeCountyComponent } from './pages/see-country/see-country.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ForCapitalComponent,
    ForCountryComponent,
    ForRegionComponent,
    SeeCountyComponent
  ],
  exports: [
    ForCapitalComponent,
    ForCountryComponent,
    ForRegionComponent,
    SeeCountyComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CountryModule { }
