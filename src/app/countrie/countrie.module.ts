import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForCapitalComponent } from './pages/for-capital/forCapital.component';
import { ForCountrieComponent } from './pages/for-countrie/for-countrie.component';
import { ForRegionComponent } from './pages/for-region/for-region.component';
import { SeeCountrieComponent } from './pages/see-countrie/see-countrie.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ForCapitalComponent,
    ForCountrieComponent,
    ForRegionComponent,
    SeeCountrieComponent
  ],
  exports: [
    ForCapitalComponent,
    ForCountrieComponent,
    ForRegionComponent,
    SeeCountrieComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CountrieModule { }
