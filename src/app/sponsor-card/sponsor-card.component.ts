import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsor-card',
  templateUrl: './sponsor-card.component.html',
  styleUrls: ['./sponsor-card.component.scss']
})
export class SponsorCardComponent implements OnInit {
  @Input() sponsor!: {
    id: string, 
    title:string;
    name: string; 
    designation: string; 
    bio: string;
    partnershipDate:string;
  };
  constructor() {}
  ngOnInit(): void {}
}
