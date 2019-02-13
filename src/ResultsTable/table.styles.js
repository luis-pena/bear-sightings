import css from "styled-jsx/css";
import colors from "../Theme/base_v1/styles/colors";
import breakPoints from "../Theme/base_v1/breakpoints";

export default css`
  .results-table {
    width: 100vw;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: scroll;
  }

  .table__head > *,
  .table__body__row > * {
    flex: 0 0 auto;
  }

  .table__head,
  .table__body__row {
    display: flex;
  }
  .table__head > *,
  .table__body__row > * {
    min-width: 5rem;
    max-width: 10rem;
    width: 100%;
    margin-right: 3.5rem;
  }
  .table__head > *:last-child,
  .table__body__row > *:last-child {
    margin-right: 0;
    max-width: 30rem;
  }
  .table__body {
    padding: 0.5rem 0 2rem;
  }
  .table__body__row {
    position: relative;
    align-items: center;
    padding: 1.25rem 0;
  }
  .table__body__row:after {
    position: absolute;
    bottom: 0;
    content: "";
    display: block;
    height: 1px;
    background: ${colors.lightGray};
    width: 100%;
  }
`;
