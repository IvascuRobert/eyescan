import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndProcessDialogComponent } from './end-process-dialog.component';

describe('EndProcessDialogComponent', () => {
  let component: EndProcessDialogComponent;
  let fixture: ComponentFixture<EndProcessDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EndProcessDialogComponent]
    });
    fixture = TestBed.createComponent(EndProcessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
