import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Compra } from '../models/compra.model';

/**
 * Servicio encargado de toda la persistencia de las compras
 * utilizando localStorage. Expone un BehaviorSubject para que
 * los componentes puedan reaccionar automáticamente a los cambios
 * (guardar, eliminar, vaciar) sin tener que recargar la página.
 */
@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly STORAGE_KEY = 'rock_store_compras';

  // Subject que mantiene la lista actualizada de compras en memoria
  private comprasSubject = new BehaviorSubject<Compra[]>(this.leerCompras());

  /** Observable público al que los componentes pueden suscribirse */
  compras$: Observable<Compra[]> = this.comprasSubject.asObservable();

  /**
   * Lee todas las compras guardadas en localStorage.
   */
  private leerCompras(): Compra[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? (JSON.parse(data) as Compra[]) : [];
  }

  /**
   * Escribe la lista completa de compras en localStorage
   * y notifica a los suscriptores.
   */
  private guardarEnStorage(compras: Compra[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(compras));
    this.comprasSubject.next(compras);
  }

  /**
   * Agrega una nueva compra a la lista y la persiste.
   */
  guardarCompra(compra: Compra): void {
    const compras = this.leerCompras();
    compras.push(compra);
    this.guardarEnStorage(compras);
  }

  /**
   * Retorna la lista actual de compras (lectura puntual).
   */
  obtenerCompras(): Compra[] {
    return this.leerCompras();
  }

  /**
   * Elimina una compra puntual según su id.
   */
  eliminarCompra(id: string): void {
    const compras = this.leerCompras().filter((c) => c.id !== id);
    this.guardarEnStorage(compras);
  }

  /**
   * Elimina todas las compras registradas.
   */
  vaciarCompras(): void {
    this.guardarEnStorage([]);
  }
}
