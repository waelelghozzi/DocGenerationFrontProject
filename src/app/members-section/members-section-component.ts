import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members-section',
  templateUrl: './members-section-component.html',
  styleUrls: ['./members-section-component.scss']
})
export class MembersSectionComponent {
  constructor(private router: Router) {}

  members = [
    { 
      id:'1',
      name: 'Sarah Johnson', 
      designation: 'UX Designer', 
      bio: 'User-centered design.', 
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' 
    },
    { 
      id:'2',
      name: 'John Doe', 
      designation: 'Frontend Developer', 
      bio: 'Love creating modern UIs.', 
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde' 
    },
    { 
      id:'3',
      name: 'Emily Smith', 
      designation: 'Project Manager', 
      bio: 'Efficient and organized.', 
      avatarUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12' 
    },
    { 
      id:'4',
      name: 'Michael Brown', 
      designation: 'Backend Developer', 
      bio: 'API design enthusiast.', 
      avatarUrl: 'https://images.unsplash.com/photo-1502767089025-6572583495b9' 
    },
    { 
      id:'5',
      name: 'John Doe', 
      designation: 'Frontend Developer', 
      bio: 'Love creating modern UIs.', 
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde' 
    },
    { 
      id:'6',
      name: 'Emily Smith', 
      designation: 'Project Manager', 
      bio: 'Efficient and organized.', 
      avatarUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12' 
    },
    { 
      id:'7',
      name: 'Michael Brown', 
      designation: 'Backend Developer', 
      bio: 'API design enthusiast.', 
      avatarUrl: 'https://images.unsplash.com/photo-1502767089025-6572583495b9' 
    },
    // Add more members as needed
  ];

  // Define navigateToDetails function
  navigateToDetails(memberId: string): void {
    console.log("wael")
    this.router.navigate(['/details', memberId]);  // Navigate to the details page with the member ID
  }
}
