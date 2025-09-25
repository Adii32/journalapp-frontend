import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FriendRequest } from './friend-request';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class FriendRequestService {

   baseUrl = "http://localhost:8080/friend"
  constructor(private http : HttpClient) { }
  sendFriendRequest(receiverId : number , senderId : number) : Observable<FriendRequest> {
        this.baseUrl = "http://localhost:8080/friend/send"
        const params = new HttpParams().set('senderId', senderId).set('receiverId', receiverId)
        console.log('senderId',senderId,"receiverId",receiverId)
        const token = localStorage.getItem('jwtToken');
        const headers = { 
          Authorization: `Bearer ${token}` 
        };
        return this.http.post<FriendRequest>(this.baseUrl, null, { headers, params });
  }
   PendingRequest(userId : number ) : Observable<FriendRequest[]> {
        this.baseUrl = `http://localhost:8080/friend/pending/${userId}`
        console.log(this.baseUrl)
   console.log('userId',userId)
        const token = localStorage.getItem('jwtToken');
        const headers = { 
          Authorization: `Bearer ${token}` 
        };

        return this.http.get<FriendRequest[]>(this.baseUrl, {headers});
  }
  acceptRequest(requestId : number) : Observable<FriendRequest>{
     this.baseUrl = `http://localhost:8080/friend/${requestId}/accept`
        console.log(this.baseUrl)
   
        const token = localStorage.getItem('jwtToken');
        const headers = { 
          Authorization: `Bearer ${token}` 
        };
        return this.http.post<FriendRequest>(this.baseUrl,null,{headers})
}
  rejectRequest(requestId : number) : Observable<FriendRequest>{
     this.baseUrl = `http://localhost:8080/friend/${requestId}/reject`
        console.log(this.baseUrl)
   
        const token = localStorage.getItem('jwtToken');
        const headers = { 
          Authorization: `Bearer ${token}` 
        };
        return this.http.post<FriendRequest>(this.baseUrl,null,{headers})
}
getAllFriends(id : number) : Observable<User[]> {
   this.baseUrl = `http://localhost:8080/friend/list`
        console.log(this.baseUrl)
   
        const token = localStorage.getItem('jwtToken');
        const headers = { 
          Authorization: `Bearer ${token}` 
        };
        const params = new HttpParams().set('id',id)
        return this.http.get<User[]>(this.baseUrl,{headers,params})
}
}