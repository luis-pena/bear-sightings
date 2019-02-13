import Layout from "../LayoutSingleCol";
import Typography from "../Typography";
import colors from "../Theme/base_v1/styles/colors";

class ResultsTable extends React.Component {
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
            <div className="table__body__row">
              <span>
                <Typography>21</Typography>
              </span>
              <span>
                <Typography variant="body2">Life Saver Dave</Typography>
              </span>
              <span>
                <Typography>
                  “Dave is truly a life saver. Reliable and convenient.”
                </Typography>
              </span>
            </div>
          </div>
        </Layout>

        <style jsx>{`
          .results-table {
            width: 100vw;
            display: flex;
            flex-wrap: nowrap;
            overflow-x: scroll;
          }

          .table__head > *,
          .table__body__row > * {
            flex: 0 0 auto;
          }

          .table__head,
          .table__body__row {
            display: flex;
          }
          .table__head > *,
          .table__body__row > * {
            min-width: 5rem;
            max-width: 10rem;
            width: 100%;
            margin-right: 3.5rem;
          }
          .table__head > *:last-child,
          .table__body__row > *:last-child {
            margin-right: 0;
            max-width: 30rem;
          }
          .table__body {
            padding: 2rem 0;
          }
          .table__body__row > * {
            margin-bottom: 1.25rem;
          }
          .table__body__row {
            position: relative;
          }
          .table__body__row:after {
            position: absolute;
            bottom: 0;
            content: "";
            display: block;
            height: 1px;
            background: ${colors.lightGray};
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}

export default ResultsTable;
