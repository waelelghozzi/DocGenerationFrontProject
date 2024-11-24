import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse ,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) {  }
  
public UserName : string; public Password : string;

  login(name:string ,password:string): Observable<HttpResponse<any>> { 
    this.UserName=name;
    this.Password=password;
    const User = { "UserName": name, "password": password } 
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post('https://localhost:7298/api/authentication/authenticate', User, { observe: 'response', headers: httpOptions.headers }); }

}

