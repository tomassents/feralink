import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Outlet, useLocation } from "react-router-dom";

import {
  Box,
  CssBaseline,
  Paper as MuiPaper,
  Container as MuiContainer,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { spacing } from "@mui/system";

import GlobalStyle from "@/components/GlobalStyle";
import Navbar from "@/components/navbar/Navbar";
import feralinkItems from "@/components/sidebar/feralinkItems";
import Sidebar from "@/components/sidebar/Sidebar";
import Footer from "@/components/Footer";
import Settings from "@/components/Settings";
import useAuth from "@/hooks/useAuth";

const drawerWidth = 258;

const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

const Drawer = styled.div`
  ${(props) => props.theme.breakpoints.up("md")} {
    width: ${drawerWidth}px;
    flex-shrink: 0;
  }
`;

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  width: 0;
`;

const Paper = styled(MuiPaper)(spacing);

const Container = styled(MuiContainer)`
  height: 100%;
`;

const MainContent = styled(Paper)`
  flex: 1;
  background: ${(props) => props.theme.palette.background.default};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }
`;

interface DashboardType {
  children?: React.ReactNode;
}

const Dashboard: React.FC<DashboardType> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up("lg"));

  // Filtrar los menús según el rol del usuario
  const getMenusByRole = () => {
    const role = user?.role || "client"; // Si no hay rol, mostrar menú de cliente por defecto
    
    const menuMap = {
      admin: [feralinkItems[0]], // Solo menú de administración
      clinic: [feralinkItems[1]], // Solo menú de veterinaria
      doctor: [feralinkItems[2]], // Solo menú de médico
      client: [feralinkItems[3]], // Solo menú de cliente
    };

    return menuMap[role as keyof typeof menuMap] || menuMap.client;
  };

  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />
      <Drawer>
        <Box sx={{ display: { xs: "block", lg: "none" } }}>
          <Sidebar
            PaperProps={{ style: { width: drawerWidth } }}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            items={getMenusByRole()}
          />
        </Box>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Sidebar
            PaperProps={{ style: { width: drawerWidth } }}
            items={getMenusByRole()}
          />
        </Box>
      </Drawer>
      <AppContent>
        <Navbar onDrawerToggle={handleDrawerToggle} />
        <MainContent p={isLgUp ? 12 : 5}>
          <Container maxWidth="xl">
            {children}
            <Outlet />
          </Container>
        </MainContent>
        <Footer />
      </AppContent>
      <Settings />
    </Root>
  );
};

export default Dashboard;
