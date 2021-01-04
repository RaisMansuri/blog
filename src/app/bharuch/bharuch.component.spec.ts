import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BharuchComponent } from './bharuch.component';

describe('BharuchComponent', () => {
  let component: BharuchComponent;
  let fixture: ComponentFixture<BharuchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BharuchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BharuchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
