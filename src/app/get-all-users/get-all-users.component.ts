import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth-service.service';
import { LikeService } from '../like.service';

import { FriendRequestService } from '../friend-request.service';
import { FriendRequest } from '../friend-request';

@Component({
  selector: 'app-get-all-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './get-all-users.component.html',
  styleUrl: './get-all-users.component.css'
})
export class GetAllUsersComponent {
user : User[] =[];
senderId : number =0;
frndRequest : FriendRequest = new FriendRequest();
constructor(private userService : UserService,private authService : AuthService,private frndService : FriendRequestService){}
ngOnInit(){
  this.userService.getAllUsers().subscribe((data)=>{
    console.log(data)
    this.user = data
  })
}
addFriend(recieverId : number) : void{
  this.senderId = this.authService.getUserIdFromToken();
  this.frndService.sendFriendRequest(recieverId, this.senderId).subscribe((data)=>{
    this.frndRequest = data
  });
}
}
