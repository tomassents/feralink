import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import styled from "@emotion/styled";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "@/utils/axios";

import {
  Alert as MuiAlert,
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Button,
  Checkbox,
  Divider as MuiDivider,
  FormControlLabel,
  Link,
  TextField as MuiTextField,
  Typography,
} from "@mui/material";
import { spacing } from "@mui/system";

import useAuth from "@/hooks/useAuth";
import TestUsers from "@/components/auth/TestUsers";

const Alert = styled(MuiAlert)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const TextField = styled(MuiTextField)<{ my?: number }>(spacing);

const Centered = styled.div`
  text-align: center;
`;

function SignIn() {
  const navigate = useNavigate();
  const { signIn, user } = useAuth();

  return (
    <>
      <Helmet title="Iniciar Sesión" />
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100vh",
          py: 8,
        }}
      >
        <Box
          sx={{
            mx: "auto",
            maxWidth: "400px",
            p: 3,
            backgroundColor: "background.paper",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          <Typography component="h1" variant="h4" align="center" gutterBottom>
            Bienvenido a Feralink
          </Typography>
          <Typography component="h2" variant="body1" align="center">
            Inicia sesión para continuar
          </Typography>

          <Formik
            initialValues={{
              username: "",
              password: "",
              submit: false,
            }}
            validationSchema={Yup.object().shape({
              username: Yup.string()
                .max(255)
                .required("El usuario es requerido"),
              password: Yup.string()
                .max(255)
                .required("La contraseña es requerida"),
            })}
            onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
              try {
                await signIn(values.username, values.password);
                
                // Redirigir según el rol del usuario que obtuvimos del token JWT
                const roleRedirects = {
                  admin: "/admin",
                  clinic: "/clinic",
                  doctor: "/doctor",
                  client: "/client"
                };

                // Usar el rol del usuario del contexto
                const role = user?.role || "client";
                navigate(roleRedirects[role as keyof typeof roleRedirects]);
              } catch (error: any) {
                const message = error.response?.data?.message || error.message || "Algo salió mal";
                setStatus({ success: false });
                setErrors({ submit: message });
                setSubmitting(false);
              }
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form noValidate onSubmit={handleSubmit}>
                {errors.submit && (
                  <Alert mt={2} mb={3} severity="warning">
                    {errors.submit}
                  </Alert>
                )}
                <TextField
                  type="text"
                  name="username"
                  label="Usuario"
                  value={values.username}
                  error={Boolean(touched.username && errors.username)}
                  fullWidth
                  helperText={touched.username && errors.username}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  my={2}
                />
                <TextField
                  type="password"
                  name="password"
                  label="Contraseña"
                  value={values.password}
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  my={2}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Recordarme"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  sx={{ mt: 2 }}
                >
                  Iniciar Sesión
                </Button>

                <TestUsers />

                <Box mt={2}>
                  <Link
                    component={RouterLink}
                    to="/auth/forgot-password"
                    variant="body2"
                    sx={{ textDecoration: "none" }}
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </Box>
                <Box mt={2}>
                  <Link
                    component={RouterLink}
                    to="/auth/sign-up"
                    variant="body2"
                    sx={{ textDecoration: "none" }}
                  >
                    ¿No tienes una cuenta? Regístrate
                  </Link>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </>
  );
}

export default SignIn;
