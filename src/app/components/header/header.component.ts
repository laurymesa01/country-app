import { Component, EventEmitter, HostBinding, Input, OnInit, Output, effect, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent{

  @Output() onDarkModeSwitch = new EventEmitter<boolean>();
  @HostBinding('class.dark') get mode() {return this.darkMode(); }

  darkMode = signal<boolean>(false);
  checked: boolean = false;
  initialize:boolean = false;

  // constructor(){
  //   if (typeof window !== "undefined") {
  //     this.darkMode.set(JSON.parse(window.localStorage.getItem("darkMode") ?? "false"))
  //     if (this.darkMode() === true) {
  //       this.checked = true;
  //     }
  //     this.initialize = true;
  //     effect(() => {
  //       window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
  //     });
  //   }
  // }

  changeMode(){
    this.darkMode.set(!this.darkMode())
    this.onDarkModeSwitch.emit(this.darkMode());
  }


}
