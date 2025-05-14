import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaComicsComponent } from './pagina-comics.component';

describe('PaginaComicsComponent', () => {
  let component: PaginaComicsComponent;
  let fixture: ComponentFixture<PaginaComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaComicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
