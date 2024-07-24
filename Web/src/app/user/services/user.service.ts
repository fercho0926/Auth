import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Login } from '../interfaces/login';
import { Observable } from 'rxjs';
import { Sesion } from '../interfaces/sesion';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseUrl: string = environment.ApiUrl + 'login/';
  constructor(private http: HttpClient) {}

  sigIn(request: Login): Observable<Sesion> {
    return this.http.post<Sesion>(this.baseUrl, request);
  }
}
