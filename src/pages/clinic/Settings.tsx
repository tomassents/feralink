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
  TextField,
} from "@mui/material";

import GridItem from "@/components/GridItem";

function Settings() {
  return (
    <React.Fragment>
      <Helmet title="Configuración de la Veterinaria" />

      <Grid container spacing={6}>
        <GridItem xs={12}>
          <Typography variant="h3" gutterBottom>
            Configuración de la Veterinaria
          </Typography>
        </GridItem>

        <GridItem xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Información General
              </Typography>
              
              <TextField
                fullWidth
                label="Nombre de la Veterinaria"
                defaultValue="Centro Veterinario Norte"
                margin="normal"
              />
              
              <TextField
                fullWidth
                label="Dirección"
                defaultValue="Av. Principal 456"
                margin="normal"
              />
              
              <TextField
                fullWidth
                label="Teléfono"
                defaultValue="555-0456"
                margin="normal"
              />
              
              <TextField
                fullWidth
                label="Email"
                defaultValue="contacto@veterinarianorte.com"
                margin="normal"
              />
            </CardContent>
          </Card>
        </GridItem>

        <GridItem xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Configuraciones de Citas
              </Typography>
              
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Permitir citas en línea"
              />
              <Divider sx={{ my: 2 }} />
              
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Notificaciones por email"
              />
              <Divider sx={{ my: 2 }} />
              
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Recordatorios automáticos"
              />
              <Divider sx={{ my: 2 }} />
              
              <FormControlLabel
                control={<Switch />}
                label="Confirmación automática"
              />
            </CardContent>
          </Card>
        </GridItem>

        <GridItem xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Horario de Atención
              </Typography>
              
              <Grid container spacing={2}>
                <GridItem xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Hora de Apertura"
                    defaultValue="08:00"
                    type="time"
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                  />
                </GridItem>
                <GridItem xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Hora de Cierre"
                    defaultValue="20:00"
                    type="time"
                    margin="normal"
                    InputLabelProps={{ shrink: true }}
                  />
                </GridItem>
              </Grid>
            </CardContent>
          </Card>
        </GridItem>
      </Grid>
    </React.Fragment>
  );
}

export default Settings; 