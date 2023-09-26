import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcessDialogComponent } from './add-process-dialog.component';

describe('AddProcessDialogComponent', () => {
  let component: AddProcessDialogComponent;
  let fixture: ComponentFixture<AddProcessDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddProcessDialogComponent]
    });
    fixture = TestBed.createComponent(AddProcessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
