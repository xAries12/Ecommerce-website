import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardDetailComponent } from './motherboard-detail.component';

describe('MotherboardDetailComponent', () => {
  let component: MotherboardDetailComponent;
  let fixture: ComponentFixture<MotherboardDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotherboardDetailComponent]
    });
    fixture = TestBed.createComponent(MotherboardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
