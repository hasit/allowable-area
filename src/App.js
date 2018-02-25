import React, {Component} from 'react';
import {Container, Divider} from 'semantic-ui-react';

import Heading from './components/heading';
import ProjectInfo from './components/projectInfo';
import OutputTables from './components/outputTables';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
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
  };

  handleUpdatePD = data => {
    this.setState ({pd: data});
  };

  handleUpdatePR = data => {
    this.setState ({pr: data});
  };

  handleUpdateFI = data => {
    this.setState ({fi: data});
  };

  render () {
    return (
      <Container style={{marginTop: '1em', marginBottom: '1em'}}>
        <Heading />
        <Divider className="noprint" />
        <ProjectInfo
          onUpdatePD={this.handleUpdatePD}
          onUpdatePR={this.handleUpdatePR}
          onUpdateFI={this.handleUpdateFI}
        />
        <OutputTables pr={this.state.pr} fi={this.state.fi} />
      </Container>
    );
  }
}

export default App;
