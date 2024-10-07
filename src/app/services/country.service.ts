import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor() { }

  getCountries(){
    return this.http.get<Country[]>(`${this.apiUrl}/all`);
  }

}
