import React from "react";

import { StyledSpinner } from "./styled.LoadingWrapper";

interface Props {
  isLoading: boolean;
  children?: React.ReactNode;
}

export const LoadingWrapper: React.FC<Props> = ({ children, isLoading }) => {
  return <>{isLoading ? <StyledSpinner /> : children}</>;
};
