import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category, JournalEntry, Sentiments } from '../journal-entry';
import { JournalEntryService } from '../journal-entry.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-journal',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './update-journal.component.html',
  styleUrl: './update-journal.component.css'
})
export class UpdateJournalComponent {
id : number =0;
journalEntry: any = {
  title: '',
  content: '',
  img: '',
  favorite: false,
  category: null,
  sentiments: null,

  date: '',

};
selectedFile ? : File;
  categories: Category[] = ['TRAIVEL', 'FOOD', 'MOOD', 'SKILL', 'TECHNOLOGY'];
  sentiments: Sentiments[] = ['HAPPY', 'SAD', 'ANGRY', 'ANXIOUS'];

  constructor(private journalService : JournalEntryService,private route
    : Router, private activeRoute : ActivatedRoute
  ){}
ngOnInit(){
this.id = Number(this.activeRoute.snapshot.paramMap.get('id'))
this.journalService.getJournalById(this.id).subscribe({
next : (data)=>{
this.journalEntry = data
console.log(data)

},
error : (err) => {
console.log(err)
}

})


}
selectedFileInput(event : any){
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    this.selectedFile = input.files[0];
  } else {
    this.selectedFile = undefined;
  }
}

onSubmit(){
const journalForm = new FormData();
journalForm.append('title',this.journalEntry.title)
journalForm.append('content',this.journalEntry.content)
journalForm.append('categories',this.journalEntry.categories ?? '')
journalForm.append('sentiments',this.journalEntry.sentiments ?? '')
journalForm.append('favorite',this.journalEntry.favorite)
if(this.selectedFile){
  journalForm.append('imageFile',this.selectedFile)
  
}
this.journalService.updateJournal(this.id,this.journalEntry).subscribe({
  next : (data) => {
    alert("data updated")
    console.log(data)
  },
  error : (err) => {
   alert("new error is here")
    console.log(err)

  }

})
}

}
