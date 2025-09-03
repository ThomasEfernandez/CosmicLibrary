import { Routes } from '@angular/router';
import { PaginaComicsComponent } from './pages/pagina-comics/pagina-comics.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';
import { PaginaLibrosComponent } from './pages/pagina-libros/pagina-libros.component';
import { PaginaMerchandisingComponent } from './pages/pagina-merchandising/pagina-merchandising.component';

export const routes: Routes = [
    {
        path:"inicio",
        component:PaginaPrincipalComponent,
       // children:[
        
    },{
            path:"pagina-comics",
            component: PaginaComicsComponent,
        },
        {
            path:"pagina-merchandising",
            component:PaginaMerchandisingComponent,
        },
        {
            path:"pagina-libros",
            component:PaginaLibrosComponent,
        },
        {
            path:"pagina-mangas",
            component:PaginaComicsComponent,
        },
    {
        path:"**",
        redirectTo:'inicio',
        pathMatch:'full',
    }
];
