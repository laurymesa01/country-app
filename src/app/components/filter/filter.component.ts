import { Component, signal } from '@angular/core';
import { Region } from '../../models/country.model';
import { KeyValuePipe } from "@angular/common";
import { RouterLink ,RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [KeyValuePipe, RouterLink, RouterLinkWithHref],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

  regions = Region;
  isFilterByRegionsMenuOpen: boolean = false;

  openFilter(){
    this.isFilterByRegionsMenuOpen = !this.isFilterByRegionsMenuOpen;
  }




}
