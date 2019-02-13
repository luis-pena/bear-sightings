import colors from "../Theme/base_v1/styles/colors";
import formStyles from "./form.styles";
import Button from "../Button";
import { isFormValid } from "./helpers";

class ScoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfDaves: "",
      zipCode: "",
      notes: "",
      daveType: "Dave Type"
    };
    this.baseSet = this.state;
  }

  handleInputChange = e => {
    const inputName = e.target.name;
    const newValue = e.target.value;
    this.setState({ [inputName]: newValue });
  };

  clearForm = () => {
    this.setState(this.baseSet);
  };

  handleSubmit = e => {
    e.preventDefault();
    if (isFormValid(this.state)) {
      console.log("form is valid :)");
      this.clearForm();
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="numberOfDaves"
          placeholder="Number of Daves"
          type="text"
          value={this.state.numberOfDaves}
          onChange={this.handleInputChange}
        />
        <input
          name="zipCode"
          placeholder="Zip Code"
          type="text"
          maxLength="5"
          value={this.state.zipCode}
          onChange={this.handleInputChange}
        />
        <textarea
          name="notes"
          placeholder="Notes"
          value={this.state.notes}
          onChange={this.handleInputChange}
        />
        <div className="select-container">
          <select
            name="daveType"
            value={this.state.daveType}
            onChange={this.handleInputChange}
          >
            <option value="Dave Type" disabled>
              Dave Type
            </option>
            <option value="Life Saver Dave">Life Saver Dave</option>
            <option value="Racer Dave">Racer Dave</option>
            <option value="Reporter Dave">Reporter Dave</option>
            <option value="Angel Dave">Angel Dave</option>
            <option value="Psychic Dave">Psychic Dave</option>
            <option value="Server Dave">Server Dave</option>
            <option value="Support Dave">Support Dave</option>
            <option value="Buddy Dave">Buddy Dave</option>
          </select>
        </div>
        <Button disabled={!isFormValid(this.state)} type="submit">
          Submit Dave Sighting
        </Button>
        <style jsx>{formStyles}</style>
      </form>
    );
  }
}

export default ScoutForm;
