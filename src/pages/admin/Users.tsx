import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

function Users() {
  // Mock data - replace with actual API call
  const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "doctor" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "client" },
    { id: 3, name: "Mike Johnson", email: "mike@example.com", role: "clinic" },
  ];

  return (
    <React.Fragment>
      <Helmet title="Gestión de Usuarios" />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            Gestión de Usuarios
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Rol</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Users; 