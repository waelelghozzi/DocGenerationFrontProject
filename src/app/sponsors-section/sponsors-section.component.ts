import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sponsors-section',
  templateUrl: './sponsors-section.component.html',
  styleUrls: ['./sponsors-section.component.scss']
})
export class SponsorsSectionComponent {
  constructor(private router: Router) {}
  sponsors = [
    { 
      id:'1',
      title:'formation git',
      name: 'Sarah Johnson', 
      designation: 'UX Designer', 
      bio: 'User-centered design.', 
      partnershipDate:'11/11/2024',
    },
    { 
      id:'2',
      title:'formation angular',
      name: 'John Doe', 
      designation: 'Frontend Developer', 
      bio: 'Love creating modern UIs.',
      partnershipDate:'11/11/2024',
    },
    { 
      id:'3',
      title:'success pfe',
      name: 'Emily Smith', 
      designation: 'Project Manager', 
      bio: 'Efficient and organized.', 
      partnershipDate:'11/11/2024',
    }
  ];

  // Define navigateToDetails function
  navigateToDetails(eventId: string): void {
    console.log("wael")
    this.router.navigate(['/event/details', eventId]);  // Navigate to the details page with the member ID
  }
}
