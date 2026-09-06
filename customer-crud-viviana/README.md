# Customer CRUD - Viviana Cubas Rufasto

Proyecto Spring Boot conectado a SQL Server mediante Docker.

## Requisitos de la práctica
- Paquetes: model, repository, service, rest
- CRUD: listar, listar por ID, listar por estado, registrar, editar, eliminar lógico y restaurar lógico
- Maestro Customer con 12 campos: 8 campos principales + 4 campos de auditoría
- Swagger/OpenAPI y Postman
- SQL Server mediante Docker

## Ejecución
1. Tener Docker Desktop iniciado.
2. Verificar el contenedor SQL Server.
3. Ejecutar:
   `mvnw.cmd spring-boot:run`
4. API:
   `http://localhost:8085`
5. Swagger:
   `http://localhost:8085/swagger-ui.html`

## Endpoints
GET    /v1/api/customer
GET    /v1/api/customer/{id}
GET    /v1/api/customer/state/{state}
POST   /v1/api/customer/save
PUT    /v1/api/customer/update/{id}
PATCH  /v1/api/customer/delete/{id}
PATCH  /v1/api/customer/restore/{id}
