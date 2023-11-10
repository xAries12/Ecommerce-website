import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideocardComponent } from './videocard.component';

describe('VideocardComponent', () => {
  let component: VideocardComponent;
  let fixture: ComponentFixture<VideocardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VideocardComponent]
    });
    fixture = TestBed.createComponent(VideocardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
