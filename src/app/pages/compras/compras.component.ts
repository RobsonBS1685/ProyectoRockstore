import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../../services/storage.service';
import { Compra } from '../../models/compra.model';

/**
 * Componente "Mis Compras": lista todas las compras guardadas en
 * localStorage en una tabla Bootstrap, permitiendo eliminar filas
 * individuales o vaciar la lista completa.
 */
@Component({
  selector: 'app-compras',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compras.component.html',
})
export class ComprasComponent implements OnInit {
  compras: Compra[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit(): void {
    // Se suscribe al observable para mantener la tabla siempre actualizada
    this.storageService.compras$.subscribe((compras) => {
      this.compras = compras;
    });
  }

  /**
   * Elimina una compra puntual por id.
   */
  eliminar(id: string): void {
    this.storageService.eliminarCompra(id);
  }

  /**
   * Vacía todas las compras registradas, previa confirmación del usuario.
   */
  vaciarTodo(): void {
    if (this.compras.length === 0) {
      return;
    }
    const confirmado = confirm('¿Seguro que deseas eliminar todas las compras?');
    if (confirmado) {
      this.storageService.vaciarCompras();
    }
  }
}
