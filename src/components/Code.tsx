import React from "react";
import styled from "@emotion/styled";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Base = styled(SyntaxHighlighter)`
  border-radius: 3px;
  padding: ${(props) => props.theme.spacing(3)} !important;
  background-color: #1b2430 !important;
`;

interface CodeType {
  children: string;
}

const Code: React.FC<CodeType> = ({ children }) => {
  return (
    <Base language="javascript" style={vs2015}>
      {children}
    </Base>
  );
};

export default Code;
