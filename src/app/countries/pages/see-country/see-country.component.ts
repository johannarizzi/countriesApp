import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styleUrls: ['./see-country.component.css']
})
export class SeeCountyComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private CountryService: CountryService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe( ({id}) => {
      console.log(id)
      this.CountryService.getCountyForAlpha(id)
      .subscribe(country => {
        console.log(country);
      })

    })

  }

}
