import { Component } from '@angular/core';
import { JournalEntry } from '../journal-entry';
import { JournalEntryService } from '../journal-entry.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-journal-details',
  standalone: true,
  imports: [],
  templateUrl: './journal-details.component.html',
  styleUrl: './journal-details.component.css'
})
export class JournalDetailsComponent {
journalEntry : JournalEntry = new JournalEntry();
id : number = 0;
constructor(private journalService : JournalEntryService,private route : ActivatedRoute,private router : Router){}
ngOnInit(){
this.id = this.route.snapshot.params['id']
console.log(this.id)
this.journalService.getJournalById(this.id).subscribe({
  next : (data) =>{
    this.journalEntry = data
  },
  error : (error) => {
    alert("error while getting journal")
  }
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
}
