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
  Chip,
} from "@mui/material";

import GridItem from "@/components/GridItem";

function Appointments() {
  // Mock data - replace with actual API call
  const appointments = [
    {
      id: 1,
      date: "2024-03-20",
      time: "09:00",
      doctor: "Dr. Juan Pérez",
      patient: "Max",
      owner: "Ana Martínez",
      status: "Confirmada",
    },
    {
      id: 2,
      date: "2024-03-20",
      time: "10:00",
      doctor: "Dra. María García",
      patient: "Luna",
      owner: "Carlos Rodríguez",
      status: "Pendiente",
    },
    {
      id: 3,
      date: "2024-03-20",
      time: "11:00",
      doctor: "Dr. Carlos López",
      patient: "Rocky",
      owner: "Laura Sánchez",
      status: "Cancelada",
    },
  ];

  const getStatusColor = (status: string) => {
    const statusColors = {
      Confirmada: "success",
      Pendiente: "warning",
      Cancelada: "error",
    };
    return statusColors[status as keyof typeof statusColors] || "default";
  };

  return (
    <React.Fragment>
      <Helmet title="Gestión de Citas" />

      <Grid container spacing={6}>
        <GridItem xs={12}>
          <Typography variant="h3" gutterBottom>
            Gestión de Citas
          </Typography>
        </GridItem>

        <GridItem xs={12}>
          <Card>
            <CardContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Hora</TableCell>
                    <TableCell>Doctor</TableCell>
                    <TableCell>Paciente</TableCell>
                    <TableCell>Propietario</TableCell>
                    <TableCell>Estado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>{appointment.id}</TableCell>
                      <TableCell>{appointment.date}</TableCell>
                      <TableCell>{appointment.time}</TableCell>
                      <TableCell>{appointment.doctor}</TableCell>
                      <TableCell>{appointment.patient}</TableCell>
                      <TableCell>{appointment.owner}</TableCell>
                      <TableCell>
                        <Chip
                          label={appointment.status}
                          color={getStatusColor(appointment.status)}
                          size="small"
                        />
                      </TableCell>
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

export default Appointments; 