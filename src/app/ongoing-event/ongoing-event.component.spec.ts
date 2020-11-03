import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingEventComponent } from './ongoing-event.component';

describe('OngoingEventComponent', () => {
  let component: OngoingEventComponent;
  let fixture: ComponentFixture<OngoingEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
