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
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

import GridItem from "@/components/GridItem";

type RecordType = "Consulta" | "Vacunación" | "Cirugía" | "Emergencia";
type StatusColor = "success" | "warning" | "error" | "info";

function MedicalRecords() {
  const [selectedPet, setSelectedPet] = React.useState("all");

  // Mock data - replace with actual API call
  const records = [
    {
      id: 1,
      date: "2024-03-19",
      pet: "Max",
      type: "Vacunación" as RecordType,
      doctor: "Dr. Juan Pérez",
      diagnosis: "Control anual",
      treatment: "Vacuna polivalente",
      status: "Completado",
    },
    {
      id: 2,
      date: "2024-03-18",
      pet: "Luna",
      type: "Emergencia" as RecordType,
      doctor: "Dra. María García",
      diagnosis: "Gastroenteritis",
      treatment: "Antibióticos y dieta especial",
      status: "En Seguimiento",
    },
    {
      id: 3,
      date: "2024-03-15",
      pet: "Max",
      type: "Consulta" as RecordType,
      doctor: "Dr. Carlos López",
      diagnosis: "Revisión general",
      treatment: "Sin tratamiento requerido",
      status: "Completado",
    },
  ];

  const getStatusColor = (status: string): StatusColor => {
    const statusColors = {
      "Completado": "success",
      "En Seguimiento": "warning",
      "Pendiente": "info",
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

  const filteredRecords = selectedPet === "all" 
    ? records 
    : records.filter(record => record.pet === selectedPet);

  return (
    <React.Fragment>
      <Helmet title="Historias Clínicas" />

      <Grid container spacing={6}>
        <GridItem size={{ xs: 12 }}>
          <Typography variant="h3" gutterBottom>
            Historias Clínicas
          </Typography>
        </GridItem>

        <GridItem size={{ xs: 12 }}>
          <Card>
            <CardContent>
              <Grid container spacing={2} alignItems="center" marginBottom={2}>
                <GridItem size={{ xs: 6 }}>
                  <Typography variant="h6">
                    Registros Médicos
                  </Typography>
                </GridItem>
                <GridItem size={{ xs: 6 }}>
                  <FormControl fullWidth>
                    <InputLabel id="pet-select-label">Mascota</InputLabel>
                    <Select
                      labelId="pet-select-label"
                      value={selectedPet}
                      label="Mascota"
                      onChange={(e) => setSelectedPet(e.target.value)}
                    >
                      <MenuItem value="all">Todas las mascotas</MenuItem>
                      <MenuItem value="Max">Max</MenuItem>
                      <MenuItem value="Luna">Luna</MenuItem>
                    </Select>
                  </FormControl>
                </GridItem>
              </Grid>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Mascota</TableCell>
                    <TableCell>Tipo</TableCell>
                    <TableCell>Doctor</TableCell>
                    <TableCell>Diagnóstico</TableCell>
                    <TableCell>Tratamiento</TableCell>
                    <TableCell>Estado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>{record.date}</TableCell>
                      <TableCell>{record.pet}</TableCell>
                      <TableCell>
                        <Chip
                          label={record.type}
                          color={getTypeColor(record.type)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>{record.doctor}</TableCell>
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