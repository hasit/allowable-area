import React, {Component} from 'react';
import {Label, Modal, Grid, Segment, List} from 'semantic-ui-react';

import InputFormPD from './inputFormPD';
import InputFormPR from './inputFormPR';
import InputFormFI from './inputFormFI';

class ProjectInfo extends Component {
  state = {
    pd: {
      projectName: '',
      location: '',
      architect: '',
      ahj: '',
      previousPermittedCode: '',
      currentPermittedCode: '',
    },
    pr: {
      occupancyGroups: [],
      occupancyGroupsString: '',
      storiesAboveGrade: '',
      height: '',
      sprinklers: '',
      sprinklersString: '',
      floorAreaOfLargestStory: '',
    },
    fi: {
      widthOfOpenSpace: '30',
      portionOfBuildingPerimeterFrontingOpenSpace: '1.00',
      frontageFactor: '0.75',
    },
    pdModalOpen: false,
    prModalOpen: false,
    fiModalOpen: false,
  };

  handlePDModalOpen = name => {
    this.setState ({pdModalOpen: true});
  };

  handlePDModalClose = () => {
    this.setState ({pdModalOpen: false});
  };

  handlePRModalOpen = name => {
    this.setState ({prModalOpen: true});
  };

  handlePRModalClose = () => {
    this.setState ({prModalOpen: false});
  };

  handleFIModalOpen = name => {
    this.setState ({fiModalOpen: true});
  };

  handleFIModalClose = () => {
    this.setState ({fiModalOpen: false});
  };

  handleUpdatePD = data => {
    this.setState ({pd: data, pdModalOpen: false});
    this.props.onUpdatePD (data);
  };

  handleUpdatePR = data => {
    this.setState ({pr: data, prModalOpen: false});
    this.props.onUpdatePR (data);
  };

  handleUpdateFI = data => {
    let ff =
      (data.portionOfBuildingPerimeterFrontingOpenSpace - 0.25) *
      (data.widthOfOpenSpace / 30);
    data.frontageFactor = this.precisionRound (ff, 4);
    console.log (data);
    this.setState ({fi: data, fiModalOpen: false});
    this.props.onUpdateFI (data);
  };

  precisionRound = (number, precision) => {
    let factor = Math.pow (10, precision);
    return Math.round (number * factor) / factor;
  };

  render () {
    return (
      <Grid columns="equal" stackable>
        <Grid.Column>
          <Segment clearing>
            <Modal
              trigger={
                <Label
                  attached="top"
                  size="large"
                  style={{cursor: 'pointer'}}
                  onClick={this.handlePDModalOpen}
                >
                  Project Details
                </Label>
              }
              closeIcon
              closeOnRootNodeClick
              closeOnEscape
              open={this.state.pdModalOpen}
              onClose={this.handlePDModalClose}
            >
              <Modal.Header>Update Project Details</Modal.Header>
              <Modal.Content>
                <InputFormPD
                  onUpdatePD={this.handleUpdatePD}
                  values={this.state.pd}
                />
              </Modal.Content>
            </Modal>
            <List>
              <List.Item>
                <b>Name: </b>
                {this.state.pd.projectName}
              </List.Item>
              <List.Item>
                <b>Location: </b>
                {this.state.pd.location}
              </List.Item>
              <List.Item>
                <b>Architect: </b>
                {this.state.pd.architect}
              </List.Item>
              <List.Item>
                <b>AHJ: </b>
                {this.state.pd.ahj}
              </List.Item>
              <List.Item>
                <b>Previous Permitted Code: </b>
                {this.state.pd.previousPermittedCode}
              </List.Item>
              <List.Item>
                <b>Current Permitted Code: </b>
                {this.state.pd.currentPermittedCode}
              </List.Item>
            </List>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Modal
              trigger={
                <Label
                  attached="top"
                  size="large"
                  style={{cursor: 'pointer'}}
                  onClick={this.handlePRModalOpen}
                >
                  Project Requirements
                </Label>
              }
              closeIcon
              closeOnRootNodeClick
              closeOnEscape
              open={this.state.prModalOpen}
              onClose={this.handlePRModalClose}
            >
              <Modal.Header>Update Project Details</Modal.Header>
              <Modal.Content>
                <InputFormPR
                  onUpdatePR={this.handleUpdatePR}
                  values={this.state.pr}
                />
              </Modal.Content>
            </Modal>
            <List>
              <List.Item>
                <b>Occupancy Groups: </b>
                {this.state.pr.occupancyGroupsString}
              </List.Item>
              <List.Item>
                <b>Stories Above Grade: </b>
                {this.state.pr.storiesAboveGrade}
              </List.Item>
              <List.Item>
                <b>Height: </b>
                {this.state.pr.height} ft.
              </List.Item>
              <List.Item>
                <b>Sprinklers: </b>
                {this.state.pr.sprinklersString}
              </List.Item>
              <List.Item>
                <b>Floor Area of Largest Story: </b>
                {this.state.pr.floorAreaOfLargestStory} ft.<sup>2</sup>
              </List.Item>
            </List>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <Modal
              trigger={
                <Label
                  attached="top"
                  size="large"
                  style={{cursor: 'pointer'}}
                  onClick={this.handleFIModalOpen}
                >
                  Frontage Increase
                </Label>
              }
              closeIcon
              closeOnRootNodeClick
              closeOnEscape
              open={this.state.fiModalOpen}
              onClose={this.handleFIModalClose}
            >
              <Modal.Header>Update Frontage Increase</Modal.Header>
              <Modal.Content>
                <InputFormFI
                  onUpdateFI={this.handleUpdateFI}
                  values={this.state.fi}
                />
              </Modal.Content>
            </Modal>
            <List>
              <List.Item>
                <b>Width of Open Space (W): </b>
                {this.state.fi.widthOfOpenSpace} ft.
              </List.Item>
              <List.Item>
                <b>Portion of Building Perimeter Fronting Open Space (F/P): </b>
                {this.state.fi.portionOfBuildingPerimeterFrontingOpenSpace}
              </List.Item>
              <List.Item>
                <b>Frontage Factor (I<sub>f</sub>): </b>
                {this.state.fi.frontageFactor}
              </List.Item>
            </List>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default ProjectInfo;
