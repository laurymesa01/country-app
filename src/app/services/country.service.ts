import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Country, Region } from '../models/country.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient);
  private apiUrl = 'https://restcountries.com/v3.1';
  private countriesList = signal<Country[]>([]);
  constructor() { }

  getCountries(){
    return this.http.get<Country[]>(`${this.apiUrl}/all`);
  }

  getCountriesByRegion(region: string){
    return this.http.get<Country[]>(`${this.apiUrl}/region/${region}`)
  }

  getCountriesByName(name: string){
    return this.http.get<Country[]>(`${this.apiUrl}/name/${name}`)
  }

  countries(){
    this.getCountries().subscribe({
      next: (countries) => this.countriesList.set(countries)
    });
    return this.countriesList();
  }

}
