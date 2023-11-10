import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytransactionsComponent } from './mytransactions.component';

describe('MytransactionsComponent', () => {
  let component: MytransactionsComponent;
  let fixture: ComponentFixture<MytransactionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MytransactionsComponent]
    });
    fixture = TestBed.createComponent(MytransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
