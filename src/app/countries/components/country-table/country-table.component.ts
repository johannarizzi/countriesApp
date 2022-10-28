import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/countries.interfaces';


@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: []
})
export class CountryTableComponent implements OnInit {


  @Input() countries: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
