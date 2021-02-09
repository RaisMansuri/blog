import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VadodaraComponent } from './vadodara.component';

describe('VadodaraComponent', () => {
  let component: VadodaraComponent;
  let fixture: ComponentFixture<VadodaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VadodaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VadodaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
