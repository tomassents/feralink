import React from "react";
import { Grid } from "@mui/material";
import type { GridProps } from "@mui/material";

const GridItem = ({ children, ...props }: GridProps) => {
  return (
    <Grid item component="div" {...props}>
      {children}
    </Grid>
  );
};

export default GridItem; 