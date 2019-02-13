import colors from "../Theme/base_v1/styles/colors";
import typographyStyles from "./styles";

const Typography = ({ variant, color, children }) => {
  switch (variant) {
    case "heading1":
      return (
        <h1 className={variant}>
          {children}
          <style jsx>{typographyStyles}</style>
        </h1>
      );
    case "body2":
      return (
        <p className={variant}>
          {children}
          <style jsx>{typographyStyles}</style>
        </p>
      );
    case "caption1":
    case "caption2":
      return (
        <span className={variant}>
          {children}
          <style jsx>{typographyStyles}</style>
        </span>
      );
    default:
      return (
        <p className={variant}>
          {children}
          <style jsx>{typographyStyles}</style>
        </p>
      );
  }
};

Typography.defaultProps = {
  variant: "body"
};

export default Typography;
