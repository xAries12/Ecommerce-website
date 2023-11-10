import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsetDetailComponent } from './headset-detail.component';

describe('HeadsetDetailComponent', () => {
  let component: HeadsetDetailComponent;
  let fixture: ComponentFixture<HeadsetDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadsetDetailComponent]
    });
    fixture = TestBed.createComponent(HeadsetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
