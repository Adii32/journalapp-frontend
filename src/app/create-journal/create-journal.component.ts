import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Category, JournalEntry, Sentiments } from '../journal-entry';
import { FormsModule } from '@angular/forms';

import { JournalEntryService } from '../journal-entry.service';

@Component({
  selector: 'app-create-journal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-journal.component.html',
  styleUrl: './create-journal.component.css'
})
export class CreateJournalComponent {
  journal: JournalEntry = new JournalEntry();
  selectedFile: File | null = null;

  categories: Category[] = ['TRAIVEL', 'FOOD', 'MOOD', 'SKILL', 'TECHNOLOGY'];
  sentiments: Sentiments[] = ['HAPPY', 'SAD', 'ANGRY', 'ANXIOUS'];

  constructor(private journalService: JournalEntryService) {}

  selectedFileInput(event: any) {
    const ele = event.currentTarget as HTMLInputElement;
    if (ele.files && ele.files.length > 0) {
      this.selectedFile = ele.files[0];
    }
  }

  onSubmit() {
    const journalForm = new FormData();

    // Append normal fields
    journalForm.append('title', this.journal.title);
    journalForm.append('content', this.journal.content);
    journalForm.append('category', this.journal.category ?? '');
    journalForm.append('sentiments', this.journal.sentiments ?? '');
    journalForm.append('favorite', String(this.journal.favorite));


    // Append file if selected
    if (this.selectedFile) {
      journalForm.append('imageFile', this.selectedFile);
    }

    // Call service
    this.journalService.createJournal(journalForm).subscribe({
      next: (res) => {
        console.log('Journal saved ✅', res);
        alert('Journal Saved!');
        this.journal = new JournalEntry();
        this.selectedFile = null;
      },
      error: (err) => {
        console.error('Error saving journal ❌', err);
        alert('Something went wrong!');
      }
    });
  }
}
