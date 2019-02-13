import colors from "../Theme/base_v1/styles/colors";
import { isFormValid } from "./helpers";
import Typography from "../Typography";
import formStyles from "./form.styles";

class ScoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zipCode: ""
    };
    this.baseSet = this.state;
  }

  handleInputChange = e => {
    const inputName = e.target.name;
    const newValue = e.target.value;
    this.setState({ [inputName]: newValue });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (isFormValid(this.state)) {
      console.log("form is valid :)");
    }
  };

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input
            name="zipCode"
            placeholder="Search by zip code"
            type="text"
            maxLength={5}
            value={this.state.zipCode}
            onChange={this.handleInputChange}
          />
          <style jsx>{formStyles}</style>
        </form>
        <Typography variant="caption2">Or try these: </Typography>
        <Typography variant="caption1">90019, 44646, 90026</Typography>
      </React.Fragment>
    );
  }
}

export default ScoutForm;
