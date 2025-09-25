import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { FriendRequestService } from '../friend-request.service';
import { FriendRequest } from '../friend-request';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-friends',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-all-friends.component.html',
  styleUrl: './get-all-friends.component.css'
})
export class GetAllFriendsComponent {
  id: number = 0;
  frndRequest: FriendRequest = new FriendRequest();
  friends: User[] = []; // Add this property to store the array of friends

  constructor(private route : Router,private authService: AuthService, private frndService: FriendRequestService) {}

  ngOnInit() {
    this.id = this.authService.getUserIdFromToken();
    console.log("id",this.id)
    this.frndService.getAllFriends(this.id).subscribe((data: User[]) => {
      this.friends = data; // Assign the array to the correct property
    });
    
  }
  viewProfile(id : number){
    this.route.navigate([`viewFriendPofile/${id}`])
  }
}
