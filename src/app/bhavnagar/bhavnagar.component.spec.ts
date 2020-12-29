import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BhavnagarComponent } from './bhavnagar.component';

describe('BhavnagarComponent', () => {
  let component: BhavnagarComponent;
  let fixture: ComponentFixture<BhavnagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhavnagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BhavnagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
