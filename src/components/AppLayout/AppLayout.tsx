import React from "react";

import * as Styled from "./AppLayout.styled";

interface AppLayoutProps {
  children: JSX.Element;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default AppLayout;
