import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import BarComponent from '../Charts/bar';
import LineComponent from '../Charts/line';
import RadarComponent from '../Charts/radar';

const ContentContainer = styled.div`
  padding: 0 50px;
  margin-bottom: 20px;
`;

class Content extends Component {
  render() {
    const { currentData, secondData } = this.props;
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          backgroundColor: 'rgba(0,181,204,0.2)',
          borderColor: 'rgba(0,181,204,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.6)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: currentData.performance,
        },
      ],
    };

    if (secondData.performance) {
      data.datasets.push(
        {
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: secondData.performance,
        },
        // {
        //   backgroundColor: 'rgb(34,139,34,0.2)',
        //   borderColor: 'rgb(34,139,34, 1)',
        //   pointBackgroundColor: 'rgba(0,181,204,1)',
        //   pointBorderColor: '#fff',
        //   pointHoverBackgroundColor: '#fff',
        //   pointHoverBorderColor: 'rgba(0,181,204,1)',
        //   data: [55, 56, 54, 57, 24, 71, 65],
        // }
      );
    }

    return (
      <ContentContainer className="content">
        <Provider config>
          <Switch>
            <Route exact path="/" component={() => <div>Select a Chart</div>} />
            <Route path="/bar" component={() => <BarComponent data={data} />} />
            <Route
              path="/line"
              component={() => <LineComponent data={data} />}
            />
            <Route
              path="/radar"
              component={() => <RadarComponent data={data} />}
            />
          </Switch>
        </Provider>
      </ContentContainer>
    );
  }
}

export default Content;
