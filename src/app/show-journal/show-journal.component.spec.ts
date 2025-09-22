import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowJournalComponent } from './show-journal.component';

describe('ShowJournalComponent', () => {
  let component: ShowJournalComponent;
  let fixture: ComponentFixture<ShowJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowJournalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
