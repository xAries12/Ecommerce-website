import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewTableAllComponent } from './review-table-all.component';

describe('ReviewTableAllComponent', () => {
  let component: ReviewTableAllComponent;
  let fixture: ComponentFixture<ReviewTableAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewTableAllComponent]
    });
    fixture = TestBed.createComponent(ReviewTableAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
