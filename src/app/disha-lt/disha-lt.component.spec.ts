import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishaLTComponent } from './disha-lt.component';

describe('DishaLTComponent', () => {
  let component: DishaLTComponent;
  let fixture: ComponentFixture<DishaLTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishaLTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishaLTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
