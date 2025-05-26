import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { PawPrint, Calendar, FileText } from "lucide-react";

import Stats from "@/pages/admin/Stats";

function Dashboard() {
  return (
    <React.Fragment>
      <Helmet title="Dashboard Cliente" />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Typography variant="h3" gutterBottom>
            Mis Mascotas
          </Typography>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Stats
            title="Mascotas Registradas"
            amount="2"
            icon={<PawPrint />}
            color="primary"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stats
            title="Próximas Citas"
            amount="1"
            icon={<Calendar />}
            color="warning"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stats
            title="Historias Clínicas"
            amount="5"
            icon={<FileText />}
            color="info"
          />
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Bienvenido a tu Portal de Mascotas
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Aquí puedes gestionar la información de tus mascotas, agendar citas y ver sus historias clínicas.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Dashboard; 