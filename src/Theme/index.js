import reset from "./base_v1/styles/reset.styles";
import fonts from "./base_v1/styles/fonts.styles";
import typography from "./base_v1/styles/typography.styles";

export default ({ children }) => (
  <div>
    <style jsx>{reset}</style>
    <style jsx>{fonts}</style>
    <style jsx>{typography}</style>
    {children}
  </div>
);
