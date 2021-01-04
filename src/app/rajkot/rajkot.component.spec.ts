import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RajkotComponent } from './rajkot.component';

describe('RajkotComponent', () => {
  let component: RajkotComponent;
  let fixture: ComponentFixture<RajkotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RajkotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RajkotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
