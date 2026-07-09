import { Injectable } from '@angular/core';

/**
 * Servicio simple de autenticación.
 * Usuario/clave fijos según la pauta: admin / 1234
 */
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly USUARIO_VALIDO = 'admin';
  private readonly PASSWORD_VALIDA = '1234';
  private sesionActiva = false;

  /**
   * Valida credenciales. Si son correctas, marca la sesión como activa.
   */
  login(usuario: string, password: string): boolean {
    const esValido =
      usuario === this.USUARIO_VALIDO && password === this.PASSWORD_VALIDA;
    this.sesionActiva = esValido;
    return esValido;
  }

  /**
   * Cierra la sesión activa.
   */
  logout(): void {
    this.sesionActiva = false;
  }

  /**
   * Indica si hay una sesión activa.
   */
  estaLogueado(): boolean {
    return this.sesionActiva;
  }
}
