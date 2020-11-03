import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareermediaComponent } from './careermedia.component';

describe('CareermediaComponent', () => {
  let component: CareermediaComponent;
  let fixture: ComponentFixture<CareermediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareermediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareermediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
