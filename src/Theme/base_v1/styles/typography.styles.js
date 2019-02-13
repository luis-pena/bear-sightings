import css from "styled-jsx/css";
import colors from "./colors";

export default css.global`
  body {
    font-family: "Gibson";
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    color: ${colors.gray};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${colors.black};
  }

  a {
    text-decoration: none;
  }
`;
