import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailblogComponent } from './detailblog.component';

describe('DetailblogComponent', () => {
  let component: DetailblogComponent;
  let fixture: ComponentFixture<DetailblogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailblogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
