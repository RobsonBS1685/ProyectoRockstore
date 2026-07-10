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
  id: 10,
  nombre: 'Polera Slayer',
  precio: 14990,
  imagen: '/shopImg/Slayer%20polera.jfif',
  categoria: 'Poleras',
},
{
  id: 11,
  nombre: 'Polera Iron Maiden',
  precio: 14990,
  imagen: '/shopImg/polera%20iron%20maiden.jfif',
  categoria: 'Poleras',
},
{
  id: 12,
  nombre: 'Polera Megadeth',
  precio: 14990,
  imagen: '/shopImg/Polera%20megadeth.jpg',
  categoria: 'Poleras',
},
{
  id: 13,
  nombre: 'Polera Pantera',
  precio: 14990,
  imagen: '/shopImg/polera%20pantera.jfif',
  categoria: 'Poleras',
},
{
  id: 14,
  nombre: 'Polera Sepultura',
  precio: 14990,
  imagen: '/shopImg/Polera%20sepultura.jfif',
  categoria: 'Poleras',
},

{
  id: 15,
  nombre: 'Polera Gojira',
  precio: 15990,
  imagen: '/shopImg/gojira-magma-polera-de-hombre-impresion-dtg-f.jpg',
  categoria: 'Poleras',
},
{
  id: 17,
  nombre: 'Polerón Behemoth',
  precio: 33990,
  imagen: '/shopImg/BANNER-BEHEMOTH-THE-SATANIST-1.jpg',
  categoria: 'Polerones',
},
{
  id: 19,
  nombre: 'Polerón Cannibal Corpse',
  precio: 33990,
  imagen: '/shopImg/poleron%20cannibal.jfif',
  categoria: 'Polerones',
}
  ];

  /**
   * Retorna el catálogo completo de productos.
   */
  obtenerProductos(): Producto[] {
    return this.productos;
  }
}
