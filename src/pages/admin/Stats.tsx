import React from "react";
import styled from "@emotion/styled";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface StatsProps {
  title: string;
  amount: string;
  icon: React.ReactNode;
  color: "primary" | "secondary" | "warning" | "success" | "error" | "info";
}

const IconWrapper = styled(Box)`
  padding: ${(props) => props.theme.spacing(2)};
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.palette[props.color as keyof typeof props.theme.palette].light};
  color: ${(props) => props.theme.palette[props.color as keyof typeof props.theme.palette].main};
  margin-bottom: ${(props) => props.theme.spacing(3)};

  & > svg {
    width: 28px;
    height: 28px;
  }
`;

function Stats({ title, amount, icon, color }: StatsProps) {
  return (
    <Card>
      <CardContent>
        <IconWrapper color={color}>{icon}</IconWrapper>
        <Typography variant="h4" gutterBottom>
          {amount}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Stats; 