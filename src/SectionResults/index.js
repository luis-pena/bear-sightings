import colors from "../Theme/base_v1/styles/colors";
import Layout from "../LayoutSingleCol";
import Typography from "../Typography";
import ResultsTable from "../ResultsTable";

//this should probably come in as props
const activeZip = "90019";

const SectionResults = () => (
  <div className="results-section">
    <Layout>
      <Typography variant="heading1">Results for "{activeZip}" </Typography>
      <hr className="spacer" />
    </Layout>

    <ResultsTable activeZipCode={activeZip} />
    <style jsx>{`
      .results-section {
        padding: 4rem 0;
      }
      .spacer {
        width: 4rem;
        background: ${colors.green};
        border: none;
        border-radius: 3px;
        height: 0.25rem;
      }
    `}</style>
  </div>
);

export default SectionResults;
