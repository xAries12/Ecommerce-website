import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarddiskTableComponent } from './harddisk-table.component';

describe('HarddiskTableComponent', () => {
  let component: HarddiskTableComponent;
  let fixture: ComponentFixture<HarddiskTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HarddiskTableComponent]
    });
    fixture = TestBed.createComponent(HarddiskTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
