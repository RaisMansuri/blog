import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbroadstudyComponent } from './abroadstudy.component';

describe('AbroadstudyComponent', () => {
  let component: AbroadstudyComponent;
  let fixture: ComponentFixture<AbroadstudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbroadstudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbroadstudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
