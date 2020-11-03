import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalVidhyaComponent } from './global-vidhya.component';

describe('GlobalVidhyaComponent', () => {
  let component: GlobalVidhyaComponent;
  let fixture: ComponentFixture<GlobalVidhyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalVidhyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalVidhyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
