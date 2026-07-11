import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CompraComponent } from './pages/compra/compra.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

/**
 * Definición de rutas de Rock Store.
 * 'compras' redirige a 'compra', ya que el formulario y el listado
 * ahora viven en un solo componente. Cualquier ruta desconocida
 * redirige al inicio ('').
 */
export const routes: Routes = [
  { path: '', component: InicioComponent, title: 'Rock Store | Inicio' },
  { path: 'compra', component: CompraComponent, title: 'Rock Store | Comprar' },

  { path: 'about', component: AboutComponent, title: 'Rock Store | About' },
  { path: 'contacto', component: ContactoComponent, title: 'Rock Store | Contacto' },
  { path: '**', redirectTo: '' },
];