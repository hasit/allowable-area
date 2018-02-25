import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';
import {forEach, find} from 'lodash';

import {occupancyGroupsOptions, sprinklersOptions} from '../common';

class InputFormPR extends Component {
  state = {
    occupancyGroups: this.props.values.occupancyGroups,
    storiesAboveGrade: this.props.values.storiesAboveGrade,
    height: this.props.values.height,
    sprinklers: this.props.values.sprinklers,
    floorAreaOfLargestStory: this.props.values.floorAreaOfLargestStory,
  };

  updateOccupancyGroupsString = () => {
    let occupancyGroupOptionsTextList = [];

    forEach (this.state.occupancyGroups, function (group) {
      let groupObj = find (occupancyGroupsOptions, function (g) {
        return g.value === group;
      });
      occupancyGroupOptionsTextList.push (groupObj.text);
    });

    return occupancyGroupOptionsTextList.join (', ');
  };

  updateSprinklersString = () => {
    let sprinklersValue = this.state.sprinklers;
    if (sprinklersValue === '') {
      return '';
    } else {
      return find (sprinklersOptions, function (s) {
        return s.value === sprinklersValue;
      }).text;
    }
  };

  handleSubmit = () => {
    let occupancyGroupsString = this.updateOccupancyGroupsString ();
    let sprinklersString = this.updateSprinklersString ();

    this.props.onUpdatePR ({
      occupancyGroups: this.state.occupancyGroups,
      occupancyGroupsString: occupancyGroupsString,
      storiesAboveGrade: this.state.storiesAboveGrade,
      height: this.state.height,
      sprinklers: this.state.sprinklers,
      sprinklersString: sprinklersString,
      floorAreaOfLargestStory: this.state.floorAreaOfLargestStory,
    });
  };

  handleChange = (e, {name, value}) => {
    this.setState ({[name]: value});
  };

  render () {
    const {
      occupancyGroups,
      storiesAboveGrade,
      height,
      sprinklers,
      floorAreaOfLargestStory,
    } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Dropdown
          label="Occupancy Groups:"
          name="occupancyGroups"
          options={occupancyGroupsOptions}
          value={occupancyGroups}
          onChange={this.handleChange}
          multiple
          selection
        />
        <Form.Input
          label="Stories Above Grade"
          name="storiesAboveGrade"
          value={storiesAboveGrade}
          type="number"
          step="1"
          min="0"
          onChange={this.handleChange}
        />
        <Form.Input
          label="Height"
          name="height"
          value={height}
          type="number"
          step="1"
          min="0"
          onChange={this.handleChange}
        />
        <Form.Dropdown
          label="Sprinklers:"
          name="sprinklers"
          options={sprinklersOptions}
          value={sprinklers}
          onChange={this.handleChange}
          selection
        />
        <Form.Input
          label="Floor Area of Largest Story"
          name="floorAreaOfLargestStory"
          value={floorAreaOfLargestStory}
          type="number"
          step="0.01"
          min="0"
          onChange={this.handleChange}
        />
        <Form.Button content="Update Project Requirements" />
      </Form>
    );
  }
}

export default InputFormPR;
