import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

import { Country } from '../../interfaces/countries.interfaces';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styleUrls: ['./for-country.component.css']
})
export class ForCountryComponent implements OnInit {

   term: string = '';
   bug:boolean = false;
   countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search() {
    this.bug = false;
    console.log(this.term);
  
    this.countryService.searchCountry(this.term)
    .subscribe( (countries) => {
    console.log (countries)
    this.countries = countries;

    }, (err) => {
     this.bug = true;
     this.countries = [];
    }
    
    );
  }

}
