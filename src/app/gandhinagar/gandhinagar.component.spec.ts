import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GandhinagarComponent } from './gandhinagar.component';

describe('GandhinagarComponent', () => {
  let component: GandhinagarComponent;
  let fixture: ComponentFixture<GandhinagarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GandhinagarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GandhinagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
