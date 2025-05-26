import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { Dog, Calendar, FileText } from "lucide-react";

import Stats from "@/pages/admin/Stats";

function Dashboard() {
  return (
    <React.Fragment>
      <Helmet title="Dashboard Médico" />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            Dashboard Médico Veterinario
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Stats
            title="Pacientes Activos"
            amount="45"
            icon={<Dog />}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stats
            title="Citas Pendientes"
            amount="8"
            icon={<Calendar />}
            color="warning"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stats
            title="Historias Clínicas"
            amount="156"
            icon={<FileText />}
            color="info"
          />
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Bienvenido Dr. [Nombre]
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Gestiona tus pacientes, citas y mantén actualizadas las historias clínicas.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Dashboard; 