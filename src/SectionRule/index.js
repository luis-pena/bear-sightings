import { miscColors } from "../Theme/base_v1/styles/colors";

const SectionRule = () => (
  <div>
    <hr />
    <hr />
    <style jsx>{`
      hr {
        border: none;
        margin 0;
      }
      hr:first-child {
        height: 1.5rem;
        background: ${miscColors.deepGreen};
      }
      hr:last-child {
        height: 6.5rem;
        background: ${miscColors.darkGreen};
      }
    `}</style>
  </div>
);

export default SectionRule;
