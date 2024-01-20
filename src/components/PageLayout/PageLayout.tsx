import React from 'react';

import * as Styled from './PageLayout.styled';

interface IPageLayout {
   children?: JSX.Element[] | JSX.Element;
}

const PageLayout: React.FC<IPageLayout> = ({ children }) => {

   return (
      <Styled.PageGrid>
         {children}
      </Styled.PageGrid>
   )
};

export default PageLayout;