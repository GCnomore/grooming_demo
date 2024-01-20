import styled from "styled-components";
import STYLE from "../../../style";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  input[type="text"] {
    width: 100%;
    ${STYLE.INPUT};
    margin: 0;
  }

  > div {
    width: 100%;
    text-align: center;
  }
`;

export const NameSection = styled.div`
  display: flex;

  div:first-child {
    margin-right: 2rem;

    @media screen and (max-width: 480px) {
      margin-right: 0.5rem;
    }
  }
`;

export const AddressSection = styled.div`
  > div:first-child {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
  }

  > div:nth-child(2) {
    display: flex;

    > div {
      margin-right: 2rem;

      @media screen and (max-width: 480px) {
        margin-right: 0.5rem;
      }
    }
    > div:last-child {
      margin-right: 0;
    }
  }

  > div:last-child {
    width: calc(50% - 1rem);
  }

`;

export const ContactSection = styled.div`
  margin-top: 2rem;

  > div {
    margin-top: 0.5rem;
  }
`;

export const EmergencyContactSection = styled.div`
  margin-top: 2rem;

  > div {
    margin-top: 0.5rem;
  }
`;

export const ContactMethodSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  > p {
    font-size: 1.2rem;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;

    p {
      font-size: 0.9rem;
      margin-bottom: 0;
    }

    > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    > div:first-child {
      margin-right: 3rem;
    }

    > div > input {
      ${STYLE.RADIO};
    }
  }
`;

export const PetCountContainer = styled.div`
  width: 100%;

  > div button {
    width: 10rem;
    background-color: transparent;
    font-size: 0.85rem;
    color: ${STYLE.FONT_COLOR};
    border: 1px solid ${STYLE.MAIN_BG_COLOR};
    padding: 0.25rem;
    border-radius: 5px;

    &:hover, 
    &:active, 
    &:focus, 
    &:focus-within, 
    &:focus-visible, 
    &:visited,
    &:focus {
      border: 1px solid transparent;
      background-color: ${STYLE.MAIN_BG_COLOR} !important;
      color: white;
    }
  }
`;

export const RightSection = styled.section<{imgSrc: string}>`
  width: 100%;
  height: 100%;
  background-image: url(${({imgSrc}) => imgSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover; 
`;