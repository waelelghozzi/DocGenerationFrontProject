import { Component } from '@angular/core';

@Component({
  selector: 'app-members-section',
  templateUrl: './members-section-component.html',
  styleUrls: ['./members-section-component.scss']
})
export class MembersSectionComponent {
  members = [
    { 
      name: 'Sarah Johnson', 
      designation: 'UX Designer', 
      bio: 'User-centered design.', 
      avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' 
    },
    { 
      name: 'John Doe', 
      designation: 'Frontend Developer', 
      bio: 'Love creating modern UIs.', 
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde' 
    },
    { 
      name: 'Emily Smith', 
      designation: 'Project Manager', 
      bio: 'Efficient and organized.', 
      avatarUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12' 
    },
    { 
      name: 'Michael Brown', 
      designation: 'Backend Developer', 
      bio: 'API design enthusiast.', 
      avatarUrl: 'https://images.unsplash.com/photo-1502767089025-6572583495b9' 
    },
    { 
      name: 'John Doe', 
      designation: 'Frontend Developer', 
      bio: 'Love creating modern UIs.', 
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde' 
    },
    { 
      name: 'Emily Smith', 
      designation: 'Project Manager', 
      bio: 'Efficient and organized.', 
      avatarUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12' 
    },
    { 
      name: 'Michael Brown', 
      designation: 'Backend Developer', 
      bio: 'API design enthusiast.', 
      avatarUrl: 'https://images.unsplash.com/photo-1502767089025-6572583495b9' 
    },
    // Add more members as needed
  ];
}
