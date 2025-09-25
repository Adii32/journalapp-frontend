import { Component } from '@angular/core';
import { FriendRequest } from '../friend-request';
import { AuthService } from '../auth-service.service';
import { FriendRequestService } from '../friend-request.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pending-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pending-request.component.html',
  styleUrl: './pending-request.component.css'
})
export class PendingRequestComponent {
constructor(private authService : AuthService,private frndService : FriendRequestService){}
frndRequest : FriendRequest[] = []
userId : number = 0;
ngOnInit(){
this.userId = this.authService.getUserIdFromToken();
this.frndService.PendingRequest(this.userId).subscribe((data) => {
  this.frndRequest = data
  console.log('data.........',data)
  console.log('userId',this.userId)

})
}
addFriend(id : number){
  this.userId = this.authService.getUserIdFromToken()
  this.frndService.sendFriendRequest(this.userId,id).subscribe((data)=>{
    console.log('data',data)
  })

}
acceptFriend(id : number){
  this.frndService.acceptRequest(id).subscribe()
}
rejectFriend(id : number){
  this.frndService.rejectRequest(id).subscribe()
}

}
