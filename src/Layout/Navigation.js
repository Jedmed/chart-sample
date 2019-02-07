import React, { Component } from 'react';
import { observer} from 'mobx-react';
import { observable, action  } from 'mobx';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button, Select } from 'antd';

const Option = Select.Option;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px;
`;

const NavBar = styled.div``;

const Selectors = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
  min-width: 120px;
  margin: 0 10px;
`;

@observer
class Navigation extends Component {
  @action
  handleDataChange = value => {
    if (this.props.data[value] === undefined) {
      this.props.setSecondData();
    } else {
      this.props.setSecondData(this.props.data[value]);
    }
  };
  render() {
    const data = this.props.data;
    return (
      <NavigationContainer className="navigation">
        <NavBar>
          <NavLink to="/bar" activeClassName="active-chart">
            <StyledButton>Bar</StyledButton>
          </NavLink>
          <NavLink to="/line" activeClassName="active-chart">
            <StyledButton>Line</StyledButton>
          </NavLink>
          <NavLink to="/radar" activeClassName="active-chart">
            <StyledButton>Radar</StyledButton>
          </NavLink>
        </NavBar>
        <Selectors>
          <Select
            defaultValue="Select comparison"
            onChange={this.handleDataChange}
            style={{ width: 180 }}
          >
            {data.map((person, index) => (
              <Option key={person.name} value={index}>
                {person.name}
              </Option>
            ))}
            <Option key={0} value="">
              None
            </Option>
          </Select>
        </Selectors>
      </NavigationContainer>
    );
  }
}

export default Navigation;
