import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedFlightListComponent } from './searched-flight-list.component';

describe('SearchedFlightListComponent', () => {
  let component: SearchedFlightListComponent;
  let fixture: ComponentFixture<SearchedFlightListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedFlightListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchedFlightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
