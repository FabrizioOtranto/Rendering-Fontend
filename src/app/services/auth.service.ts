import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router'
import {Observable} from 'rxjs'
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url:string;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { 
    this.url = Global.url;
  }

  getToken(){
    return localStorage.getItem('token')
  }

  login(user:any){
    return this.http.post(<any>this.url + 'login',user)
    
  }

  loggedIn(){
    const user = localStorage.getItem('user')
    if (user == 'danny'){
    return !!localStorage.getItem('token')
  }
  }

  logOut(){
    localStorage.removeItem('token')
    this.router.navigate(['/index'])
  }

}
