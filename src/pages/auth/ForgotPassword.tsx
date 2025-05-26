import React from "react";
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Box,
  Button,
  TextField,
  Link,
  Typography,
} from "@mui/material";
import useAuth from "@/hooks/useAuth";

function ForgotPassword() {
  const { resetPassword } = useAuth();

  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" gutterBottom>
          ¿Olvidaste tu contraseña?
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Ingresa tu correo electrónico y te enviaremos instrucciones para restablecer tu contraseña.
        </Typography>
      </Box>

      <Formik
        initialValues={{
          username: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string()
            .email("Debe ser un correo electrónico válido")
            .max(255)
            .required("El correo electrónico es requerido"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await resetPassword(values.username);
            setStatus({ success: true });
            setSubmitting(false);
          } catch (error: any) {
            const message = error.message || "Algo salió mal";
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
            <Box sx={{ mb: 3 }}>
              <TextField
                fullWidth
                name="username"
                label="Correo Electrónico"
                value={values.username}
                variant="outlined"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                error={Boolean(touched.username && errors.username)}
                helperText={touched.username && errors.username}
              />
            </Box>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <Typography color="error" sx={{ mt: 1 }}>
                  {errors.submit}
                </Typography>
              </Box>
            )}
            <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
              <Button
                color="primary"
                disabled={isSubmitting}
                size="large"
                type="submit"
                variant="contained"
                sx={{ minWidth: "200px" }}
              >
                Enviar instrucciones
              </Button>
            </Box>
            <Box sx={{ mt: 3, textAlign: "center" }}>
              <Link component={RouterLink} to="/auth/sign-in" variant="body2">
                Volver al inicio de sesión
              </Link>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
}

export default ForgotPassword; 