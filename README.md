# 🤘 Rock Store

Tienda de ropa y accesorios de estilo rockero, desarrollada en **Angular 18**
con **Standalone Components**, **Reactive Forms**, **Bootstrap 5** y
**Bootstrap Icons**.

## 🚀 Cómo ejecutar el proyecto

1. Instala las dependencias:

   ```bash
   npm install
   ```

2. Levanta el servidor de desarrollo:

   ```bash
   npm start
   ```

3. Abre tu navegador en `http://localhost:4200`.

## 🔑 Credenciales de acceso (Login)

- **Usuario:** `admin`
- **Contraseña:** `1234`

## 🗺️ Rutas de la aplicación

| Ruta        | Vista                          |
|-------------|---------------------------------|
| `/`         | Inicio (Login)                  |
| `/compra`   | Formulario de compra + catálogo |
| `/compras`  | Mis Compras (tabla)              |
| `/about`    | Información de la tienda        |
| `/contacto` | Datos de contacto + formulario  |

Cualquier ruta no definida redirige automáticamente a `/`.

## 🗂️ Estructura del proyecto

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

## 🎨 CSS

Toda la aplicación usa **exclusivamente clases de Bootstrap 5** (`bg-dark`,
`text-danger`, `btn-danger`, `card`, `shadow`, `badge`, etc.) más Bootstrap
Icons. No hay hojas de estilo `.scss` por componente ni CSS propio: el tema
oscuro se activa con `data-bs-theme="dark"` en `src/index.html`, que es una
característica nativa de Bootstrap 5.3.

## 🛍️ Funcionalidades

- **Login** con validaciones y credenciales fijas, redirige a `/compra` si son correctas.
- **Formulario de compra** (Reactive Forms) con validaciones: producto, cantidad,
  dirección y email, mostrando errores debajo de cada campo.
- **Persistencia en localStorage**: guardar, leer, actualizar, eliminar y vaciar compras.
- **Mis Compras**: tabla Bootstrap con acciones de eliminar y botón para vaciar todo.
- **Catálogo de productos** ficticios con Cards Bootstrap, imágenes, precio y botón Comprar.
- **About** moderno con historia, misión, visión, productos y contacto/redes sociales.
- **Diseño responsive** para celular, tablet y escritorio, con animaciones y hover en
  botones y cards.

## 📦 Listo para GitHub

El proyecto incluye `.gitignore` y una estructura profesional lista para
subir a un repositorio.

```bash
git init
git add .
git commit -m "Rock Store: proyecto inicial en Angular 18"
git branch -M main
git remote add origin <URL_DE_TU_REPOSITORIO>
git push -u origin main
```
