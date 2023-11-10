import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadsetTableComponent } from './headset-table.component';

describe('HeadsetTableComponent', () => {
  let component: HeadsetTableComponent;
  let fixture: ComponentFixture<HeadsetTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadsetTableComponent]
    });
    fixture = TestBed.createComponent(HeadsetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
