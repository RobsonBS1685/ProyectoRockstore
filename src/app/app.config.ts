import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

/**
 * Configuración principal de la aplicación standalone.
 * Registra el router con las rutas definidas en app.routes.ts.
 */
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
