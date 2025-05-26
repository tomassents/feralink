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

type StatusColor = "success" | "warning" | "error" | "info";

function Appointments() {
  // Mock data - replace with actual API call
  const appointments = [
    {
      id: 1,
      time: "09:00",
      patient: "Max",
      owner: "Ana Martínez",
      type: "Control",
      status: "Próxima",
      notes: "Vacunación anual",
    },
    {
      id: 2,
      time: "10:30",
      patient: "Luna",
      owner: "Carlos Rodríguez",
      type: "Emergencia",
      status: "En Curso",
      notes: "Problema digestivo",
    },
    {
      id: 3,
      time: "11:45",
      patient: "Rocky",
      owner: "Laura Sánchez",
      type: "Control",
      status: "Completada",
      notes: "Revisión post-operatoria",
    },
  ];

  const getStatusColor = (status: string): StatusColor => {
    const statusColors = {
      "Próxima": "info",
      "En Curso": "warning",
      "Completada": "success",
      "Cancelada": "error",
    } as const;
    return statusColors[status as keyof typeof statusColors] || "info";
  };

  return (
    <React.Fragment>
      <Helmet title="Mis Citas" />

      <Grid container spacing={6}>
        <GridItem xs={12}>
          <Typography variant="h3" gutterBottom>
            Mis Citas del Día
          </Typography>
        </GridItem>

        <GridItem xs={12}>
          <Card>
            <CardContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Hora</TableCell>
                    <TableCell>Paciente</TableCell>
                    <TableCell>Propietario</TableCell>
                    <TableCell>Tipo</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>Notas</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appointments.map((appointment) => (
                    <TableRow key={appointment.id}>
                      <TableCell>{appointment.time}</TableCell>
                      <TableCell>{appointment.patient}</TableCell>
                      <TableCell>{appointment.owner}</TableCell>
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