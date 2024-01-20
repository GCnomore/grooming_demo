import styled from "styled-components";
import STYLE from "./style";

export const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${STYLE.PADDING};
  color: ${STYLE.FONT_COLOR};
  background-color: ${STYLE.MAIN_BG_COLOR};

  /* input {
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    outline: none;
    border: 1px solid #ccc;
    
    &:active, &:focus {
      border-color: ${STYLE.MAIN_BG_COLOR};
    }
  
  } */

  @media screen and (max-width: 768px) {
    height: 100%;
    max-height: unset;
    padding: 40px 21px;
  }

`;
