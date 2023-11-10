import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentTableAllComponent } from './comment-table-all.component';

describe('CommentTableAllComponent', () => {
  let component: CommentTableAllComponent;
  let fixture: ComponentFixture<CommentTableAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentTableAllComponent]
    });
    fixture = TestBed.createComponent(CommentTableAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
