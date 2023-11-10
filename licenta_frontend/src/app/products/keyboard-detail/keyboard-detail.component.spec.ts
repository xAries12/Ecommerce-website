import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyboardDetailComponent } from './keyboard-detail.component';

describe('KeyboardDetailComponent', () => {
  let component: KeyboardDetailComponent;
  let fixture: ComponentFixture<KeyboardDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyboardDetailComponent]
    });
    fixture = TestBed.createComponent(KeyboardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
