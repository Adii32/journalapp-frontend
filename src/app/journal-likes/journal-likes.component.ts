import { Component } from '@angular/core';
import { LikeService } from '../like.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { CommonModule } from '@angular/common';
import { LikeDTO } from '../like-dto';

@Component({
  selector: 'app-journal-likes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './journal-likes.component.html',
  styleUrl: './journal-likes.component.css'
})
export class JournalLikesComponent {
  id : number =0;
  error : string ='';
  success : string ='';
  likeDTO : LikeDTO[] = []
  user : User[] = []
constructor(private likeService : LikeService,private router : ActivatedRoute){}
ngOnInit(){
  this.id = this.router.snapshot.params['id']

  this.likeService.getAllUsersWhoLiked(this.id).subscribe((userData) => {
    this.likeDTO = userData;
    console.log("PHOTO URLS:", this.likeDTO.map(u => u.profilePic));
  });
}

}
