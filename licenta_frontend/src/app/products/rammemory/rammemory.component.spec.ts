import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RammemoryComponent } from './rammemory.component';

describe('RammemoryComponent', () => {
  let component: RammemoryComponent;
  let fixture: ComponentFixture<RammemoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RammemoryComponent]
    });
    fixture = TestBed.createComponent(RammemoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
