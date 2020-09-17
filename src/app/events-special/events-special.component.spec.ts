import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSpecialComponent } from './events-special.component';

describe('EventsSpecialComponent', () => {
  let component: EventsSpecialComponent;
  let fixture: ComponentFixture<EventsSpecialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsSpecialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
