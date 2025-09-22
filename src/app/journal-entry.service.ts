import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JournalEntry } from './journal-entry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JournalEntryService {
 baseUrl = "http://localhost:8080/journal"
  constructor(private http : HttpClient ) { }
createJournal(entry : FormData) : Observable<JournalEntry>{
  const token = localStorage.getItem('jwtToken')
  const headers = new HttpHeaders({
    Authorization : `Bearer ${token}`
  })

  return this.http.post<JournalEntry>(this.baseUrl,entry, {headers})
}
getJournals() : Observable<JournalEntry[]>{
const token = localStorage.getItem('jwtToken')
const headers = new HttpHeaders({
  Authorization : `Bearer ${token}`
})
  this.baseUrl = "http://localhost:8080/journal"
  return this.http.get<JournalEntry[]>(this.baseUrl,{ headers })
}
getJournalById(id : number) : Observable<JournalEntry>{
 this.baseUrl = `http://localhost:8080/journal/id/${id}`
 const token = localStorage.getItem('jwtToken')
 const headers = new HttpHeaders({
  Authorization : `Bearer ${token}`
 })
  return this.http.get<JournalEntry>(this.baseUrl,{headers})
}
updateJournal(id : number,formData : FormData) : Observable<JournalEntry>{
const token = localStorage.getItem('jwtToken')
const headers = new HttpHeaders({
  Authorization : `Bearer ${token}`
})
this.baseUrl = ` http://localhost:8080/journal/id/${id}`
return this.http.put<JournalEntry>(this.baseUrl,formData,{headers})
}
deleteJournal(id : number) : Observable<void> {
  const token = localStorage.getItem('jwtToken')
const headers = new HttpHeaders({
  Authorization : `Bearer ${token}`
})
this.baseUrl = ` http://localhost:8080/journal/id/${id}`
return this.http.delete<void>(this.baseUrl,{headers})

}


}
