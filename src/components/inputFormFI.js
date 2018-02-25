import React, {Component} from 'react';
import {Form, Message} from 'semantic-ui-react';

class InputFormFI extends Component {
  state = {
    widthOfOpenSpace: this.props.values.widthOfOpenSpace,
    portionOfBuildingPerimeterFrontingOpenSpace: this.props.values
      .portionOfBuildingPerimeterFrontingOpenSpace,
  };

  handleSubmit = () => {
    this.props.onUpdateFI ({
      widthOfOpenSpace: this.state.widthOfOpenSpace,
      portionOfBuildingPerimeterFrontingOpenSpace: this.state
        .portionOfBuildingPerimeterFrontingOpenSpace,
    });
  };

  handleChange = (e, {name, value}) => {
    this.setState ({[name]: value});
  };

  render () {
    const {
      widthOfOpenSpace,
      portionOfBuildingPerimeterFrontingOpenSpace,
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Width of Open Space (W)"
          name="widthOfOpenSpace"
          value={widthOfOpenSpace}
          type="number"
          step="1"
          min="20"
          max="30"
          onChange={this.handleChange}
        />
        <Message size="tiny">
          <Message.Header>
            Enter value between 20 and 30
          </Message.Header>
          <p>
            If open space is greater than 30 ft., enter max value of 30 ft.
          </p>
        </Message>
        <Form.Input
          label="Portion of Building Perimeter Fronting Open Space (F/P)"
          name="portionOfBuildingPerimeterFrontingOpenSpace"
          value={portionOfBuildingPerimeterFrontingOpenSpace}
          type="number"
          step="0.01"
          min="0.25"
          max="1"
          onChange={this.handleChange}
        />
        <Message size="tiny">
          <Message.Header>
            Enter value between 0.25 and 1.00
          </Message.Header>
          <p>
            See IBC 2018 506.3.1
          </p>
        </Message>
        <Form.Button content="Update Frontage Increase" />
      </Form>
    );
  }
}

export default InputFormFI;
