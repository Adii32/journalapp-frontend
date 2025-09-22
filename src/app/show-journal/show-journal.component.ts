import { Component } from '@angular/core';
import { JournalEntry } from '../journal-entry';
import { JournalEntryService } from '../journal-entry.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-show-journal',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './show-journal.component.html',
  styleUrl: './show-journal.component.css'
})
export class ShowJournalComponent {
journalEntry : JournalEntry[] = [];
searchKeyword : string = ''
noData : string = ''
constructor(private journalService : JournalEntryService,private route : Router){
}
ngOnInit() : void {
this.getAllJournal();
}
getAllJournal(){
  this.journalService.getJournals().subscribe({
    next : (data) => {
      this.journalEntry = data
      this.noData = ''
    },
    error : (error) => {
      this.noData = ''
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
onSearch(){
  if(this.searchKeyword.trim() ===''){
this.getAllJournal()
return;

  }
  this.journalService.searchByKeyword(this.searchKeyword).subscribe(
    (data : any[]) => {
      this.journalEntry = data
      if(!this.journalEntry || this.journalEntry.length === 0){
this.noData = `no journal available with keyword ${this.searchKeyword} !!`

      }
    },
     (error) => {
    this.noData = `no data available with ${this.searchKeyword} keyword`
      this.journalEntry = []
     }
  )
}
}
