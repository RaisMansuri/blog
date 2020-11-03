import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouthEventsComponent } from './youth-events.component';

describe('YouthEventsComponent', () => {
  let component: YouthEventsComponent;
  let fixture: ComponentFixture<YouthEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouthEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouthEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
