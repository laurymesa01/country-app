import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.model';
import { CountryCardComponent } from "../../components/country-card/country-card.component";
import { ActivatedRoute } from '@angular/router';
import {  switchMap } from 'rxjs';
import { SearchComponent } from "../../components/search/search.component";
import { FilterComponent } from "../../components/filter/filter.component";
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorMessageComponent } from "../../components/error-message/error-message.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountryCardComponent, ErrorMessageComponent, FilterComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  @Input() region: string = '';

  isError: boolean = false;
  errorMessage!: HttpErrorResponse;
  private country_service = inject(CountryService);
  countries = signal<Country[]>([]);

  constructor(private route: ActivatedRoute,){}

  ngOnInit(){
    this.route.params.pipe(
      switchMap(params => {
        if (params['region']) {
          return this.country_service.getCountriesByRegion(params['region']);
        }
        else{
          return this.country_service.getCountries();
        }
      })
    ).subscribe({
      next: (countries) => this.countries.set(countries),
      error: (err: HttpErrorResponse) => {
        this.isError = true;
        this.errorMessage = err;
      }
    })
  }

  searchCountry(name: string){
    if (name && name.length != 0) {
      this.country_service.getCountriesByName(name).subscribe({
        next: countries => this.countries.set(countries),
        error: (err: HttpErrorResponse) => {
          this.isError = true;
          this.errorMessage = err;
        }
      })
    }

  }
}
