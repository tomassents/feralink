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
import { PawPrint, Calendar, FileText } from "lucide-react";

type StatusColor = "success" | "warning" | "info";

function Pets() {
  // Mock data - replace with actual API call
  const pets = [
    {
      id: 1,
      name: "Max",
      species: "Perro",
      breed: "Labrador",
      age: "3 años",
      lastVisit: "2024-03-15",
      nextVisit: "2024-04-15",
      status: "Saludable",
    },
    {
      id: 2,
      name: "Luna",
      species: "Gato",
      breed: "Siamés",
      age: "2 años",
      lastVisit: "2024-03-18",
      nextVisit: "2024-03-25",
      status: "En tratamiento",
    },
  ];

  const getStatusColor = (status: string): StatusColor => {
    const statusColors = {
      "Saludable": "success",
      "En tratamiento": "warning",
      "Recuperación": "info",
    } as const;
    return statusColors[status as keyof typeof statusColors] || "info";
  };

  return (
    <React.Fragment>
      <Helmet title="Mis Mascotas" />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            Mis Mascotas
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <PawPrint size={48} style={{ marginBottom: "1rem" }} />
              <Typography variant="h4" gutterBottom>
                {pets.length}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Mascotas Registradas
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Calendar size={48} style={{ marginBottom: "1rem" }} />
              <Typography variant="h4" gutterBottom>
                2
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Próximas Citas
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <FileText size={48} style={{ marginBottom: "1rem" }} />
              <Typography variant="h4" gutterBottom>
                5
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                Historias Clínicas
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Grid container spacing={2} alignItems="center" marginBottom={2}>
                <Grid item xs={6}>
                  <Typography variant="h6">
                    Lista de Mascotas
                  </Typography>
                </Grid>
                <Grid item xs={6} sx={{ textAlign: "right" }}>
                  <Button variant="contained" color="primary">
                    Registrar Nueva Mascota
                  </Button>
                </Grid>
              </Grid>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Especie</TableCell>
                    <TableCell>Raza</TableCell>
                    <TableCell>Edad</TableCell>
                    <TableCell>Última Visita</TableCell>
                    <TableCell>Próxima Visita</TableCell>
                    <TableCell>Estado</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {pets.map((pet) => (
                    <TableRow key={pet.id}>
                      <TableCell>{pet.name}</TableCell>
                      <TableCell>{pet.species}</TableCell>
                      <TableCell>{pet.breed}</TableCell>
                      <TableCell>{pet.age}</TableCell>
                      <TableCell>{pet.lastVisit}</TableCell>
                      <TableCell>{pet.nextVisit}</TableCell>
                      <TableCell>
                        <Chip
                          label={pet.status}
                          color={getStatusColor(pet.status)}
                          size="small"
                        />
                      </TableCell>
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

export default Pets; 