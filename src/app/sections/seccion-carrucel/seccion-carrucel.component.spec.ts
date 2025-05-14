import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCarrucelComponent } from './seccion-carrucel.component';

describe('SeccionCarrucelComponent', () => {
  let component: SeccionCarrucelComponent;
  let fixture: ComponentFixture<SeccionCarrucelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeccionCarrucelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionCarrucelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
