import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-special',
  templateUrl: './events-special.component.html',
  styleUrls: ['./events-special.component.css']
})
export class EventsSpecialComponent implements OnInit {
  eventMembers:any=[];
  constructor(private ev:EventsService) { }

  ngOnInit() {
    this.ev.getEventMembersNames().subscribe(res=>{
        this.eventMembers=res;
        console.log(this.eventMembers);
        
    })
  }

}
