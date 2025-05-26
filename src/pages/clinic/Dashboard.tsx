import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { Stethoscope, Calendar, Clock } from "lucide-react";

import Stats from "@/pages/admin/Stats";

function Dashboard() {
  return (
    <React.Fragment>
      <Helmet title="Dashboard Veterinaria" />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            Dashboard Veterinaria
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Stats
            title="Médicos Activos"
            amount="12"
            icon={<Stethoscope />}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stats
            title="Citas Hoy"
            amount="24"
            icon={<Calendar />}
            color="success"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stats
            title="Próxima Cita"
            amount="15:30"
            icon={<Clock />}
            color="warning"
          />
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Bienvenido al Panel de la Veterinaria
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Gestiona tus médicos veterinarios y mantén un control de las citas programadas.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Dashboard; 