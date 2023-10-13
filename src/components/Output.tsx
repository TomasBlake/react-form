import styled from "@emotion/styled";
import React from "react";
import { IFormInput } from "./Form";

const StyledOutput = styled("div")({
  display: "flex",
  flexDirection: "column",
  marginTop: "20px",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  backgroundColor: "#f8f8f8",
});

interface outputProps {
  submittedData: IFormInput;
}

export const Output: React.FC<outputProps> = ({ submittedData }) => {
  return (
    <StyledOutput>
      <h2>Vložené informace:</h2>
      <p>
        <strong>Jméno:</strong> {submittedData.name}
      </p>
      <p>
        <strong>Telefonní číslo:</strong> {submittedData.phoneNumber}
      </p>
      <p>
        <strong>Email:</strong> {submittedData.email}
      </p>
      <p>
        <strong>Hlavní jazyk:</strong> {submittedData.language}
      </p>
    </StyledOutput>
  );
};
