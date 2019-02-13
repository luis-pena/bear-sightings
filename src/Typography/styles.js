import css from "styled-jsx/css";
import colors from "../Theme/base_v1/styles/colors";
import breakPoints from "../Theme/base_v1/breakpoints";

export default css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 2rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
    color: ${colors.gray};
  }

  p.body2 {
    font-weight: 900;
    color: ${colors.black};
  }

  span {
    color: ${colors.black};
    font-size: 0.8rem;
  }

  span.caption2 {
    font-weight: 900;
  }

  @media screen and (min-width: ${breakPoints.medium}) {
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: 4.75rem;
      font-weight: 900;
    }
  }
`;
