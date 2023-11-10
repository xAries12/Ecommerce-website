import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsdDetailComponent } from './ssd-detail.component';

describe('SsdDetailComponent', () => {
  let component: SsdDetailComponent;
  let fixture: ComponentFixture<SsdDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SsdDetailComponent]
    });
    fixture = TestBed.createComponent(SsdDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
