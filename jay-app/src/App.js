import React, { Component } from 'react';
import CityDropDown from './component/citydropdown';
import Weatherdashboards from './component/weatherDashboard';
import './App.css';
import * as DATA from './data/city.list.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities : DATA,
      firstCity : 'Bengaluru'
    }   
    this.changeCity = (newCity) => {
      this.setState({firstCity: newCity});
    } 
  }

  render() {    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather report dashboard</h1>
        </header>
        <CityDropDown cityList={this.state.cities} changeCity={this.changeCity}></CityDropDown>
        <Weatherdashboards reqCity={this.state.firstCity}></Weatherdashboards>
      </div>

    );
  }
}

export default App;
