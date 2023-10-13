import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagraphHomeComponent } from './paragraph-home.component';

describe('ParagraphHomeComponent', () => {
  let component: ParagraphHomeComponent;
  let fixture: ComponentFixture<ParagraphHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParagraphHomeComponent]
    });
    fixture = TestBed.createComponent(ParagraphHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
