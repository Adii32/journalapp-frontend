import { Component } from '@angular/core';
import { JournalEntry } from '../journal-entry';
import { JournalEntryService } from '../journal-entry.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LikeService } from '../like.service';
import { AuthService } from '../auth-service.service';
import { User } from '../user';

@Component({
  selector: 'app-journal-details',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './journal-details.component.html',
  styleUrl: './journal-details.component.css'
})
export class JournalDetailsComponent {
  likes ?: number ;
  userId ? : number;
  likedMsg  : string ='';
  unlikedMsg : string = '';
journalEntry : JournalEntry = new JournalEntry();

id : number = 0;
constructor(private likeService : LikeService,private journalService : JournalEntryService,private route : ActivatedRoute,private router : Router,private authService : AuthService){}
ngOnInit(){
  
this.id = this.route.snapshot.params['id']
console.log(this.id)
this.journalService.getJournalById(this.id).subscribe({
  next : (data) =>{
    this.journalEntry = data
    console.log('data : ',data)
  },
  error : (error) => {
    alert("error while getting journal")
  }
})
this.likeService.totalLikes(this.id).subscribe((data)=>{
  this.likes = data
})
}
updateJournal(id : number){
  this.router.navigate([`update-journal/${id}`])
}
deleteJournal(id : number){
this.journalService.deleteJournal(id).subscribe(() => {
alert("deleting journal")
this.router.navigate(['show-journal'])

})


}
async shareJournal(journalEntry : any){
  // if (!navigator.canShare || !navigator.canShare({ files: [] })) {
  //   alert('File sharing not supported on this browser.');
  //   return;
  // }
 
  const response = await fetch(journalEntry.img)
    const blob = await response.blob();
    const file =  new File([blob],'photo.jpg',{type : blob.type})
if(navigator.share){
  navigator.share({
    // files : [file],
    title : journalEntry.title,
    text : journalEntry.content,
   
  });
  console.log("share successfully")
}

}
doLike(id : number){
  this.likedMsg=''
  this.userId = this.authService.getUserIdFromToken()
    console.log("User ID for like:", this.userId); 
  this.likeService.doLike(this.id,this.userId).subscribe((data)=>{
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
  this.likeService.unLike(this.id,this.userId).subscribe((data)=>{
    this.unlikedMsg = data.toString()
    setTimeout(()=> {
      this.unlikedMsg = ''
    }, 2000);
  })
}

}
