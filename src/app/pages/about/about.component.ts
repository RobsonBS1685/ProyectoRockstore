import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

/**
 * Componente About: historia, misión, visión y productos destacados
 * de la tienda, usando Cards de Bootstrap. Los datos de contacto y
 * redes sociales viven en la página dedicada /contacto.
 */
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
