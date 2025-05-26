import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import useAuth from '@/hooks/useAuth';

const UserInfo = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <Paper sx={{ p: 2, mt: 2 }}>
      <Typography variant="h6" gutterBottom>
        Información del Usuario
      </Typography>
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {/* Información básica */}
        <Box sx={{ flex: '1 1 300px' }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Datos de Cuenta
          </Typography>
          <Typography>
            <strong>Usuario:</strong> {user.username}
          </Typography>
          <Typography>
            <strong>Estado:</strong> {user.is_active ? 'Activo' : 'Inactivo'}
          </Typography>
        </Box>

        {/* Información personal */}
        <Box sx={{ flex: '1 1 300px' }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Información Personal
          </Typography>
          <Typography>
            <strong>Nombre:</strong> {user.PersonalInfo.first_name} {user.PersonalInfo.last_name}
          </Typography>
          <Typography>
            <strong>Email:</strong> {user.PersonalInfo.email}
          </Typography>
          <Typography>
            <strong>Teléfono:</strong> {user.PersonalInfo.phone}
          </Typography>
        </Box>

        <Divider sx={{ width: '100%', my: 2 }} />

        {/* Rol y tipo de usuario */}
        <Box sx={{ flex: '1 1 300px' }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Rol y Tipo de Usuario
          </Typography>
          <Typography>
            <strong>Rol:</strong> {user.Role.name}
          </Typography>
          <Typography>
            <strong>Descripción del Rol:</strong> {user.Role.description}
          </Typography>
          <Typography>
            <strong>Tipo de Usuario:</strong> {user.UserType.name}
          </Typography>
          <Typography>
            <strong>Descripción del Tipo:</strong> {user.UserType.description}
          </Typography>
        </Box>

        {/* Información de la sucursal */}
        <Box sx={{ flex: '1 1 300px' }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Información de la Sucursal
          </Typography>
          <Typography>
            <strong>Sucursal:</strong> {user.Branch.name}
          </Typography>
          <Typography>
            <strong>Dirección:</strong> {user.Branch.address}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default UserInfo; 