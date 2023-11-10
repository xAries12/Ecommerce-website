import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocardTableComponent } from './videocard-table.component';

describe('VideocardTableComponent', () => {
  let component: VideocardTableComponent;
  let fixture: ComponentFixture<VideocardTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideocardTableComponent]
    });
    fixture = TestBed.createComponent(VideocardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
