import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalLikesComponent } from './journal-likes.component';

describe('JournalLikesComponent', () => {
  let component: JournalLikesComponent;
  let fixture: ComponentFixture<JournalLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalLikesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JournalLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
