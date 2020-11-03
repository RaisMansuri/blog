import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutestComponent } from './tutest.component';

describe('TutestComponent', () => {
  let component: TutestComponent;
  let fixture: ComponentFixture<TutestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
