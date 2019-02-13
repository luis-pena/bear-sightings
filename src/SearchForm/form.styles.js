import css from "styled-jsx/css";
import colors from "../Theme/base_v1/styles/colors";
import breakPoints from "../Theme/base_v1/breakpoints";

export default css`
  form {
    margin-bottom: 1.25rem;
  }
  input {
    padding: 1rem 2.5rem;
    width: 100%;
    border-radius: 26px;
    border: 1px solid ${colors.lightGray};
    font-size: 1.25rem;
    background-image: url("/static/images/icon-search-sm.svg");
    background-repeat: no-repeat;
    background-position: 1rem 50%;
  }

  input::placeholder {
    color: ${colors.gray};
    font-size: 1.25rem;
  }

  input:focus {
    outline: 0;
  }
  @media screen and (max-width: ${breakPoints.xsmall}) {
    input {
      padding: 1rem 2rem 1rem 2.5rem;
      background-position: 0.75rem 50%;
    }
  }
`;
