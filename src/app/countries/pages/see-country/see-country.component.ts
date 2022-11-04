import { Country } from './../../interfaces/countries.interfaces';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountyComponent implements OnInit {

 country! : Country;


  constructor(
    private activatedRoute: ActivatedRoute,
    private CountryService: CountryService
    ) { }

  ngOnInit(): void {

  this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.CountryService.getCountyForAlpha(id)),
      tap(console.log)
    )
    .subscribe( country => this.country = country[0]);
    
  }

}
