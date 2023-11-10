import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorDetailComponent } from './processor-detail.component';

describe('ProcessorDetailComponent', () => {
  let component: ProcessorDetailComponent;
  let fixture: ComponentFixture<ProcessorDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessorDetailComponent]
    });
    fixture = TestBed.createComponent(ProcessorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
