import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  Container, 
  Typography, 
  Box, 
  Grid as MuiGrid, 
  Card, 
  CardContent,
  Theme
} from "@mui/material";
import { Users, Building2, Settings } from "lucide-react";

import Stats from "@/pages/admin/Stats";
import UserInfo from '@/components/auth/UserInfo';

const Grid = MuiGrid as any; // Temporary type assertion to fix build

const AdminDashboard = () => {
  return (
    <React.Fragment>
      <Helmet title="Dashboard" />

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Panel de Administración
        </Typography>
        
        <UserInfo />
        
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Typography variant="h3" gutterBottom>
                Dashboard Administrativo
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Stats
                title="Total Usuarios"
                amount="2,300"
                icon={<Users size={24} />}
                color="primary"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Stats
                title="Veterinarias"
                amount="48"
                icon={<Building2 size={24} />}
                color="secondary"
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Stats
                title="Configuraciones Activas"
                amount="12"
                icon={<Settings size={24} />}
                color="warning"
              />
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Bienvenido al Panel de Administración
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Desde aquí puedes gestionar usuarios, veterinarias y configuraciones del sistema.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default AdminDashboard; 