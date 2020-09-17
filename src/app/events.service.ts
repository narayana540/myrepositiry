import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http:HttpClient) { }


  getEventsNames(){
   return this.http.get('http://localhost:3000/api/events');
  }
  getEventMembersNames(){
    return this.http.get('http://localhost:3000/api/events-special');
  }
}
