import Layout from "../LayoutSingleCol";
import Typography from "../Typography";
import colors from "../Theme/base_v1/styles/colors";
import resultsMock from "../SectionResults/__mocks__/resultsMock";
import tableStyles from "./table.styles";

class ResultsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = resultsMock;
  }

  renderTableRows = zipCode => {
    const daveRows = resultsMock[zipCode].map((dave, i) => {
      return (
        <div key={i} className="table__body__row">
          <span>
            <Typography>{dave.count}</Typography>
          </span>
          <span>
            <Typography variant="body2">{dave.type}</Typography>
          </span>
          <span>
            <Typography>“{dave.notes}”</Typography>
          </span>
          <style jsx>{tableStyles}</style>
        </div>
      );
    });
    return daveRows;
  };

  render() {
    return (
      <div className="results-table">
        <Layout>
          <div className="table__head">
            <span>
              <Typography variant="caption2">Dave Count</Typography>
            </span>
            <span>
              <Typography variant="caption2">Type of Dave</Typography>
            </span>
            <span>
              <Typography variant="caption2">Notes</Typography>
            </span>
          </div>
          <div className="table__body">
            {this.renderTableRows(this.props.activeZipCode)}
          </div>
        </Layout>

        <style jsx>{tableStyles}</style>
      </div>
    );
  }
}

export default ResultsTable;

ResultsTable.defaultProps = {
  activeZipCode: "90019"
};
