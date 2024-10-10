import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country, Region, Name, Status, Side, StartOfWeek } from '../../models/country.model';
import { switchMap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-country-detail',
  standalone: true,
  imports: [],
  templateUrl: './country-detail.component.html',
  styleUrl: './country-detail.component.scss'
})
export class CountryDetailComponent  implements OnInit{

  country = signal<Country>({
    name: {
      common: '',
      official: ''
    },
    languages: {},
    cca2: '',
    cca3: '',
    status: Status.OfficiallyAssigned,
    unMember: false,
    idd: {},
    altSpellings: [],
    region: Region.Africa,
    translations: {},
    latlng: [],
    landlocked: false,
    area: 0,
    flag: '',
    maps: {
      googleMaps: '',
      openStreetMaps: ''
    },
    population: 0,
    car: {
      side: Side.Left
    },
    timezones: [],
    continents: [],
    flags: {
      png: '',
      svg: ''
    },
    coatOfArms: {},
    startOfWeek: StartOfWeek.Monday,
    capitalInfo: {}
  })
  countries = signal<Country[]>([]);
  private location  = inject(Location);
  private country_service = inject(CountryService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  constructor(){}

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(({name}) => this.country_service.getCountriesByName(name))
    ).subscribe({
      next: (country) => {
        console.log(country);

        this.country.set(country[0])
      }
    })
    this.countries.set(this.country_service.countries());
  }

  getNativeName(){
    if (this.country().altSpellings[2]) {
      return this.country().altSpellings[2];
    }
    return this.country().altSpellings[1];
  }

  getLanguages(){
    const languages: string[] = [];
    if (!this.country().languages) {
      return;
    }
    Object.keys(this.country().languages).forEach(language => languages.push(this.country().languages[language]));
    return languages.join(', ');
  }

  getCurrencies(){
    const currencies: string[] = [];
    if (!this.country().currencies) {
      return;
    }
    Object.keys(this.country().currencies!).forEach(currency => currencies.push(this.country().currencies![currency]['name']));
    return currencies.join(', ');
  }

  getBorders(){
    const countryBorders: string[] = [];
    if (!this.country().borders) {
      return null;
    }
    this.countries().filter(c => this.country().borders!.includes(c.cca3) ? countryBorders.push(c.name.common) : null)
    return countryBorders;
  }

  back(){
    this.location.back();
  }

}
