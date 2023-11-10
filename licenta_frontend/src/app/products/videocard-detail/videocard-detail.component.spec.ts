import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocardDetailComponent } from './videocard-detail.component';

describe('VideocardDetailComponent', () => {
  let component: VideocardDetailComponent;
  let fixture: ComponentFixture<VideocardDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideocardDetailComponent]
    });
    fixture = TestBed.createComponent(VideocardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
