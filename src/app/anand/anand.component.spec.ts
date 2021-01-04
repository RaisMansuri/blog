import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnandComponent } from './anand.component';

describe('AnandComponent', () => {
  let component: AnandComponent;
  let fixture: ComponentFixture<AnandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
