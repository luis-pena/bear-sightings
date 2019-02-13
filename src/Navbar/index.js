import colors from "../Theme/base_v1/styles/colors";
import Layout from "../LayoutSingleCol";
import breakPoints from "../Theme/base_v1/breakpoints";

const Navbar = () => (
  <div className="nav">
    <Layout>
      <div className="nav__content">
        <img src="/static/images/dave-logotype.svg" className="logo" />
        <img src="/static/images/icon-search.svg" className="search-icon" />
      </div>
    </Layout>

    <style jsx>{`
      .nav {
        box-shadow: 0 1px 0 0 ${colors.lightGray};
        padding: 2.5rem 0 2rem;
        max-width: 40rem;
        margin: auto;
      }
      .nav__content {
        display: flex;
        justify-content: space-between;
      }
      .nav__content > * {
        max-height: 1.5rem;
      }

      @media screen and (min-width: ${breakPoints.medium}) {
        .nav__content {
          justify-content: center;
        }
        .search-icon {
          display: none;
        }
      }
    `}</style>
  </div>
);

export default Navbar;
