import Typography from "../Typography";
import Layout from "../LayoutSingleCol";
import colors from "../Theme/base_v1/styles/colors";
import breakPoints from "../Theme/base_v1/breakpoints";
import SearchForm from "../SearchForm";

const SectionSearch = () => (
  <div className="search-section">
    <Layout>
      <div className="title">
        <Typography variant="heading1">Dave search</Typography>
      </div>
      <div className="form">
        <SearchForm />
      </div>
    </Layout>
    <style jsx>{`
      .search-section {
        padding: 5rem 0 10rem;
        background-color: ${colors.blue};
        background-image: url("/static/images/search-dave.svg");
        background-repeat: no-repeat;
        background-position: calc(50% - 4rem) 101%;
        background-size: 24rem;
      }
      .title {
        margin-bottom: 1.5rem;
        text-align: center;
      }
      .form {
        max-width: 30rem;
        margin: auto auto 1.25rem;
      }

      @media screen and (min-width: ${breakPoints.medium}) {
        .search-section {
          padding: 5rem 0 6rem;
          background-position: 90% 101%;
          background-size: 28rem;
        }
        .title {
          text-align: left;
        }
        .form {
          margin-left: 0;
        }
      }
      @media screen and (min-width: ${breakPoints.large}) {
        .search-section {
          padding: 6rem 0 8rem;
          background-size: 37rem;
          background-position: calc(50% + 17rem) 101%;
        }
      }
    `}</style>
  </div>
);

export default SectionSearch;
