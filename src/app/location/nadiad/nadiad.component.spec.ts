import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NadiadComponent } from './nadiad.component';

describe('NadiadComponent', () => {
  let component: NadiadComponent;
  let fixture: ComponentFixture<NadiadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NadiadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NadiadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
