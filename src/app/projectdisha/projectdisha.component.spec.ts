import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectdishaComponent } from './projectdisha.component';

describe('ProjectdishaComponent', () => {
  let component: ProjectdishaComponent;
  let fixture: ComponentFixture<ProjectdishaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectdishaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectdishaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
