import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoImagenHomeComponent } from './texto-imagen-home.component';

describe('TextoImagenHomeComponent', () => {
  let component: TextoImagenHomeComponent;
  let fixture: ComponentFixture<TextoImagenHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextoImagenHomeComponent]
    });
    fixture = TestBed.createComponent(TextoImagenHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
