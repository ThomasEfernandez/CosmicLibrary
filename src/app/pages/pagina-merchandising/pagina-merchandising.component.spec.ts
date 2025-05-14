import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaMerchandisingComponent } from './pagina-merchandising.component';

describe('PaginaMerchandisingComponent', () => {
  let component: PaginaMerchandisingComponent;
  let fixture: ComponentFixture<PaginaMerchandisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaMerchandisingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaMerchandisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
