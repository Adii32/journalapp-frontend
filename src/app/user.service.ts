import { HttpClient, HttpClientModule, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { text } from 'stream/consumers';
import { JournalEntry } from './journal-entry';

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
  
  sendResetToken(email : string) : Observable<any> {
    const params = new HttpParams().set('email',email);
    this.baseUrl = "http://localhost:8080/auth/forgot-password"
    return this.http.post(this.baseUrl,null,{params,responseType : 'text'})

  }
  resetToken(token : string,newPassword : string) : Observable<any> {
      this.baseUrl = "http://localhost:8080/auth/reset-password"
    const params = new HttpParams().set('token',token).set('newPassword',newPassword)
    return this.http.post(this.baseUrl,null,{params,responseType : 'text'})
  }
    getAllUsers() : Observable<User[]> {
      this.baseUrl = "http://localhost:8080/user/getAllUsers"
    const token = localStorage.getItem('jwtToken')
    const headers = new HttpHeaders({
      Authorization : `Bearer ${token}`
    })
    return this.http.get<User[]>(this.baseUrl,{headers })
  }
      getUserById(id : number) : Observable<User> {
      this.baseUrl = `http://localhost:8080/user/id/${id}`
    const token = localStorage.getItem('jwtToken')
    const headers = new HttpHeaders({
      Authorization : `Bearer ${token}`
    })
    return this.http.get<User>(this.baseUrl,{headers})
  }
  getPostIfFriends(ownerId : number) : Observable<JournalEntry[]> {
     this.baseUrl = `http://localhost:8080/user/posts/${ownerId}`
     console.log(this.baseUrl)
    const token = localStorage.getItem('jwtToken')
    const headers = new HttpHeaders({
      Authorization : `Bearer ${token}`
    })
   return this.http.get<JournalEntry[]>(this.baseUrl,{headers})
  }
} 