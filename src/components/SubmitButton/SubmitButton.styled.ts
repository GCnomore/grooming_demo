import styled from "styled-components";
import STYLE from "../../style";

export const SubmitButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 170px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  margin-top: auto;
  padding-bottom: 3rem;
  padding-top: 1rem;

  p {
    font-size: 0.8rem;
    a {
      color: black;
    }
  }

  @media screen and (max-width: 1024px) {
    position: static;
  }
`;

export const Submit = styled.button<{ disabled: boolean }>`
  width: 50%;
  height: 50px;
  margin-top: 1rem;
  ${({ disabled }) => (disabled ? STYLE.DISABLED_BUTTON : STYLE.BUTTON)};

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;
