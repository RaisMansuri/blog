import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalvidhyaComponent } from './globalvidhya.component';

describe('GlobalvidhyaComponent', () => {
  let component: GlobalvidhyaComponent;
  let fixture: ComponentFixture<GlobalvidhyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalvidhyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalvidhyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
