import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerrojgarComponent } from './careerrojgar.component';

describe('CareerrojgarComponent', () => {
  let component: CareerrojgarComponent;
  let fixture: ComponentFixture<CareerrojgarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerrojgarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerrojgarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
