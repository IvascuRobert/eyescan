import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsContactComponent } from './details-contact.component';

describe('DetailsContactComponent', () => {
  let component: DetailsContactComponent;
  let fixture: ComponentFixture<DetailsContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetailsContactComponent]
    });
    fixture = TestBed.createComponent(DetailsContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
