import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent{

  @Input() errorMessage!: HttpErrorResponse;
  @Input() isError: boolean = false;


  closeModal(){
    this.isError = !this.isError;
  }

}
