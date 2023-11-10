import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcSystemComponent } from './pc-system.component';

describe('PcSystemComponent', () => {
  let component: PcSystemComponent;
  let fixture: ComponentFixture<PcSystemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PcSystemComponent]
    });
    fixture = TestBed.createComponent(PcSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
