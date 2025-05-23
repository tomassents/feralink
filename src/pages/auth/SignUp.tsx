import React from "react";
import { Helmet } from "react-helmet-async";

import { Typography } from "@mui/material";

import SignUpComponent from "@/components/auth/SignUp";

function SignUp() {
  return (
    <React.Fragment>
      <Helmet title="Sign Up" />

      <Typography component="h1" variant="h3" align="center" gutterBottom>
        Get started
      </Typography>
      <Typography component="h2" variant="subtitle1" align="center">
        Start creating the best possible user experience for you customers
      </Typography>

      <SignUpComponent />
    </React.Fragment>
  );
}

export default SignUp;
