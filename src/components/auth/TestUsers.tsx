import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const testUsers = [
  {
    role: 'Admin',
    username: 'admin',
    password: '123456',
  },
  {
    role: 'Doctor',
    username: 'doctor',
    password: '123456',
  },
  {
    role: 'Cliente',
    username: 'client',
    password: '123456',
  }
];

const TestUsers = () => {
  return (
    <Box mt={3}>
      <Typography variant="subtitle2" color="textSecondary" gutterBottom>
        Usuarios de prueba:
      </Typography>
      <Box display="flex" gap={2} flexWrap="wrap">
        {testUsers.map((user) => (
          <Paper
            key={user.role}
            sx={{
              p: 1,
              backgroundColor: 'background.default',
              minWidth: '150px'
            }}
          >
            <Typography variant="subtitle2" color="primary">
              {user.role}
            </Typography>
            <Typography variant="body2">
              Usuario: {user.username}
            </Typography>
            <Typography variant="body2">
              Contraseña: {user.password}
            </Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default TestUsers; 