/**
 * Interfaz que representa una compra registrada por el usuario.
 * Se utiliza tanto en el formulario de compra como en el listado
 * "Mis Compras" y en el servicio de almacenamiento (localStorage).
 */
export interface Compra {
  id: string;
  producto: string;
  cantidad: number;
  direccion: string;
  email: string;
  fecha: string;
}
