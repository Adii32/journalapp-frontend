import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { UserService } from '../user.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JournalEntry } from '../journal-entry';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { LikeService } from '../like.service';

@Component({
  selector: 'app-view-friend-profile',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './view-friend-profile.component.html',
  styleUrl: './view-friend-profile.component.css'
})
export class ViewFriendProfileComponent {
constructor(private authService : AuthService,private userService : UserService,private activeRoute : ActivatedRoute,private likeService : LikeService){}
jornalEntry : JournalEntry[] = [];

likesMap: {[key:number]: number} = {};
user : User = new User()
id : number = 0;
userId : number =0;
likedMsg : string = '';
unlikedMsg : string = '';
ngOnInit(){
this.id = this.activeRoute.snapshot.params['id']
this.userService.getPostIfFriends(this.id).subscribe((entries) => {
    this.jornalEntry = entries;
    // Har post ke liye likes fetch karo
    for (let entry of this.jornalEntry) {
      this.likeService.totalLikes(entry.id).subscribe((count) => {
        this.likesMap[entry.id] = count;
      });
    }
  });
this.userService.getUserById(this.id).subscribe((data)=>{
  this.user = data

})


}
doLike(id : number){
  this.likedMsg=''
  this.userId = this.authService.getUserIdFromToken()
    console.log("User ID for like:", this.userId); 
  this.likeService.doLike(id,this.userId).subscribe((data)=>{
    this.likedMsg = data.toString()
    
    setTimeout(()=>{
      this.likedMsg=''
    },2000)
  })
}
unLike(id : number){
  this.unlikedMsg =''
this.userId = this.authService.getUserIdFromToken()
  console.log("User ID for dislike:", this.userId); 
  this.likeService.unLike(id,this.userId).subscribe((data)=>{
    this.unlikedMsg = data.toString()
    setTimeout(()=> {
      this.unlikedMsg = ''
    }, 2000);
  })
}


}
