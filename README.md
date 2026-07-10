```
public/                -> assets estáticos (igual que el proyecto de referencia)
  favicon.ico
  images/
  css/
src/
  app/
    components/          -> piezas reutilizables (no son vistas de ruta)
      navbar/
      footer/
    pages/                -> vistas asociadas a una ruta
      inicio/     -> Login (usuario/contraseña)
      compra/     -> Hero + catálogo de productos + formulario reactivo
      compras/    -> Tabla de compras (localStorage) con eliminar/vaciar
      about/      -> Historia, misión, visión, productos
      contacto/   -> Datos de contacto, redes sociales y formulario
    services/
      auth.service.ts       -> Validación de login
      storage.service.ts    -> CRUD de compras en localStorage
      producto.service.ts   -> Catálogo de productos ficticios
    models/
      compra.model.ts
      producto.model.ts
    interfaces/
      usuario.interface.ts
    app.routes.ts
    app.config.ts
    app.component.ts / .html
  index.html
  main.ts
  styles.scss   -> Solo comentario; toda la UI usa clases de Bootstrap 5
                    y el modo oscuro nativo (data-bs-theme="dark")
```


