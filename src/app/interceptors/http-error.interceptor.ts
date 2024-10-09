import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';
      if (error.status == 404) {
        errorMessage = 'The country you are searching for does not exist';
      }
      else if(error.status == 500){
        errorMessage = 'Internal server error';
      }
      else{
        errorMessage = 'An error occurred';
      }
      return throwError(()=> errorMessage);
    }));
};
