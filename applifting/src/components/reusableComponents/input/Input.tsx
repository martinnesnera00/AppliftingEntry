import React from "react";
import { FieldProps, Field } from "formik";

import { StyledInput } from "./styled.Input";

interface InputProps {
  placeholder?: string;
  type?: string;
  name: string;
}

export const Input: React.FC<FieldProps & InputProps> = (props) => {
  const isInvalid = props.form.errors.hasOwnProperty(props.field.name);

  return (
    <StyledInput
      placeholder={props.placeholder}
      type={props.type}
      isInvalid={isInvalid}
      {...props.field}
    />
  );
};
