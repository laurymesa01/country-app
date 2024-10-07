import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Country } from '../../models/country.model';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [CardModule],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss'
})
export class CountryCardComponent {

  @Input() country!: Country;

}
