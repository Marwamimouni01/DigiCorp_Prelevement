import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, from, map, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
 
  token:any

  constructor(private http: HttpClient,private router:Router) {

   }
    utf8_to_b64(str:any) {
    return window.btoa(unescape(encodeURIComponent(str)));
  }
  
   b64_to_utf8(str:any) {
    return decodeURIComponent(escape(window.atob(str)));
  }
   





  private handleError(error: HttpErrorResponse) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = 'An error occurred:', error.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      // console.error(         `Backend returned code ${error.status}, ` +     `body was: ${error.error}`);
    }

    // localStorage.setItem('error', error.message);
    // return an observable with a user-facing error message
    // return throwError('Something bad happened; please try again later.');
    // console.log(errorMessage);
    return throwError(errorMessage);
  }
}
