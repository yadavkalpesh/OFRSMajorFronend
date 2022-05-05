import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockedUsersListComponent } from './locked-users-list.component';

describe('LockedUsersListComponent', () => {
  let component: LockedUsersListComponent;
  let fixture: ComponentFixture<LockedUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockedUsersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockedUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
