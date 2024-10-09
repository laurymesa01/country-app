import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { SearchComponent } from "../../components/search/search.component";
import { FilterComponent } from "../../components/filter/filter.component";
import { Country } from '../../models/country.model';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FilterComponent, HeaderComponent, RouterOutlet, SearchComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {


}
