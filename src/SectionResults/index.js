import colors from "../Theme/base_v1/styles/colors";
import Layout from "../LayoutSingleCol";
import Typography from "../Typography";
import ResultsTable from "../ResultsTable";
const SectionResults = () => (
  <div className="results-section">
    <Layout>
      <Typography variant="heading1">Results for “90019”</Typography>
      <hr className="spacer" />
    </Layout>

    <ResultsTable />
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
