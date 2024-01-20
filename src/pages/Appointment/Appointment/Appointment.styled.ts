import styled from "styled-components";

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Contents = styled.article`
  display: flex;
  justify-content: space-between;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 3rem;
  height: 100%;

  @media screen and (max-width: 1024px) {
    padding: 1rem 3rem 3rem 3rem;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 1rem 3rem 1rem;
  }
`;
