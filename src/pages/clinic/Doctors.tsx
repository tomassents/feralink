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

import GridItem from "@/components/GridItem";

function Doctors() {
  // Mock data - replace with actual API call
  const doctors = [
    { id: 1, name: "Dr. Juan Pérez", specialty: "Cirugía", phone: "555-0123", status: "Activo" },
    { id: 2, name: "Dra. María García", specialty: "Medicina General", phone: "555-0456", status: "Activo" },
    { id: 3, name: "Dr. Carlos López", specialty: "Dermatología", phone: "555-0789", status: "Inactivo" },
  ];

  return (
    <React.Fragment>
      <Helmet title="Gestión de Médicos" />

      <Grid container spacing={6}>
        <GridItem xs={12}>
          <Typography variant="h3" gutterBottom>
            Gestión de Médicos Veterinarios
          </Typography>
        </GridItem>

        <GridItem xs={12}>
          <Card>
            <CardContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Especialidad</TableCell>
                    <TableCell>Teléfono</TableCell>
                    <TableCell>Estado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {doctors.map((doctor) => (
                    <TableRow key={doctor.id}>
                      <TableCell>{doctor.id}</TableCell>
                      <TableCell>{doctor.name}</TableCell>
                      <TableCell>{doctor.specialty}</TableCell>
                      <TableCell>{doctor.phone}</TableCell>
                      <TableCell>{doctor.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </GridItem>
      </Grid>
    </React.Fragment>
  );
}

export default Doctors; 