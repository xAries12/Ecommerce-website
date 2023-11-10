import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardTableComponent } from './keyboard-table.component';

describe('KeyboardTableComponent', () => {
  let component: KeyboardTableComponent;
  let fixture: ComponentFixture<KeyboardTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyboardTableComponent]
    });
    fixture = TestBed.createComponent(KeyboardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
