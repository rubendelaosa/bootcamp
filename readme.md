# Bootcamp API

API REST completa desarrollada con Node.js, Express y MongoDB, dockerizada para fácil despliegue.

## 🚀 Características

- ✅ **API REST completa** para gestión de usuarios
- ✅ **Base de datos MongoDB** en Docker con persistencia
- ✅ **Endpoints CRUD completos** (GET, POST, PUT, DELETE)
- ✅ **Búsqueda y filtrado** de usuarios
- ✅ **Dockerizada** para fácil despliegue
- ✅ **Códigos de estado HTTP** correctos (200, 201, 204)

## 📋 Requisitos

### Opción 1: Con Docker (Recomendado)
- Docker y Docker Compose
- Git

### Opción 2: Desarrollo local
- Node.js (v14 o superior)
- MongoDB (v4 o superior)

## 🐳 Instalación con Docker (Recomendado)

1. **Clona el repositorio:**
```bash
git clone https://github.com/rubendelaosa/bootcamp.git
cd bootcamp
```

2. **Ejecuta con Docker Compose:**
```bash
docker-compose up --build
```

3. **¡Listo!** La API estará disponible en `http://localhost:3000`

## 🛠️ Instalación para desarrollo local

1. **Clona el repositorio:**
```bash
git clone https://github.com/rubendelaosa/bootcamp.git
cd bootcamp
```

2. **Instala las dependencias:**
```bash
cd api
npm install
```

3. **Inicia MongoDB:**
```bash
mongod --dbpath ./mongo-data
```

4. **Ejecuta la aplicación:**
```bash
npm start
```

## 📚 Endpoints disponibles

### 🔍 GET /users
Obtiene todos los usuarios
```bash
curl http://localhost:3000/users
```

### 🔍 GET /users/search
Búsqueda de usuarios con filtros:
- `?name=Juan` - Buscar por nombre
- `?email=test@example.com` - Buscar por email
- `?age=25` - Buscar por edad

```bash
curl "http://localhost:3000/users/search?name=Juan&age=25"
```

### ➕ POST /users
Crea un nuevo usuario
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Juan Pérez","email":"juan@example.com","age":25}'
```

**Respuesta:** `201 Created` - Usuario creado

### ✏️ PUT /users/:id
Actualiza un usuario existente o crea uno nuevo
```bash
curl -X PUT http://localhost:3000/users/USER_ID \
  -H "Content-Type: application/json" \
  -d '{"name":"Juan Actualizado","age":30}'
```

**Respuestas:**
- `200 OK` - Usuario actualizado
- `201 Created` - Usuario creado (si no existe)

### 🗑️ DELETE /users/:id
Elimina un usuario por ID
```bash
curl -X DELETE http://localhost:3000/users/USER_ID
```

**Respuestas:**
- `200 OK` - Usuario eliminado
- `204 No Content` - Usuario no encontrado

### 🗑️ DELETE /users
Elimina usuarios por filtros
```bash
curl -X DELETE "http://localhost:3000/users?name=Juan"
```

**Respuestas:**
- `200 OK` - Usuarios eliminados
- `204 No Content` - No se encontraron usuarios

## 🧪 Pruebas de ejemplo

### 1. Crear usuarios de prueba:
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Ana García","email":"ana@example.com","age":28}'

curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Carlos López","email":"carlos@example.com","age":32}'
```

### 2. Ver todos los usuarios:
```bash
curl http://localhost:3000/users
```

### 3. Buscar usuarios:
```bash
curl "http://localhost:3000/users/search?age=30"
```

## 🗂️ Estructura del proyecto

```
bootcamp/
├── api/
│   ├── app.js              # Servidor Express con todos los endpoints
│   ├── package.json        # Dependencias Node.js
│   ├── package-lock.json   # Lock de dependencias
│   ├── Dockerfile          # Configuración Docker para la API
│   ├── .dockerignore       # Archivos a excluir en Docker
│   └── users.json          # Datos de ejemplo
├── docker-compose.yml      # Orquestación de servicios (API + MongoDB)
├── .gitignore             # Archivos a excluir de Git
└── readme.md              # Este archivo
```

## 🔧 Variables de entorno

- `PORT` - Puerto de la API (por defecto: 3000)
- `MONGODB_URI` - URI de conexión a MongoDB (por defecto: mongodb://localhost:27017)

## 🐳 Comandos Docker útiles

```bash
# Iniciar servicios
docker-compose up --build

# Iniciar en segundo plano
docker-compose up -d

# Ver logs
docker-compose logs

# Detener servicios
docker-compose down

# Reconstruir solo la API
docker-compose build api

# Ver contenedores ejecutándose
docker ps
```

## 🎯 Códigos de estado HTTP

- **200 OK** - Operación exitosa
- **201 Created** - Recurso creado exitosamente
- **204 No Content** - Operación exitosa sin contenido
- **400 Bad Request** - Error en la petición
- **500 Internal Server Error** - Error del servidor

## 🚀 Despliegue

Este proyecto está listo para desplegar en cualquier plataforma que soporte Docker:

- **Heroku** (con Docker)
- **DigitalOcean App Platform**
- **AWS ECS**
- **Google Cloud Run**
- **Railway**
- **Render**

## 👨‍💻 Autor

Desarrollado como parte del Bootcamp Full Stack - Ejercicio de API REST con MongoDB y Docker.

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia ISC](LICENSE).