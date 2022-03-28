import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:5083/api/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':  '*', 'Access-Control-Allow-Credentials': 'true'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'Login/login', {
      email,
      password
    }, httpOptions);
  }

  register(firstName: string, lastName: string, email: string, mobileNo: number, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'Registration', {
      firstName,
      lastName,
      email,
      mobileNo,
      password
    }, httpOptions);
  }
}
