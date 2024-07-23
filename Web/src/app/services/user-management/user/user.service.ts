import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { IUser } from '../../../types/user-management/user-types';

@Injectable({
  providedIn: 'root'
})
export class UserService  {

  constructor( private http: HttpClient ) { }



  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>('https://localhost:7178/api/User').pipe(
      tap((response) => {
        console.log(response); // Log the response if needed
      }),
      catchError((error) => {
        console.error('Error fetching users:', error);
        // Handle error gracefully, e.g., throw a custom error, return a default value, etc.
        return throwError(error);
      })
    );
  }



}
