import styled from "styled-components";
import STYLE from "../../style";

export const Container = styled.main`
  width: 1280px;
  height: calc(100vh - ${STYLE.PADDING} - ${STYLE.PADDING});
  max-height: 1100px;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 21px;
  background-color: white;

  @media screen and (max-width: 1024px) {
    min-height: calc(100vh - ${STYLE.PADDING} - ${STYLE.PADDING});
    height: 100%;
    max-height: unset;
    width: 100%;
  }
`;
