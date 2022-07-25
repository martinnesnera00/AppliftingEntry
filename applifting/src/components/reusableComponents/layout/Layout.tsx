import React from "react";

import { InnerContainer, OuterContainer } from "./styled.Layout";

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <OuterContainer>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  );
};

export default Layout;
