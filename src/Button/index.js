import colors from "../Theme/base_v1/styles/colors";
import classNames from "classnames";

const getButtonClassNames = (variant, size, disabled) => {
  return classNames("button", {
    primary: variant === "primary",
    secondary: variant === "secondary",
    small: size === "small",
    large: size === "large",
    "is--disabled": disabled
  });
};

const Button = ({ children, variant, size, type, disabled }) => (
  <button
    type={type}
    className={getButtonClassNames(variant, size, disabled)}
    disabled={disabled}
  >
    {children}
    <style jsx>{`
      .button {
        border: none;
        color: ${colors.white};
        font-family: "Gibson";
        font-weight: 600;
        border-radius: 6px;
        transition: background-color 0.2s ease-in-out;
      }
      .button:hover {
        cursor: pointer;
      }
      .button:focus {
        outline: 0;
      }
      .button.small {
        font-size: 1rem;
        padding: 0.5rem 2rem;
      }
      .button.large {
        padding: 1rem 1rem;
        min-width: 17rem;
        font-size: 1.25rem;
      }
      .button.primary {
        background: ${colors.green};
      }
      .button.secondary {
        background: ${colors.gray};
      }
      .button.is--disabled {
        background: ${colors.gray};
        color: ${colors.lightGray};
      }
      .button.is--disabled:hover {
        pointer-events: none;
      }
    `}</style>
  </button>
);

export default Button;

Button.defaultProps = {
  variant: "primary",
  size: "large",
  children: "Submit",
  type: "button",
  disabled: false
};
