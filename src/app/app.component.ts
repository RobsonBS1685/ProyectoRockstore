import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthService } from './services/auth.service';

/**
 * Componente raíz de la aplicación.
 * Renderiza el Navbar (siempre visible), el router-outlet
 * donde se cargan las distintas vistas de la app, y el Footer.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rock-store';
  authService = inject(AuthService);
}
