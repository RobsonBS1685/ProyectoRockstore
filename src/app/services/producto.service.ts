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
  private readonly rutaImagenes = '/images/productImagen';

  private productos: Producto[] = [
    {
      id: 1,
      nombre: 'Polera Metallica',
      precio: 14990,
      imagen: `${this.rutaImagenes}/Polera Metallica.jpg`,
      categoria: 'Poleras',
    },
    {
      id: 2,
      nombre: 'Poleron Mayhem',
      precio: 13990,
      imagen: `${this.rutaImagenes}/poleron mayhem.jpg`,
      categoria: 'Poleron',
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
      imagen: 'https://placehold.co/400x400/0d0d0d/e10600?text=Bototos+Rock',
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
      imagen: 'https://placehold.co/400x400/0d0d0d/e10600?text=Pulsera+Cuero',
      categoria: 'Accesorios',
    },
    {
      id: 8,
      nombre: 'Gorro Beanie',
      precio: 8990,
      imagen: 'https://placehold.co/400x400/0d0d0d/e10600?text=Beanie',
      categoria: 'Accesorios',
    },

     {
      id: 9,
      nombre: 'KISS',
      precio: 8990,
      imagen: `${this.rutaImagenes}/BANNER-KISS-TOUR-2022-1.jpg`,
      categoria: 'Accesorios',
    },

    {
      id: 10,
      nombre: 'Polera Iron Maiden',
      precio: 8990,
      imagen: `${this.rutaImagenes}/polera iron maiden.jfif`,
      categoria: 'Poleras',
    },


  ];

  /**
   * Retorna el catálogo completo de productos.
   */
  obtenerProductos(): Producto[] {
    return this.productos;
  }
}
