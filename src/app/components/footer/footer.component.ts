import { Component } from '@angular/core';

/**
 * Footer moderno con logo, redes sociales, contacto y derechos reservados.
 * Se muestra en todas las vistas junto al Navbar.
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  anioActual = new Date().getFullYear();
}
