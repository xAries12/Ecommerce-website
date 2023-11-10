import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseDetailComponent } from './mouse-detail.component';

describe('MouseDetailComponent', () => {
  let component: MouseDetailComponent;
  let fixture: ComponentFixture<MouseDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MouseDetailComponent]
    });
    fixture = TestBed.createComponent(MouseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
