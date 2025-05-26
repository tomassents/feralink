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

type RecordType = "Consulta" | "Vacunación" | "Cirugía" | "Emergencia";
type StatusColor = "success" | "warning" | "error" | "info";

function MedicalRecords() {
  // Mock data - replace with actual API call
  const records = [
    {
      id: 1,
      date: "2024-03-19",
      patient: "Max",
      owner: "Ana Martínez",
      type: "Vacunación" as RecordType,
      diagnosis: "Vacunación anual",
      treatment: "Vacuna polivalente",
      status: "Completado",
    },
    {
      id: 2,
      date: "2024-03-18",
      patient: "Luna",
      owner: "Carlos Rodríguez",
      type: "Emergencia" as RecordType,
      diagnosis: "Gastroenteritis aguda",
      treatment: "Antibióticos y dieta especial",
      status: "En Seguimiento",
    },
    {
      id: 3,
      date: "2024-03-17",
      patient: "Rocky",
      owner: "Laura Sánchez",
      type: "Cirugía" as RecordType,
      diagnosis: "Fractura de tibia",
      treatment: "Cirugía ortopédica",
      status: "Recuperación",
    },
  ];

  const getStatusColor = (status: string): StatusColor => {
    const statusColors = {
      "Completado": "success",
      "En Seguimiento": "warning",
      "Recuperación": "info",
      "Crítico": "error",
    } as const;
    return statusColors[status as keyof typeof statusColors] || "info";
  };

  const getTypeColor = (type: RecordType): StatusColor => {
    const typeColors: Record<RecordType, StatusColor> = {
      "Consulta": "info",
      "Vacunación": "success",
      "Cirugía": "warning",
      "Emergencia": "error",
    };
    return typeColors[type];
  };

  return (
    <React.Fragment>
      <Helmet title="Historias Clínicas" />

      <Grid container spacing={6}>
        <GridItem xs={12}>
          <Typography variant="h3" gutterBottom>
            Historias Clínicas
          </Typography>
        </GridItem>

        <GridItem xs={12}>
          <Card>
            <CardContent>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Paciente</TableCell>
                    <TableCell>Propietario</TableCell>
                    <TableCell>Tipo</TableCell>
                    <TableCell>Diagnóstico</TableCell>
                    <TableCell>Tratamiento</TableCell>
                    <TableCell>Estado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {records.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.patient}</TableCell>
                      <TableCell>{record.owner}</TableCell>
                      <TableCell>
                        <Chip
                          label={record.type}
                          color={getTypeColor(record.type)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{record.diagnosis}</TableCell>
                      <TableCell>{record.treatment}</TableCell>
                      <TableCell>
                        <Chip
                          label={record.status}
                          color={getStatusColor(record.status)}
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

export default MedicalRecords; 