import React from "react";
import { Helmet } from "react-helmet-async";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
  Divider,
} from "@mui/material";

import GridItem from "@/components/GridItem";

function Settings() {
  return (
    <React.Fragment>
      <Helmet title="Configuración del Sistema" />

      <Grid container spacing={6}>
        <GridItem xs={12}>
          <Typography variant="h3" gutterBottom>
            Configuración del Sistema
          </Typography>
        </GridItem>

        <GridItem xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Configuraciones Generales
              </Typography>
              
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Permitir registro de nuevas veterinarias"
              />
              <Divider sx={{ my: 2 }} />
              
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Notificaciones por email"
              />
              <Divider sx={{ my: 2 }} />
              
              <FormControlLabel
                control={<Switch />}
                label="Modo mantenimiento"
              />
              <Divider sx={{ my: 2 }} />
              
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Registro de nuevos usuarios"
              />
            </CardContent>
          </Card>
        </GridItem>

        <GridItem xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Configuraciones de Seguridad
              </Typography>
              
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Autenticación de dos factores"
              />
              <Divider sx={{ my: 2 }} />
              
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Bloqueo después de 3 intentos fallidos"
              />
              <Divider sx={{ my: 2 }} />
              
              <FormControlLabel
                control={<Switch />}
                label="Registro de actividad del sistema"
              />
            </CardContent>
          </Card>
        </GridItem>
      </Grid>
    </React.Fragment>
  );
}

export default Settings; 