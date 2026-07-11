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
  private readonly SESSION_KEY = 'rockstore-session';
  private sesionActiva = false;
  private usuarioActual = '';

  constructor() {
    const storedUser = localStorage.getItem(this.SESSION_KEY);
    if (storedUser) {
      this.sesionActiva = true;
      this.usuarioActual = storedUser;
    }
  }

  /**
   * Valida credenciales. Si son correctas, marca la sesión como activa.
   */
  login(usuario: string, password: string): boolean {
    const esValido =
      usuario === this.USUARIO_VALIDO && password === this.PASSWORD_VALIDA;

    this.sesionActiva = esValido;
    this.usuarioActual = esValido ? usuario.trim() : '';

    if (esValido) {
      localStorage.setItem(this.SESSION_KEY, this.usuarioActual);
    } else {
      localStorage.removeItem(this.SESSION_KEY);
    }

    return esValido;
  }

  /**
   * Cierra la sesión activa.
   */
  logout(): void {
    this.sesionActiva = false;
    this.usuarioActual = '';
    localStorage.removeItem(this.SESSION_KEY);
  }

  /**
   * Indica si hay una sesión activa.
   */
  estaLogueado(): boolean {
    return this.sesionActiva;
  }

  /**
   * Devuelve el nombre de usuario autenticado.
   */
  obtenerUsuarioActual(): string {
    return this.usuarioActual;
  }
}
