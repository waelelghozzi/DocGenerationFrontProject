import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  @Input() event!: {
    id: string, 
    title:string;
    name: string; 
    designation: string; 
    bio: string;
    date:string;
  };
  constructor() {}
  ngOnInit(): void {}
}
