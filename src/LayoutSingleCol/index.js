import breakPoints from "../Theme/base_v1/breakpoints";

const Layout = ({ children }) => (
  <div className="layout-single-col">
    {children}
    <style jsx>{`
      .layout-single-col {
        padding: 0 1rem;
        width: 100%;
      }
      @media screen and (min-width: ${breakPoints.medium}) {
        .layout-single-col {
          max-width: 45rem;
          margin: auto;
        }
      }
      @media screen and (min-width: ${breakPoints.large}) {
        .layout-single-col {
          max-width: 60rem;
        }
      }
    `}</style>
  </div>
);

export default Layout;
