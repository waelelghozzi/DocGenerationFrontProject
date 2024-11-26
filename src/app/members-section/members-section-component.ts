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
      id: '1',
      name: 'Sarah Johnson',
      role: 'UX Designer',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      email: 'sarah.johnson@example.com',
      phone: '+1 555-123-4567',
      description: 'Passionate about creating user-centered designs that solve real-world problems.',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/sarahjohnson',
        twitter: 'https://twitter.com/sarahjohnson',
      },
      skills: ['Wireframing', 'Prototyping', 'User Research', 'Figma']
    },
    {
      id: '2',
      name: 'John Doe',
      role: 'Frontend Developer',
      imageUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
      email: 'john.doe@example.com',
      phone: '+1 555-987-6543',
      description: 'Frontend enthusiast who loves building responsive and accessible interfaces.',
      socialLinks: {
        github: 'https://github.com/johndoe',
        linkedin: 'https://www.linkedin.com/in/johndoe',
      },
      skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS']
    },
    {
      id: '3',
      name: 'Emily Smith',
      role: 'Project Manager',
      imageUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12',
      email: 'emily.smith@example.com',
      phone: '+1 555-234-5678',
      description: 'Efficient and detail-oriented project manager ensuring seamless team collaboration.',
      socialLinks: {
        linkedin: 'https://www.linkedin.com/in/emilysmith',
      },
      skills: ['Agile', 'Scrum', 'Communication', 'Leadership']
    },
    {
      id: '4',
      name: 'Michael Brown',
      role: 'Backend Developer',
      imageUrl: 'https://images.unsplash.com/photo-1502767089025-6572583495b9',
      email: 'michael.brown@example.com',
      phone: '+1 555-345-6789',
      description: 'Focused on building scalable APIs and ensuring data integrity.',
      socialLinks: {
        github: 'https://github.com/michaelbrown',
      },
      skills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'REST APIs']
    }
  ];
  
  // Define navigateToDetails function
  navigateToDetails(memberId: string): void {
    console.log("wael")
    this.router.navigate(['/details', memberId]);  // Navigate to the details page with the member ID
  }
}
