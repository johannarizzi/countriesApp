import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

import { Country } from '../interfaces/countries.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient) { }

   searchCountry (term: string):Observable<Country[]> {

    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>( url );
   }

   searchCapital (term: string):Observable<Country[]> {

    const url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>( url );
   }
   
   getCountyForAlpha (id: string):Observable<Country> {

    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>( url );
   }

}
