import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFriendProfileComponent } from './view-friend-profile.component';

describe('ViewFriendProfileComponent', () => {
  let component: ViewFriendProfileComponent;
  let fixture: ComponentFixture<ViewFriendProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewFriendProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewFriendProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
