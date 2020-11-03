import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverpwdDialogComponent } from './recoverpwd-dialog.component';

describe('RecoverpwdDialogComponent', () => {
  let component: RecoverpwdDialogComponent;
  let fixture: ComponentFixture<RecoverpwdDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverpwdDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoverpwdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
