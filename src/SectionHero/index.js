import Typography from "../Typography";
import Layout from "../LayoutSingleCol";
import colors from "../Theme/base_v1/styles/colors";
import Button from "../Button";
import breakPoints from "../Theme/base_v1/breakpoints";

const SectionHero = () => (
  <div className="hero-section">
    <Layout>
      <div className="title">
        <Typography variant="heading1">Calling all Daves</Typography>
      </div>
      <div className="body">
        <Typography>
          An epic quest to discover his inner truth led Dave to a world where he
          became "one Dave among many”. It was here where Dave found that there
          is strength in numbers. Help Dave find other Daves so that they can
          collectively fight against unjust bank fees.
        </Typography>
      </div>
      <div className="cta">
        <Button>Scout a Dave</Button>
      </div>
    </Layout>
    <style jsx>{`
      .hero-section {
        padding: 5rem 0 23rem;
        background-color: ${colors.lightBlue};
        background-image: url("/static/images/catch-dave.svg"),
          url("/static/images/clouds.svg");
        background-repeat: no-repeat, no-repeat;
        background-position: center bottom, center 70%;
        background-size: 15rem, 18rem;
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
      .cta {
        text-align: center;
      }
      @media screen and (min-width: ${breakPoints.medium}) {
        .hero-section {
          background-position: 90% bottom, 90% center;
          padding: 5rem 0;
          background-size: 17rem, 23rem;
        }
        .title,
        .body {
          text-align: left;
        }
        .body {
          margin-left: 0;
        }
        .cta {
          text-align: left;
        }
      }
      @media screen and (min-width: ${breakPoints.large}) {
        .hero-section {
          padding: 6rem 0;
          background-size: 20rem, 30rem;
          background-position: 75% bottom, 75% 30%;
        }
      }
    `}</style>
  </div>
);

export default SectionHero;
