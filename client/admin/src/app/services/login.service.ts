import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { addUser } from '../models/addUser';
import { Users } from '../models/users';




@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private loginUrl= environment.loginUrl;

  constructor(private http: HttpClient) { }


  getUserByEmail(email:string, password: string):Observable<addUser>{
    const url = `${this.loginUrl}`;
    const loginRequest = {
      email: email,
      password: password
    };

    return this.http.post<addUser>(url, loginRequest);
  }



}
