import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {
  @Input() member!: {
    id :string;
    name: string;
    role: string;
    imageUrl: string;
    email: string;
    phone: string;
    description: string;
    socialLinks?: {
      linkedin?: string;
      twitter?: string;
      github?: string;
    };
    skills?: string[];
  };

  constructor() {}

  ngOnInit(): void {}

  handleImageError(event: any): void {
    event.target.src = 'https://images.unsplash.com/photo-1633332755192-727a05c4013d';
  }
    // Navigate to social links in a new tab
    navigateToSocial(url: string): void {
      window.open(url, '_blank');
    }
}
