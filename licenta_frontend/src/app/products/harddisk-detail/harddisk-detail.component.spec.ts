import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarddiskDetailComponent } from './harddisk-detail.component';

describe('HarddiskDetailComponent', () => {
  let component: HarddiskDetailComponent;
  let fixture: ComponentFixture<HarddiskDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HarddiskDetailComponent]
    });
    fixture = TestBed.createComponent(HarddiskDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
