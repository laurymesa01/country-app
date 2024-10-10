import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../models/country.model';
import { RouterLink, RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [RouterLink, RouterLinkWithHref],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss'
})
export class CountryCardComponent{

  @Input() country!: Country;

}
