import { TestBed } from '@angular/core/testing';
import { StorageService } from './storage.service';
import { AuthService } from './auth.service';

describe('StorageService', () => {
  let service: StorageService;
  let authService: AuthService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
    authService = TestBed.inject(AuthService);
  });

  it('debe guardar las compras del usuario autenticado y ocultarlas al cerrar sesión', () => {
    authService.login('admin', '1234');

    service.guardarCompra({
      id: '1',
      producto: 'Polera Iron Maiden',
      cantidad: 2,
      direccion: 'Av. Siempre Viva 123',
      email: 'test@test.com',
      fecha: '2026-07-10T00:00:00.000Z',
      usuario: 'admin',
    });

    expect(service.obtenerCompras().length).toBe(1);
    expect(service.obtenerCompras()[0].usuario).toBe('admin');

    authService.logout();

    expect(service.obtenerCompras()).toEqual([]);
  });
});
