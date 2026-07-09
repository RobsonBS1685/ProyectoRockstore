import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CompraComponent } from './pages/compra/compra.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

/**
 * Definición de rutas de Rock Store.
 * Cualquier ruta desconocida redirige al inicio ('').
 */
export const routes: Routes = [
  { path: '', component: InicioComponent, title: 'Rock Store | Inicio' },
  { path: 'compra', component: CompraComponent, title: 'Rock Store | Comprar' },
  { path: 'compras', component: ComprasComponent, title: 'Rock Store | Mis Compras' },
  { path: 'about', component: AboutComponent, title: 'Rock Store | About' },
  { path: 'contacto', component: ContactoComponent, title: 'Rock Store | Contacto' },
  { path: '**', redirectTo: '' },
];
