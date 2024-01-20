import React from "react";

import * as Styled from "./LabelInput.styled";

interface LabelInputProps {
  role?: string;
  children?: JSX.Element;
  error?: string;
  label?: string;
  containerClass?: string;
}

const LabelInput: React.FC<LabelInputProps> = ({ children, label, error, role, containerClass }) => {
  return (
    <Styled.Container className={containerClass}>
      {label && <label>{label}</label>}
      {children}
      {
        error && <Styled.Error role={role} >{error}</Styled.Error>
      }
    </Styled.Container>
  );
};

export default LabelInput;
