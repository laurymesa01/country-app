import { Component, HostBinding, Input, OnInit, effect, inject, signal } from '@angular/core';
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
export class LayoutComponent{

  @HostBinding('class.dark') get mode() { return this.darkMode(); }

  darkMode = signal<boolean>(false);

  constructor(){
    if (typeof window !== "undefined") {
      this.darkMode.set(JSON.parse(window.localStorage.getItem("darkMode") ?? "false"))
      if (this.darkMode() === true) {
        // this.checked = true;
      }
      effect(() => {
        window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
      });
    }
  }

  changeMode(event: boolean){
    this.darkMode.set(event);
    console.log(this.darkMode());

    // window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
  }


}
