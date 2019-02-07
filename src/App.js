import 'antd/dist/antd.css';

import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react';

import data from './MockData';
import Header from './Layout/Header';
import Navigation from './Layout/Navigation';
import SideBar from './Layout/SideBar';
import Content from './Layout/Content';

@observer
class App extends Component {
  componentDidMount() {
    this.props.store.addData(data);
    this.props.store.setCurrentData(data[0]);
  }
  render() {
    const {
      data,
      currentData,
      secondData,
      setCurrentData,
      setSecondData,
    } = this.props.store;
    return (
      <Router>
        <div className="App">
          <Header />
          <Navigation data={data} setSecondData={setSecondData} />
          <SideBar
            data={data}
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
          <Content currentData={currentData} secondData={secondData} />
        </div>
      </Router>
    );
  }
}

export default App;
