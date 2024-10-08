import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.model';
import { CountryCardComponent } from "../../components/country-card/country-card.component";
import { ActivatedRoute, Params } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountryCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  @Input() region: string = '';
  private country_service = inject(CountryService);
  countries = signal<Country[]>([]);

  constructor(private route: ActivatedRoute,){}

  ngOnInit(){
    this.route.params.pipe(
      switchMap(params => {
        console.log('PARAMS',params)
        if (params['region']) {
          return this.country_service.getCountriesByRegion(params['region']);
        }
        else{
          return this.country_service.getCountries();
        }
      })
    ).subscribe({
      next: (countries) => this.countries.set(countries)
    })
  }
}
