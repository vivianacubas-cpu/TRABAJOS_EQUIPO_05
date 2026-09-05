# Sistema académico - Institución Educativa Alfonso Ugarte

Proyecto frontend desarrollado por **Yojana y Viviana** para gestionar estudiantes de la institución.

## Objetivo
Implementar un Maestro CRUD para administrar estudiantes de forma ordenada, moderna y visualmente clara.

## Funcionalidades
- Crear: registrar un nuevo estudiante
- Listar: visualizar todos los estudiantes
- Editar: actualizar información de un estudiante
- Eliminar: quitar estudiantes con confirmación
- Buscar: filtrar estudiantes por nombre o código
- Dashboard: ver estadísticas por grado y sección
- Vistas separadas: inicio, dashboard, estudiantes, registro, edición, detalle, nosotras y contacto

## Tecnologías
- Angular
- TypeScript
- HTML
- CSS
- Routing
- Servicios y modelos

## Ejecutar el proyecto

```bash
npm install
npm start
```

Luego abrir la app en:
- http://localhost:4200

## Rutas principales
- /inicio
- /dashboard
- /estudiantes
- /estudiantes/nuevo
- /estudiantes/editar/:id
- /estudiantes/:id
- /nosotras
- /contacto

## Estructura general
- `src/app/components`: navbar, footer, cards y componentes reutilizables
- `src/app/pages`: páginas de cada vista
- `src/app/services`: servicio de estudiantes
- `src/app/models`: modelo de estudiante
- `src/app/app.routes.ts`: configuración de rutas

## Integrantes
- Yojana
- Viviana