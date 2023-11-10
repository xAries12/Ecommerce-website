import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsdTableComponent } from './ssd-table.component';

describe('SsdTableComponent', () => {
  let component: SsdTableComponent;
  let fixture: ComponentFixture<SsdTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SsdTableComponent]
    });
    fixture = TestBed.createComponent(SsdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
