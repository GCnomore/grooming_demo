import styled from "styled-components";
import STYLE from "../../../../../style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 1024px) {
    height: 500px;
  }
`;

export const MapSection = styled.div`
  width: 100%;
  height: 50%;
  position: relative;
  box-shadow: ${STYLE.BOX_SHADOW};
  border-radius: 9px;

  > div > div {
    border-radius: 12px;
  }
`;

export const StoreInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  font-size: 14px;
  box-shadow: ${STYLE.BOX_SHADOW};
  padding: 1rem;
  border-radius: 9px;

  > h2 {
    font-size: 1.25rem;
  }
  > span {
    margin-bottom: 0.25rem;
    font-size: 1rem;
  }
  > span:nth-child(2) {
    margin-bottom: 0;
  }
`;
