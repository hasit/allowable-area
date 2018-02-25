import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';

class InputFormPD extends Component {
  state = {
    projectName: this.props.values.projectName,
    location: this.props.values.location,
    architect: this.props.values.architect,
    ahj: this.props.values.ahj,
    previousPermittedCode: this.props.values.previousPermittedCode,
    currentPermittedCode: this.props.values.currentPermittedCode,
  };

  handleSubmit = () => {
    this.props.onUpdatePD ({
      projectName: this.state.projectName,
      location: this.state.location,
      architect: this.state.architect,
      ahj: this.state.ahj,
      previousPermittedCode: this.state.previousPermittedCode,
      currentPermittedCode: this.state.currentPermittedCode,
    });
  };

  handleChange = (e, {name, value}) => {
    this.setState ({[name]: value});
  };

  render () {
    const {
      projectName,
      location,
      architect,
      ahj,
      previousPermittedCode,
      currentPermittedCode,
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          label="Project Name:"
          name="projectName"
          value={projectName}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Location:"
          name="location"
          value={location}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Architect:"
          name="architect"
          value={architect}
          onChange={this.handleChange}
        />
        <Form.Input
          label="AHJ:"
          name="ahj"
          value={ahj}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Previous Permitted Code:"
          name="previousPermittedCode"
          value={previousPermittedCode}
          onChange={this.handleChange}
        />
        <Form.Input
          label="Current Applicable Code:"
          name="currentPermittedCode"
          value={currentPermittedCode}
          onChange={this.handleChange}
        />
        <Form.Button content="Update Project Description" />
      </Form>
    );
  }
}

export default InputFormPD;
