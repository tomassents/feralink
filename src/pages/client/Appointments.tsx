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
  Button,
} from "@mui/material";

import GridItem from "@/components/GridItem";

type StatusColor = "success" | "warning" | "error" | "info";

function Appointments() {
  // Mock data - replace with actual API call
  const appointments = [
    {
      id: 1,
      date: "2024-03-25",
      time: "09:00",
      pet: "Max",
      doctor: "Dr. Juan Pérez",
      type: "Control",
      status: "Programada",
      notes: "Vacunación anual",
    },
    {
      id: 2,
      date: "2024-03-20",
      time: "15:30",
      pet: "Luna",
      doctor: "Dra. María García",
      type: "Emergencia",
      status: "Completada",
      notes: "Problema digestivo",
    },
    {
      id: 3,
      date: "2024-03-18",
      time: "11:00",
      pet: "Max",
      doctor: "Dr. Carlos López",
      type: "Control",
      status: "Cancelada",
      notes: "Revisión general",
    },
  ];

  const getStatusColor = (status: string): StatusColor => {
    const statusColors = {
      "Programada": "info",
      "Completada": "success",
      "Cancelada": "error",
      "En Curso": "warning",
    } as const;
    return statusColors[status as keyof typeof statusColors] || "info";
  };

  return (
    <React.Fragment>
      <Helmet title="Mis Citas" />

      <Grid container spacing={6}>
        <GridItem size={{ xs: 12 }}>
          <Typography variant="h3" gutterBottom>
            Mis Citas
          </Typography>
        </GridItem>

        <GridItem size={{ xs: 12 }}>
          <Card>
            <CardContent>
              <Grid container spacing={2} alignItems="center" marginBottom={2}>
                <GridItem size={{ xs: 6 }}>
                  <Typography variant="h6">
                    Historial de Citas
                  </Typography>
                </GridItem>
                <GridItem size={{ xs: 6 }} sx={{ textAlign: "right" }}>
                  <Button variant="contained" color="primary">
                    Agendar Nueva Cita
                  </Button>
                </GridItem>
              </Grid>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Hora</TableCell>
                    <TableCell>Mascota</TableCell>
                    <TableCell>Doctor</TableCell>
                    <TableCell>Tipo</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Notas</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>{appointment.date}</TableCell>
                      <TableCell>{appointment.time}</TableCell>
                      <TableCell>{appointment.pet}</TableCell>
                      <TableCell>{appointment.doctor}</TableCell>
                      <TableCell>{appointment.type}</TableCell>
                      <TableCell>
                        <Chip
                          label={appointment.status}
                          color={getStatusColor(appointment.status)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{appointment.notes}</TableCell>
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