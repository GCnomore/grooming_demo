import styled from "styled-components";
import STYLE from "../../../../../style";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const CalendarContainer = styled.div`
  display: flex;
  width: 100%;

  > .appt-calendar {
    width: 100%;
    border: none;
    border-radius: 9px;
    padding: 4%;
    box-shadow: ${STYLE.BOX_SHADOW};
    font-size: 0.75rem;

    .react-calendar__viewContainer {
      background-color: rgb(242, 249, 255);
      border-radius: 21px;
      padding: 4%;
    }

    .react-calendar__tile--now {
      background: #e6e6e6;
    }

    .react-calendar__tile--active {
      background: #1087ff;
    }
  }
`;

export const TimeContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  > span {
    font-size: 1.2rem;
    font-weight: 600;
  }

  > div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: flex-start;
  }
`;

export const TimeButton = styled.button<{ isset: boolean }>`
  display:flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 5px;
  width: 140px;
  height: 42px;
  margin: 1rem 0.5rem;
  font-size: 13px;
  background-color: ${({ isset }) => (!isset ? "#e4e4e4" : STYLE.MAIN_BG_COLOR)};
  color: ${({ isset }) => (!isset ? "#000" : '#fff')};
  font-weight: ${({ isset }) => (!isset ? "" : '500')};
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${STYLE.MAIN_BG_COLOR};
    transition: 0.1s ease-in-out;
  }

  @media screen and (max-width: 480px) {
    padding: 0.5rem 0.75rem;
    width: 40%;
    height: 48px;
  }
`