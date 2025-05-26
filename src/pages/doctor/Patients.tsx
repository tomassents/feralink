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

function Patients() {
  // Mock data - replace with actual API call
  const patients = [
    {
      id: 1,
      name: "Max",
      species: "Perro",
      breed: "Labrador",
      owner: "Ana Martínez",
      lastVisit: "2024-03-15",
      status: "Saludable",
    },
    {
      id: 2,
      name: "Luna",
      species: "Gato",
      breed: "Siamés",
      owner: "Carlos Rodríguez",
      lastVisit: "2024-03-18",
      status: "En tratamiento",
    },
    {
      id: 3,
      name: "Rocky",
      species: "Perro",
      breed: "Pastor Alemán",
      owner: "Laura Sánchez",
      lastVisit: "2024-03-19",
      status: "Recuperación",
    },
  ];

  const getStatusColor = (status: string): "success" | "warning" | "info" => {
    const statusColors = {
      "Saludable": "success",
      "En tratamiento": "warning",
      "Recuperación": "info",
    } as const;
    return statusColors[status as keyof typeof statusColors] || "info";
  };

  return (
    <React.Fragment>
      <Helmet title="Gestión de Pacientes" />

      <Grid container spacing={6}>
        <GridItem xs={12}>
          <Typography variant="h3" gutterBottom>
            Gestión de Pacientes
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
                    <TableCell>Especie</TableCell>
                    <TableCell>Raza</TableCell>
                    <TableCell>Propietario</TableCell>
                    <TableCell>Última Visita</TableCell>
                    <TableCell>Estado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {patients.map((patient) => (
                    <TableRow key={patient.id}>
                      <TableCell>{patient.id}</TableCell>
                      <TableCell>{patient.name}</TableCell>
                      <TableCell>{patient.species}</TableCell>
                      <TableCell>{patient.breed}</TableCell>
                      <TableCell>{patient.owner}</TableCell>
                      <TableCell>{patient.lastVisit}</TableCell>
                      <TableCell>
                        <Chip
                          label={patient.status}
                          color={getStatusColor(patient.status)}
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

export default Patients; 