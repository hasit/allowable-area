import React, {Component} from 'react';
import {Header, Image} from 'semantic-ui-react';

import logo from '../logo.png';

class Heading extends Component {
  render () {
    return (
      <Header as="h2">
        <Image src={logo} centered />
        <Header.Content>
          {' '}Allowable Area Calculator
          <Header.Subheader>
            <a
              href="http://www.codeul.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}Code Unlimited
            </a>
          </Header.Subheader>
        </Header.Content>
      </Header>
    );
  }
}

export default Heading;
