import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchFlightsComponent } from './user-search-flights.component';

describe('UserSearchFlightsComponent', () => {
  let component: UserSearchFlightsComponent;
  let fixture: ComponentFixture<UserSearchFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSearchFlightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
