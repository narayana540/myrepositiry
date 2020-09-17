import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EventsService} from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events:any=[];
  constructor(private ev:EventsService,private router:Router) { }

  ngOnInit() {
    this.ev.getEventsNames().subscribe(res=>{
      this.events=res;
      console.log(this.events);
      err=>{
       if(err.status==500){
      this.router.navigate(['/login']);
       }
      }
  })
  
  }
}
