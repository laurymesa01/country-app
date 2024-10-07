import { Component, OnInit, inject, signal } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  private country_service = inject(CountryService);
  countries = signal<Country[]>([]);

  ngOnInit(){
    this.country_service.getCountries().subscribe({
      next: (countries) => {
        console.log('CO',countries);
        this.countries.set(countries)
      }
    })
  }
}
