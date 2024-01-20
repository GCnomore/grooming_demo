import { css } from "styled-components";

const STYLE = {
  MAIN_BG_COLOR: "#ff964f99",
  SECONDARY_COLOR: '#00539C',
  FONT_COLOR: "#343434",
  LABEL_FONT_SIZE: "0.75rem",
  PADDING: "75px",
  BOX_SHADOW: "0px 2px 6px rgba(0, 0, 0, 0.25)",
  BUTTON: css`
    border: none;
    background-color: rgba(255, 150, 79, 0.6);
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 0.5rem 3rem;
    color: white;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: rgb(255 150 79 / 80%);
      transition: background-color 0.3s ease-in-out;
    }

    &:disabled {
      background-color: #979797;
      cursor: not-allowed;
    }
  `,
  WARN_BUTTON: css`
    background-color: #dd4141;
  `,
  DISABLED_BUTTON: css`
    border: none;
    background-color: #ccc;
    border-radius: 5px;
    padding: 0.5rem 3rem;
    color: white;
    transition: background-color 0.3s ease-in-out;
    cursor: default !important;
  `,
  INPUT: css`
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 0.25rem;
    outline: none;
    font-size: 0.85rem;

    &:focus {
      border-color: #ff964f;
      outline: 4px solid white;
      transition: 0.2s ease-in-out;
    }
  `,
  RADIO: css`
    position: relative;
    cursor: pointer;
    height: 1rem;
    width: 1rem;

  &:checked:after {
    width: 12px;
    height: 12px;
    border-radius: 15px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    background-color: #ffa500;
    content: '';
    border: 2px solid white;
  }
  `
};

export default STYLE;
