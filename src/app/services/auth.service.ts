import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  registerData(data:any){
    return this.http.post('http://apolis-grocery.herokuapp.com/api/auth/register',data);
  }
  loginData(data:any){
    return this.http.post('http://apolis-grocery.herokuapp.com/api/auth/login',data);
  }
  logout(){
    localStorage.clear()
  }
  getToken():boolean{
    if(localStorage.getItem('token')){return true;}
    else{return false}
  }
}
