import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CompraComponent } from './pages/compra/compra.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { authGuard, authRedirectGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [authRedirectGuard], title: 'Rock Store | Login' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard], title: 'Rock Store | Panel' },
  { path: 'compra', component: CompraComponent, canActivate: [authGuard], title: 'Rock Store | Comprar' },
  { path: 'about', component: AboutComponent, canActivate: [authGuard], title: 'Rock Store | About' },
  { path: 'contacto', component: ContactoComponent, canActivate: [authGuard], title: 'Rock Store | Contacto' },
  { path: '**', redirectTo: '/login' },
];