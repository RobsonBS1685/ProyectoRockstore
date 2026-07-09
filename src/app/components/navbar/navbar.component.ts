import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service';

/**
 * Navbar oscuro y responsive con las opciones principales de la tienda.
 * Permanece visible en todas las vistas de la aplicación.
 */
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Cierra la sesión activa y redirige al login (Inicio).
   */
  cerrarSesion(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
