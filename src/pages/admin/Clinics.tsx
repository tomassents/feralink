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

function Clinics() {
  // Mock data - replace with actual API call
  const clinics = [
    { id: 1, name: "Veterinaria San Martín", address: "Calle 123", phone: "555-0123" },
    { id: 2, name: "Centro Veterinario Norte", address: "Av. Principal 456", phone: "555-0456" },
    { id: 3, name: "Hospital Veterinario Central", address: "Plaza Mayor 789", phone: "555-0789" },
  ];

  return (
    <React.Fragment>
      <Helmet title="Gestión de Veterinarias" />

      <Grid container spacing={6}>
        <GridItem xs={12}>
          <Typography variant="h3" gutterBottom>
            Gestión de Veterinarias
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
                    <TableCell>Dirección</TableCell>
                    <TableCell>Teléfono</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {clinics.map((clinic) => (
                    <TableRow key={clinic.id}>
                      <TableCell>{clinic.id}</TableCell>
                      <TableCell>{clinic.name}</TableCell>
                      <TableCell>{clinic.address}</TableCell>
                      <TableCell>{clinic.phone}</TableCell>
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

export default Clinics; 