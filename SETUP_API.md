# Configuración de la API de Feralink

## Configuración Inicial

1. **Variables de Entorno**
   
   Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:
   ```
   VITE_API_URL=https://apiferalink.onrender.com
   ```

2. **Instalación de Dependencias**
   ```bash
   npm install
   ```

3. **Iniciar la Aplicación**
   ```bash
   npm run dev
   ```

## Cambios Realizados

### 1. Configuración de Axios
- Se actualizó `src/utils/axios.ts` para usar la URL base de la API
- Se agregaron interceptores para manejar el token JWT automáticamente
- Se agregó manejo de errores 401 (no autorizado)

### 2. Contexto de Autenticación JWT
- Se actualizó `src/contexts/JWTContext.tsx` para usar los endpoints correctos:
  - Login: `POST /api/users/login`
  - Registro: `POST /api/users/register`
- Se implementó la decodificación del token JWT para obtener información del usuario

### 3. Servicios de API
Se crearon servicios para todas las entidades en `src/services/`:

- **userService.ts**: Manejo de usuarios
- **petService.ts**: Manejo de mascotas
- **medicalRecordService.ts**: Fichas médicas, diagnósticos y tratamientos
- **personalInfoService.ts**: Información personal de usuarios
- **branchService.ts**: Manejo de sucursales

### 4. Deshabilitación de Mocks
- Se comentó la línea `import "@/mocks"` en `src/index.tsx` para usar la API real

## Uso de los Servicios

### Ejemplo de Login
```typescript
import { userService } from '@/services';

try {
  const response = await userService.login({
    username: 'usuario1',
    password: '123456'
  });
  console.log('Token:', response.token);
} catch (error) {
  console.error('Error en login:', error);
}
```

### Ejemplo de Obtener Mascotas
```typescript
import { petService } from '@/services';

try {
  const pets = await petService.getAll();
  console.log('Mascotas:', pets);
} catch (error) {
  console.error('Error:', error);
}
```

### Ejemplo de Crear Ficha Médica
```typescript
import { medicalRecordService } from '@/services';

try {
  const record = await medicalRecordService.createMedicalRecord({
    pet_id: 1,
    branch_id: 1,
    veterinarian_id: 2,
    visit_date: '2024-06-01'
  });
  console.log('Ficha creada:', record);
} catch (error) {
  console.error('Error:', error);
}
```

## Notas Importantes

1. **Autenticación**: Todos los endpoints (excepto login y registro) requieren autenticación. El token se maneja automáticamente después del login.

2. **Manejo de Errores**: Los interceptores de axios manejan automáticamente los errores 401 redirigiendo al login.

3. **Tipos TypeScript**: Todos los servicios incluyen interfaces TypeScript para type safety.

4. **Estado de la API**: La API está desplegada en Render y puede tener un tiempo de respuesta inicial más lento debido al cold start.

## Estructura de Carpetas

```
src/
├── services/
│   ├── index.ts
│   ├── userService.ts
│   ├── petService.ts
│   ├── medicalRecordService.ts
│   ├── personalInfoService.ts
│   └── branchService.ts
├── contexts/
│   └── JWTContext.tsx (actualizado)
├── utils/
│   └── axios.ts (actualizado)
└── config.ts (actualizado)
``` 