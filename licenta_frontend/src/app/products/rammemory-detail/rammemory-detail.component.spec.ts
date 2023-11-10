import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RammemoryDetailComponent } from './rammemory-detail.component';

describe('RammemoryDetailComponent', () => {
  let component: RammemoryDetailComponent;
  let fixture: ComponentFixture<RammemoryDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RammemoryDetailComponent]
    });
    fixture = TestBed.createComponent(RammemoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
