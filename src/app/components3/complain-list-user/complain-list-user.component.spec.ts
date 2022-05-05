import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainListUserComponent } from './complain-list-user.component';

describe('ComplainListUserComponent', () => {
  let component: ComplainListUserComponent;
  let fixture: ComponentFixture<ComplainListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainListUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
