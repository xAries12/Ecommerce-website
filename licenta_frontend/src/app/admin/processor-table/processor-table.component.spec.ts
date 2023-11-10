import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorTableComponent } from './processor-table.component';

describe('ProcessorTableComponent', () => {
  let component: ProcessorTableComponent;
  let fixture: ComponentFixture<ProcessorTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessorTableComponent]
    });
    fixture = TestBed.createComponent(ProcessorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
