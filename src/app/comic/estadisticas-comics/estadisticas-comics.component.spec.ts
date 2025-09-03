import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasComicsComponent } from './estadisticas-comics.component';

describe('EstadisticasComicsComponent', () => {
  let component: EstadisticasComicsComponent;
  let fixture: ComponentFixture<EstadisticasComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstadisticasComicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadisticasComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
