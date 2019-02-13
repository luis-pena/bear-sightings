import css from "styled-jsx/css";
import colors from "../Theme/base_v1/styles/colors";

export default css`
  input,
  textarea,
  select {
    background: ${colors.white};
    border-radius: 6px;
    border: 1px solid ${colors.lightGray};
    padding: 1rem 1.25rem;
    font-size: 1.25rem;
    width: 100%;

    margin-bottom: 1rem;
  }

  input:focus,
  textarea:focus,
  select:focus {
    outline: 0;
  }
  textarea {
    resize: none;
  }
  input::placeholder,
  textarea::placeholder {
    color: ${colors.gray};
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding: 1rem 1.25rem;
  }
  .select-container {
    position: relative;
  }
  .select-container:before {
    position: absolute;
    content: "";
    display: block;
    width: 20px;
    height: 20px;
    top: 1.25rem;
    right: 1rem;
    pointer-events: none;
    background-image: url("/static/images/caret-down.svg");
    background-position: center;
    background-size: contain;
  }
`;
