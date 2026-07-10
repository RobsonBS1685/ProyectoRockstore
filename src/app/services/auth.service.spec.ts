import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('debe iniciar sesión y persistir el usuario activo', () => {
    const resultado = service.login('admin', '1234');

    expect(resultado).toBeTrue();
    expect(service.estaLogueado()).toBeTrue();
    expect(service.obtenerUsuarioActual()).toBe('admin');
    expect(localStorage.getItem('rockstore-session')).toContain('admin');
  });

  it('debe cerrar sesión y limpiar la sesión activa', () => {
    service.login('admin', '1234');
    service.logout();

    expect(service.estaLogueado()).toBeFalse();
    expect(service.obtenerUsuarioActual()).toBe('');
    expect(localStorage.getItem('rockstore-session')).toBeNull();
  });
});
