import React from "react";
import { FieldProps } from "formik";

import { StyledTextarea } from "./styled.Textarea";

interface InputProps {
  placeholder?: string;
  name: string;
}

export const Textarea: React.FC<FieldProps & InputProps> = (props) => {
  const isInvalid = props.form.errors.hasOwnProperty(props.field.name);

  return (
    <StyledTextarea
      rows={30}
      placeholder={props.placeholder}
      isInvalid={isInvalid}
      {...props.field}
    />
  );
};
