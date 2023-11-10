import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionChartTimeComponent } from './transaction-chart-time.component';

describe('TransactionChartTimeComponent', () => {
  let component: TransactionChartTimeComponent;
  let fixture: ComponentFixture<TransactionChartTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionChartTimeComponent]
    });
    fixture = TestBed.createComponent(TransactionChartTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
