import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Output() onEnter   : EventEmitter<string> = new EventEmitter();


  debouncer : Subject<string> = new Subject;
  name: string = '';

  searchCountryByName(){
    this.onEnter.emit(this.name);
  }

  keyPressed(){
    this.onEnter.emit(this.name)
  }

}
