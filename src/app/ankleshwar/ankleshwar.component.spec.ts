import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnkleshwarComponent } from './ankleshwar.component';

describe('AnkleshwarComponent', () => {
  let component: AnkleshwarComponent;
  let fixture: ComponentFixture<AnkleshwarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnkleshwarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnkleshwarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
