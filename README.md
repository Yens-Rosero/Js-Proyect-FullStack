# Aplicación de Tareas Full Stack
Esta aplicación full stack permite a los usuarios gestionar sus tareas personales de manera segura, implementando autenticación y persistencia de datos.
## Tecnologías Utilizadas
### Backend
- NestJS
- Principios SOLID
- JWT para autenticación
- Arquitectura modular
### Frontend
- Next.js
- Interfaces TypeScript
- Arquitectura modular
- Sistema de autenticación integrado
## Requisitos Previos
Asegúrate de tener instalado:
- Node.js
- npm
## Instalación
### Backend (NestJS)

Navega a la carpeta del backend:
```bash
cd backend
```
Instala las dependencias:
```bash
npm install
```

> Nota: Si encuentras problemas con las dependencias, puedes usar:
```bash
npm install 
```
### Frontend (Next.js)

Navega a la carpeta del frontend:
```bash
cd frontend
```
Instala las dependencias:
```bash
npm install
```

> Nota: Si encuentras problemas con las dependencias, usa -f:
```bash
npm install 
```
## Ejecución del Proyecto
### Backend

Inicia el servidor de desarrollo:
```bash
npm run start:dev
```

El servidor se iniciará y estará listo para recibir peticiones.
### Frontend

Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Características Principales
### Sistema de Autenticación
- Registro de usuarios
- Login con credenciales
- Generación de access token
- Rutas protegidas
### Gestión de Tareas
- Creación de tareas personalizadas
- Visualización de tareas por usuario
- Marcado de tareas como completadas
- Persistencia de datos
- Actualización en tiempo real
## Flujo de la Aplicación
1. Registro: Los usuarios deben registrarse primero proporcionando sus datos en el formulario de registro.
2. Login: Después del registro, los usuarios deben iniciar sesión con sus credenciales.
3. Gestión de Tareas: Una vez autenticados, los usuarios pueden:
- Ver sus tareas personales
- Agregar nuevas tareas
- Marcar tareas como completadas
- Las tareas se guardan automáticamente en la base de datos
## Seguridad
- Todas las rutas de tareas están protegidas
- Se requiere un token de acceso válido para acceder a las funcionalidades
- Cada usuario solo puede ver y gestionar sus propias tareas
## Arquitectura
### Backend
- Modularización separada para login y tareas
- Implementación de principios SOLID
- Sistema de autenticación con JWT
### Frontend
- Separación modular de componentes
- Interfaces TypeScript para type safety
- Integración con el sistema de autenticación del backend
