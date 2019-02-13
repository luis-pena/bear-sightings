import Typography from "../Typography";
import Layout from "../LayoutSingleCol";
import colors from "../Theme/base_v1/styles/colors";
import breakPoints from "../Theme/base_v1/breakpoints";
import ScoutForm from "../ScoutForm";

const SectionScout = () => (
  <div className="scout-section">
    <Layout>
      <div className="title">
        <Typography variant="heading1">Scout a Dave</Typography>
      </div>
      <div className="body">
        <Typography>
          Daves are a rare breed, but because they are team players, they are
          often found together. Do your part and help scout new Daves.
        </Typography>
      </div>
      <div className="form">
        <ScoutForm />
      </div>
    </Layout>
    <style jsx>{`
      .scout-section {
        padding: 5rem 0 15rem;
        background-color: ${colors.tan};
        background-image: url("/static/images/literary-dave.svg");
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: 15rem;
      }
      .title {
        margin-bottom: 1rem;
        text-align: center;
      }
      .body {
        margin: auto auto 2rem;
        text-align: center;
        max-width: 30rem;
      }
      .form {
        max-width: 30rem;
        margin: auto;
      }

      @media screen and (min-width: ${breakPoints.medium}) {
        .scout-section {
          padding: 5rem 0 10rem;
          background-image: url("/static/images/buildings.svg"),
            url("/static/images/literary-dave.svg");
          background-position: calc(50% - 10rem) 100%, right bottom;
          background-size: 24rem, 23rem;
        }
        .title,
        .body {
          text-align: left;
        }
        .body,
        .form {
          margin-left: 0;
        }
      }
      @media screen and (min-width: ${breakPoints.large}) {
        .scout-section {
          padding: 6rem 0 12rem;
          background-size: 30rem, 30rem;
          background-position: calc(50% - 13rem) 100%, calc(50% + 22rem) 100%;
        }
      }
    `}</style>
  </div>
);

export default SectionScout;
