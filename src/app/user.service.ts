import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   baseUrl = "http://localhost:8080/public"
  constructor(private http : HttpClient) { }

signupUser(userData : FormData) : Observable<User> {
  this.baseUrl ="http://localhost:8080/public/signup"
  return  this.http.post<User>(this.baseUrl,userData)
}
loginUser(userName : String , password : String) : Observable<String>{
  this.baseUrl = 'http://localhost:8080/public/login'
  const payload = {userName : userName, password : password}
  return this.http.post(this.baseUrl,payload,{responseType : 'text'})
}
 getCurrentUser(): Observable<any> {
  const token = localStorage.getItem('jwtToken')
  const headers = new HttpHeaders({
    Authorization : `Bearer ${token}`
  })
  this.baseUrl = "http://localhost:8080/user/getUser"
    return this.http.get<any>(this.baseUrl,{ headers });
  }
} 