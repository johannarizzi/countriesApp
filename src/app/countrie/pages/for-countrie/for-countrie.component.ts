import { Component, OnInit } from '@angular/core';
import { CountrieService } from '../../services/countrie.service';

@Component({
  selector: 'app-for-countrie',
  templateUrl: './for-countrie.component.html',
  styleUrls: ['./for-countrie.component.css']
})
export class ForCountrieComponent implements OnInit {

   term: string = '';

  constructor(private countrieService: CountrieService) { }

  ngOnInit(): void {
  }

  search() {
    console.log(this.term);
    
    this.countrieService.searchCountrie(this.term)
    .subscribe( resp => {
      console.log(resp)
    })
  }

}
