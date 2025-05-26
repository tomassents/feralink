import React from 'react';
import { Box, Typography, Paper, Divider, CircularProgress } from '@mui/material';
import useAuth from '@/hooks/useAuth';

const UserInfo = () => {
  const { user, isInitialized } = useAuth();

  // Show loading state while initializing
  if (!isInitialized) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }

  // If no user data, don't render anything
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
            <strong>Usuario:</strong> {user.username || 'N/A'}
          </Typography>
          <Typography>
            <strong>Estado:</strong> {user.is_active ? 'Activo' : 'Inactivo'}
          </Typography>
        </Box>

        {/* Información personal */}
        {user.PersonalInfo && (
          <Box sx={{ flex: '1 1 300px' }}>
            <Typography variant="subtitle1" color="primary" gutterBottom>
              Información Personal
            </Typography>
            <Typography>
              <strong>Nombre:</strong> {user.PersonalInfo.first_name || 'N/A'} {user.PersonalInfo.last_name || ''}
            </Typography>
            <Typography>
              <strong>Email:</strong> {user.PersonalInfo.email || 'N/A'}
            </Typography>
            <Typography>
              <strong>Teléfono:</strong> {user.PersonalInfo.phone || 'N/A'}
            </Typography>
          </Box>
        )}

        <Divider sx={{ width: '100%', my: 2 }} />

        {/* Rol y tipo de usuario */}
        <Box sx={{ flex: '1 1 300px' }}>
          <Typography variant="subtitle1" color="primary" gutterBottom>
            Rol y Tipo de Usuario
          </Typography>
          {user.Role && (
            <>
              <Typography>
                <strong>Rol:</strong> {user.Role.name || 'N/A'}
              </Typography>
              <Typography>
                <strong>Descripción del Rol:</strong> {user.Role.description || 'N/A'}
              </Typography>
            </>
          )}
          {user.UserType && (
            <>
              <Typography>
                <strong>Tipo de Usuario:</strong> {user.UserType.name || 'N/A'}
              </Typography>
              <Typography>
                <strong>Descripción del Tipo:</strong> {user.UserType.description || 'N/A'}
              </Typography>
            </>
          )}
        </Box>

        {/* Información de la sucursal */}
        {user.Branch && (
          <Box sx={{ flex: '1 1 300px' }}>
            <Typography variant="subtitle1" color="primary" gutterBottom>
              Información de la Sucursal
            </Typography>
            <Typography>
              <strong>Sucursal:</strong> {user.Branch.name || 'N/A'}
            </Typography>
            <Typography>
              <strong>Dirección:</strong> {user.Branch.address || 'N/A'}
            </Typography>
          </Box>
        )}
      </Box>
    </Paper>
  );
};

export default UserInfo; 