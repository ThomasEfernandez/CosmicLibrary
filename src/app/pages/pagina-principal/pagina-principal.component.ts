import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavPrincipalComponent } from "../../nav-principal/nav-principal.component";
import { FOOTERComponent } from "../../footer/footer.component";
import { SeccionCarrucelComponent } from "../../sections/seccion-carrucel/seccion-carrucel.component";

@Component({
  selector: 'app-pagina-principal',
  imports: [RouterModule, NavPrincipalComponent, FOOTERComponent, SeccionCarrucelComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {
  

}
