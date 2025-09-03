import { Component } from '@angular/core';
import { NavPrincipalComponent } from "../../nav-principal/nav-principal.component";
import { RouterModule } from '@angular/router';
import { FOOTERComponent } from "../../footer/footer.component";
import { EstadisticasComicsComponent } from "../../comic/estadisticas-comics/estadisticas-comics.component";

@Component({
  selector: 'app-pagina-comics',
  imports: [NavPrincipalComponent, RouterModule, FOOTERComponent, EstadisticasComicsComponent],
  templateUrl: './pagina-comics.component.html',
  styleUrl: './pagina-comics.component.css'
})
export class PaginaComicsComponent {

}
