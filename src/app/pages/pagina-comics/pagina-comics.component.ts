import { Component } from '@angular/core';
import { NavPrincipalComponent } from "../../nav-principal/nav-principal.component";
import { SeccionCarrucelComponent } from "../../sections/seccion-carrucel/seccion-carrucel.component";
import { RouterModule } from '@angular/router';
import { FOOTERComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-pagina-comics',
  imports: [NavPrincipalComponent, SeccionCarrucelComponent, RouterModule, FOOTERComponent],
  templateUrl: './pagina-comics.component.html',
  styleUrl: './pagina-comics.component.css'
})
export class PaginaComicsComponent {

}
