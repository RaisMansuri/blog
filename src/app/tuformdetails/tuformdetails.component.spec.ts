import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuformdetailsComponent } from './tuformdetails.component';

describe('TuformdetailsComponent', () => {
  let component: TuformdetailsComponent;
  let fixture: ComponentFixture<TuformdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuformdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuformdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
