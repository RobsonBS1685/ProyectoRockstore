/**
 * Interfaz que representa un producto del catálogo de Rock Store.
 */
export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagen: string;
  categoria: string;
}
