import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute to access route parameters

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.scss']
})
export class MemberDetailsComponent implements OnInit {
  memberId: string | null = null;  // This will store the member's ID from the URL

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access the 'id' parameter from the route
    this.route.paramMap.subscribe(params => {
      this.memberId = params.get('id');  // Get the 'id' from the URL
    });
  }
}
