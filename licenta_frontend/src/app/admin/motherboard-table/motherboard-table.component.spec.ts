import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardTableComponent } from './motherboard-table.component';

describe('MotherboardTableComponent', () => {
  let component: MotherboardTableComponent;
  let fixture: ComponentFixture<MotherboardTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotherboardTableComponent]
    });
    fixture = TestBed.createComponent(MotherboardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
