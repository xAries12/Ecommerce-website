import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MouseTableComponent } from './mouse-table.component';

describe('MouseTableComponent', () => {
  let component: MouseTableComponent;
  let fixture: ComponentFixture<MouseTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MouseTableComponent]
    });
    fixture = TestBed.createComponent(MouseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
