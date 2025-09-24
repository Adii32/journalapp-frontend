import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { LikeDTO } from './like-dto';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
 baseUrl = "http://localhost:8080/like}"
  constructor(private http : HttpClient) { }
  doLike(journalId : number , userId : number) : Observable<String>{
const token = localStorage.getItem('jwtToken')
const headers = new HttpHeaders({
  Authorization : `Bearer ${token}`
})
const params = new HttpParams().set('userId',userId);
this.baseUrl = `http://localhost:8080/like/${journalId}`
return this.http.post(this.baseUrl,null,{responseType : 'text',params,headers})

  }
    unLike(journalId : number , userId : number) : Observable<String>{
const token = localStorage.getItem('jwtToken')
const headers = new HttpHeaders({
  Authorization : `Bearer ${token}`
})
const params = new HttpParams().set('userId',userId);
this.baseUrl = `http://localhost:8080/like/dislike/${journalId}`
return this.http.delete(this.baseUrl, { responseType: 'text', params, headers })

  }
  totalLikes(journalId : number) : Observable<number>{
 const token = localStorage.getItem('jwtToken')
const headers = new HttpHeaders({
  Authorization : `Bearer ${token}`
})

this.baseUrl = `http://localhost:8080/like/count/${journalId}`
    return this.http.get<number>(this.baseUrl, { headers })
  }

  getAllUsersWhoLiked(journalId : number) : Observable<LikeDTO[]>{
     const token = localStorage.getItem('jwtToken')
const headers = new HttpHeaders({
  Authorization : `Bearer ${token}`
})
this.baseUrl = `http://localhost:8080/like/getAllUserByLikedTime/${journalId}`
return this.http.get<LikeDTO[]>(this.baseUrl,{headers})
  }
    getAllUsersWhoLikedDetails(journalId : number) : Observable<LikeDTO[]>{
     const token = localStorage.getItem('jwtToken')
const headers = new HttpHeaders({
  Authorization : `Bearer ${token}`
})
this.baseUrl = `http://localhost:8080/like/getAllUsers/${journalId}`
return this.http.get<LikeDTO[]>(this.baseUrl,{headers})
  }
}
