# Documentación de la API

## Autenticación

Todos los endpoints (excepto registro y login de usuarios) requieren autenticación mediante middleware `auth`.

Incluye el token JWT en el header:

```
Authorization: Bearer <token>
```

---

## Endpoints

### Usuarios (`/api/users`)

#### Registrar usuario
- **POST** `/api/users/register`

**Request Body:**
```json
{
  "username": "usuario1",
  "password": "123456",
  "user_type_id": 1,
  "branch_id": 1,
  "role_id": 1
}
```
**Response:**
```json
{
  "id": 1,
  "username": "usuario1",
  "password_hash": "...",
  "user_type_id": 1,
  "branch_id": 1,
  "role_id": 1,
  "is_active": true,
  "created_at": "2024-06-01T00:00:00.000Z",
  "updated_at": "2024-06-01T00:00:00.000Z"
}
```

#### Login usuario
- **POST** `/api/users/login`

**Request Body:**
```json
{
  "username": "usuario1",
  "password": "123456"
}
```
**Response:**
```json
{
  "token": "<jwt_token>"
}
```

#### Obtener todos los usuarios
- **GET** `/api/users/`

**Response:**
```json
[
  {
    "id": 1,
    "username": "usuario1",
    "user_type_id": 1,
    "branch_id": 1,
    "role_id": 1,
    "is_active": true,
    "created_at": "2024-06-01T00:00:00.000Z",
    "updated_at": "2024-06-01T00:00:00.000Z"
  }
]
```

#### Obtener usuario por ID
- **GET** `/api/users/{id}`

#### Actualizar usuario
- **PUT** `/api/users/{id}`

#### Eliminar usuario
- **DELETE** `/api/users/{id}`

---

### Tipos de Usuario (`/api/user-types`)

#### Crear tipo de usuario
- **POST** `/api/user-types/`

**Request Body:**
```json
{
  "name": "Veterinario",
  "description": "Usuario con permisos de veterinario"
}
```

#### Listar todos los tipos de usuario
- **GET** `/api/user-types/`

#### Obtener tipo de usuario por ID
- **GET** `/api/user-types/{id}`

#### Actualizar tipo de usuario
- **PUT** `/api/user-types/{id}`

#### Eliminar tipo de usuario
- **DELETE** `/api/user-types/{id}`

---

### Roles (`/api/roles`)

#### Crear rol
- **POST** `/api/roles/`

**Request Body:**
```json
{
  "name": "Administrador",
  "description": "Rol con todos los permisos"
}
```

#### Listar todos los roles
- **GET** `/api/roles/`

#### Obtener rol por ID
- **GET** `/api/roles/{id}`

#### Actualizar rol
- **PUT** `/api/roles/{id}`

#### Eliminar rol
- **DELETE** `/api/roles/{id}`

---

### Sucursales (`/api/branches`)

#### Crear sucursal
- **POST** `/api/branches/`

**Request Body:**
```json
{
  "name": "Sucursal Central",
  "address": "Av. Principal 123"
}
```

#### Listar todas las sucursales
- **GET** `/api/branches/`

#### Obtener sucursal por ID
- **GET** `/api/branches/{id}`

#### Actualizar sucursal
- **PUT** `/api/branches/{id}`

#### Eliminar sucursal
- **DELETE** `/api/branches/{id}`

---

### Información Personal (`/api/personal-info`)

#### Crear información personal
- **POST** `/api/personal-info/`

**Request Body:**
```json
{
  "user_id": 1,
  "first_name": "Juan",
  "last_name": "Pérez",
  "email": "juan.perez@mail.com",
  "phone": "123456789",
  "birth_date": "1990-01-01"
}
```

#### Listar toda la información personal
- **GET** `/api/personal-info/`

#### Obtener información personal por ID
- **GET** `/api/personal-info/{id}`

#### Actualizar información personal
- **PUT** `/api/personal-info/{id}`

#### Eliminar información personal
- **DELETE** `/api/personal-info/{id}`

---

### Imágenes (`/api/images`)

#### Subir imagen
- **POST** `/api/images/`

**Request Body:**
```json
{
  "user_id": 1,
  "image_data": "<base64>"
}
```

#### Listar todas las imágenes
- **GET** `/api/images/`

#### Obtener imagen por ID
- **GET** `/api/images/{id}`

#### Actualizar imagen
- **PUT** `/api/images/{id}`

#### Eliminar imagen
- **DELETE** `/api/images/{id}`

---

### Mascotas (`/api/pets`)

#### Crear mascota
- **POST** `/api/pets/`

**Request Body:**
```json
{
  "owner_id": 1,
  "name": "Firulais",
  "species": "Perro",
  "breed": "Labrador",
  "age": 5
}
```

#### Listar todas las mascotas
- **GET** `/api/pets/`

#### Obtener mascota por ID
- **GET** `/api/pets/{id}`

#### Actualizar mascota
- **PUT** `/api/pets/{id}`

#### Eliminar mascota
- **DELETE** `/api/pets/{id}`

---

### Fichas Médicas (`/api/medical-records`)

#### Crear ficha médica
- **POST** `/api/medical-records/`

**Request Body:**
```json
{
  "pet_id": 1,
  "branch_id": 1,
  "veterinarian_id": 2,
  "visit_date": "2024-06-01"
}
```

#### Listar todas las fichas médicas
- **GET** `/api/medical-records/`

#### Obtener ficha médica por ID
- **GET** `/api/medical-records/{id}`

#### Actualizar ficha médica
- **PUT** `/api/medical-records/{id}`

#### Eliminar ficha médica
- **DELETE** `/api/medical-records/{id}`

---

### Diagnósticos (`/api/diagnoses`)

#### Crear diagnóstico
- **POST** `/api/diagnoses/`

**Request Body:**
```json
{
  "medical_record_id": 1,
  "description": "Otitis externa en oído derecho"
}
```

#### Listar todos los diagnósticos
- **GET** `/api/diagnoses/`

#### Obtener diagnóstico por ID
- **GET** `/api/diagnoses/{id}`

#### Actualizar diagnóstico
- **PUT** `/api/diagnoses/{id}`

#### Eliminar diagnóstico
- **DELETE** `/api/diagnoses/{id}`

---

### Tratamientos (`/api/treatments`)

#### Crear tratamiento
- **POST** `/api/treatments/`

**Request Body:**
```json
{
  "medical_record_id": 1,
  "description": "Aplicar gotas óticas cada 12 horas por 7 días"
}
```

#### Listar todos los tratamientos
- **GET** `/api/treatments/`

#### Obtener tratamiento por ID
- **GET** `/api/treatments/{id}`

#### Actualizar tratamiento
- **PUT** `/api/treatments/{id}`

#### Eliminar tratamiento
- **DELETE** `/api/treatments/{id}`

---

# Notas
- Todos los endpoints que requieren autenticación deben incluir el header `Authorization` con el token JWT.
- Los campos pueden variar según la configuración de la base de datos y las relaciones entre modelos.
- Para detalles de errores, los endpoints retornan `{ "error": "mensaje" }` o `{ "message": "Eliminado" }` en operaciones de borrado exitosas. 