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
},
{
  id: 20,
  nombre: 'Polera Rock Store',
  precio: 19990,
  imagen: '/shopImg/Polera%20rockshop.jpg',
  categoria: 'Poleras',
},
{
  id: 21,
  nombre: 'Gorra Kreator',
  precio: 12990,
  imagen: '/shopImg/gorro%20kreator.jfif',
  categoria: 'Gorros',
},
{
  id: 22,
  nombre: 'Gorra Rock Store',
  precio: 13990,
  imagen: '/shopImg/gorro-rock-store.png',
  categoria: 'Gorros',
},
{
  id: 22,
  nombre: 'Polera Kiss',
  precio: 34990,
  imagen: '/shopImg/polerakiss.jpg',
  categoria: 'Poleras',
},

{
  id: 24,
  nombre: 'Polerón Black Sabbath',
  precio: 34990,
  imagen: '/shopImg/poleronblacksabbth.jpg',
  categoria: 'Polerones',
},
{
  id: 25,
  nombre: 'Polerón Mötley Crüe',
  precio: 34990,
  imagen: '/shopImg/poleronmotleycrue.jpg',
  categoria: 'Polerones',
},
{
  id: 26,
  nombre: 'Polerón Rock Store',
  precio: 34990,
  imagen: '/shopImg/poleronockshop.jpg',
  categoria: 'Polerones',
},
{
  id: 27,
  nombre: 'Chaqueta Rock Store',
  precio: 49990,
  imagen: '/shopImg/chaqueta%20rockStore.png',
  categoria: 'Chaquetas',
},

  ];

  /**
   * Retorna el catálogo completo de productos.
   */
  obtenerProductos(): Producto[] {
    return this.productos;
  }
}
