import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AyudasSubvHomeComponent } from './ayudas-subv-home.component';

describe('AyudasSubvHomeComponent', () => {
  let component: AyudasSubvHomeComponent;
  let fixture: ComponentFixture<AyudasSubvHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AyudasSubvHomeComponent]
    });
    fixture = TestBed.createComponent(AyudasSubvHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
