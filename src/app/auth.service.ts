import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  registerUserSer(user){
    return this.http.post('http://localhost:3000/api/register',user);
  }
  loginUserSer(user){
    return this.http.post('http://localhost:3000/api/login',user);
  }
  loggedIn(){
    return !!localStorage.getItem('token');
  }
  getToken(){
    return localStorage.getItem('token');
  }
  logout(){
    return localStorage.removeItem('token');
  }
}
