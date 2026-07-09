import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

/**
 * Servicio que expone el catálogo de productos ficticios de Rock Store.
 * Las imágenes usan placeholders temáticos; puedes reemplazarlas por
 * fotos reales dentro de src/assets/images.
 */
@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Polera Metallica',
      precio: 14990,
      imagen: 'https://placehold.co/400x400/0d0d0d/e10600?text=Metallica',
      categoria: 'Poleras',
    },
    {
      id: 2,
      nombre: 'Polera Nirvana',
      precio: 13990,
      imagen: 'https://placehold.co/400x400/0d0d0d/e10600?text=Nirvana',
      categoria: 'Poleras',
    },
    {
      id: 3,
      nombre: 'Chaqueta Cuero',
      precio: 59990,
      imagen: 'https://placehold.co/400x400/0d0d0d/e10600?text=Chaqueta+Cuero',
      categoria: 'Chaquetas',
    },
    {
      id: 4,
      nombre: 'Bototos Rock',
      precio: 45990,
      imagen: '/images/zp.jpg',
      categoria: 'Calzado',
    },
    {
      id: 5,
      nombre: 'Jeans Negros',
      precio: 24990,
      imagen: 'https://placehold.co/400x400/0d0d0d/e10600?text=Jeans+Negros',
      categoria: 'Pantalones',
    },
    {
      id: 6,
      nombre: 'Polera AC/DC',
      precio: 14990,
      imagen: 'https://placehold.co/400x400/0d0d0d/e10600?text=AC%2FDC',
      categoria: 'Poleras',
    },
    {
      id: 7,
      nombre: 'Pulsera de Cuero',
      precio: 6990,
      imagen: 'https://placehold.co/400x400/0d0d0d/e10600?text=Pulsera',
      categoria: 'Accesorios',
    },
    {
      id: 8,
      nombre: 'Gorro Beanie',
      precio: 8990,
      imagen: 'https://placehold.co/400x400/0d0d0d/e10600?text=Beanie',
      categoria: 'Accesorios',
    },
  ];

  /**
   * Retorna el catálogo completo de productos.
   */
  obtenerProductos(): Producto[] {
    return this.productos;
  }
}
