import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsetComponent } from './headset.component';

describe('HeadsetComponent', () => {
  let component: HeadsetComponent;
  let fixture: ComponentFixture<HeadsetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadsetComponent]
    });
    fixture = TestBed.createComponent(HeadsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
