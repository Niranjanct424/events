import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event:any

  constructor() { }

  ngOnInit(): void {
  }

  //  [ngClass]="getStartTimeStyle()"
  getStartTimeClass()
  {
    if(this.event && this.event.time === "8:00 am")
      return ['green' , 'bold']
    return[]
  }

  getStartTimeStyle():any
  {
    if(this.event && this.event.time === "8:00 am")
      return {color:'#003300' , 'font-weight':'bold' }
    return{}
  }

}
