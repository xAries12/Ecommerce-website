import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreviewsComponent } from './myreviews.component';

describe('MyreviewsComponent', () => {
  let component: MyreviewsComponent;
  let fixture: ComponentFixture<MyreviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyreviewsComponent]
    });
    fixture = TestBed.createComponent(MyreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
