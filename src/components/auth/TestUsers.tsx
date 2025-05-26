import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
} from '@mui/material';
import { Info as InfoIcon, ContentCopy as ContentCopyIcon } from '@mui/icons-material';

const testUsers = [
  {
    role: 'Administrador',
    email: 'admin@feralink.com',
    password: 'admin123',
    description: 'Acceso completo al sistema'
  },
  {
    role: 'Veterinaria',
    email: 'clinic@feralink.com',
    password: 'clinic123',
    description: 'Gestión de médicos y citas'
  },
  {
    role: 'Médico',
    email: 'doctor@feralink.com',
    password: 'doctor123',
    description: 'Gestión de pacientes y consultas'
  },
  {
    role: 'Cliente',
    email: 'client@feralink.com',
    password: 'client123',
    description: 'Gestión de mascotas y citas'
  }
];

const TestUsers = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <Button
        startIcon={<InfoIcon />}
        onClick={handleClickOpen}
        variant="outlined"
        color="info"
        fullWidth
        sx={{ mt: 2 }}
      >
        Ver Usuarios de Prueba
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Usuarios de Prueba</DialogTitle>
        <DialogContent>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Rol</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Contraseña</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Copiar</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {testUsers.map((user) => (
                <TableRow key={user.email}>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.password}</TableCell>
                  <TableCell>{user.description}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => copyToClipboard(`Email: ${user.email}\nContraseña: ${user.password}`)}
                    >
                      <ContentCopyIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TestUsers; 