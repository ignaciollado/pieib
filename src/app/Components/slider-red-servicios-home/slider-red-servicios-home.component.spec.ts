import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderRedServiciosHomeComponent } from './slider-red-servicios-home.component';

describe('SliderRedServiciosHomeComponent', () => {
  let component: SliderRedServiciosHomeComponent;
  let fixture: ComponentFixture<SliderRedServiciosHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SliderRedServiciosHomeComponent]
    });
    fixture = TestBed.createComponent(SliderRedServiciosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
