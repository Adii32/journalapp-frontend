import { Component } from '@angular/core';
import { JournalEntry } from '../journal-entry';
import { JournalEntryService } from '../journal-entry.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-journal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-journal.component.html',
  styleUrl: './show-journal.component.css'
})
export class ShowJournalComponent {
journalEntry : JournalEntry[] = [];
constructor(private journalService : JournalEntryService,private route : Router){
}
ngOnInit() : void {
this.getAllJournal();
}
getAllJournal(){
  this.journalService.getJournals().subscribe({
    next : (data) => {
      this.journalEntry = data
    },
    error : (error) => {
      alert("error while getting journals")
    }
  })
}
details(id : number){
  this.route.navigate([`/journal-details/${id}`])
}
createJournal(){
  this.route.navigate(['/create-journal'])
}
}
