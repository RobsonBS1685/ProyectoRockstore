import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

/**
 * Componente raíz de la aplicación.
 * Renderiza el Navbar (siempre visible), el router-outlet
 * donde se cargan las distintas vistas de la app, y el Footer.
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rock-store';
}
