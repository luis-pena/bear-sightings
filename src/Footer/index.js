import colors from "../Theme/base_v1/styles/colors";
import breakPoints from "../Theme/base_v1/breakpoints";
import Layout from "../LayoutSingleCol";
import Button from "../Button";

const Footer = () => (
  <div className="footer">
    <Layout>
      <div className="footer-content">
        <div className="footer__links">
          <a href="#">About</a>
          <a href="#">Trees</a>
          <a href="#">Careers</a>
          <a href="#">Privacy</a>
          <a href="#">Help</a>
          <a href="#">Privacy</a>
          <a href="#">TOS</a>
        </div>
        <div className="footer__social-links">
          <a href="#">
            <img src="/static/images/footer-facebook.svg" />
          </a>
          <a href="#">
            <img src="/static/images/footer-twitter.svg" />
          </a>
          <a href="#">
            <img src="/static/images/footer-instagram.svg" />
          </a>
        </div>
        <div className="footer__store-links">
          <div className="button-container">
            <Button size="small" variant="secondary">
              <div className="button-content">
                <img src="/static/images/apple-icon-sm.svg" />{" "}
                <span>Download</span>
              </div>
            </Button>
          </div>
          <div className="button-container">
            <Button size="small" variant="secondary">
              <div className="button-content">
                <img src="/static/images/android-icon-sm.svg" />
                <span>Download</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
    <style jsx>{`
      .footer {
        padding: 1rem 0 2rem;
        background: ${colors.lightGray};
      }

      .footer__links {
        max-width: 21rem;
        margin: auto auto 1.5rem;
        display: flex;
        justify-content: space-between;
      }
      .footer__links a {
        font-size: 14px;
        text-decoration: none;
        color: ${colors.gray};
      }

      .footer__social-links {
        display: flex;
        margin: auto auto 1rem;
        max-width: 7rem;
        justify-content: space-between;
        align-items: center;
      }

      .footer__store-links {
        display: flex;
        justify-content: space-around;
        margin: auto;
        max-width: 30rem;
        flex-wrap: wrap;
      }
      .button-content {
        display: flex;
        align-items: center;
      }
      .button-content img {
        margin-right: 1rem;
      }
      .button-container {
        margin-bottom: 1rem;
      }
      @media screen and (min-width: ${breakPoints.medium}) {
        .footer {
          padding: 2rem 0 1rem;
        }
        .footer-content {
          display: flex;
          width: 100%;
          justify-content: space-between;
        }
        .footer__links {
          margin-left: 0;
          width: 100%;
        }
        .footer__social-links {
          width: 100%;
          margin-right: 0;
        }
        .footer__store-links {
          display: none;
        }
      }
    `}</style>
  </div>
);

export default Footer;
