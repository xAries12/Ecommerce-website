import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RammemoryTableComponent } from './rammemory-table.component';

describe('RammemoryTableComponent', () => {
  let component: RammemoryTableComponent;
  let fixture: ComponentFixture<RammemoryTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RammemoryTableComponent]
    });
    fixture = TestBed.createComponent(RammemoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
