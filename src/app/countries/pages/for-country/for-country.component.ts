import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-country',
  templateUrl: './for-country.component.html',
  styleUrls: ['./for-country.component.css']
})
export class ForCountryComponent implements OnInit {

   term: string = '';
   bug:boolean = false;

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  search() {
    this.bug = false;
    console.log(this.term);
  
    this.countryService.searchCountry(this.term)
    .subscribe( (countries) => {
    console.log (countries);
    }, (err) => {
     this.bug = true;
    }
    
    );
  }

}
