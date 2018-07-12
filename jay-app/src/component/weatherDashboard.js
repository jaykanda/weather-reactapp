import React, { Component } from 'react';
import Moment from 'moment';
import * as WEATHER from '../data/weather-report.json';

class Weatherdashboards extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter : 0,
        nxtButton: false,
        preButton: false
      }
      this.nextThreeHrs = this.nextThreeHrs.bind(this);
      this.prevThreeHrs = this.prevThreeHrs.bind(this);
    }

    nextThreeHrs() {
      this.setState((prevState) => ({
        counter: prevState.counter + 1
      }));
    }
    prevThreeHrs() {
      this.setState((prevState) =>({
        counter: prevState.counter ? prevState.counter - 1 : 0
      }));
    }
    render() {
      Moment.locale('en');
      var date = Moment().format('DD-MM-YYYY');
      return (
        <div className="weatherReport rightContent" ref="test">
          <div>
          {date} {this.props.reqCity}
          </div>
          <div className="forecast">
          <div className="forecastType">Temperature</div>
            <div>{WEATHER[this.props.reqCity].list[this.state.counter].main.temp}&nbsp;F
            <span>Min - {WEATHER[this.props.reqCity].list[this.state.counter].main.temp_min}&nbsp;F</span>
            <span>Max - {WEATHER[this.props.reqCity].list[this.state.counter].main.temp_max}&nbsp;F</span>
          </div>
        </div>
        <div className="forecast">
          <div className="forecastType">Pressure</div>
          <div>{WEATHER[this.props.reqCity].list[this.state.counter].main.pressure}</div>
        </div>
        <div className="forecast">
          <div className="forecastType">Sea Level</div>
          <div>{WEATHER[this.props.reqCity].list[this.state.counter].main.sea_level}</div>
        </div>
        <div className="forecast">
          <div className="forecastType">Ground Level</div>
          <div>{WEATHER[this.props.reqCity].list[this.state.counter].main.grnd_level}</div>
        </div>
        <div className="forecast">
          <div className="forecastType">Humidity</div>
          <div>{WEATHER[this.props.reqCity].list[this.state.counter].main.humidity}</div>
        </div>
        <div className="forecast">
          <div className="forecastType">Weather</div>
          <div>{WEATHER[this.props.reqCity].list[this.state.counter].weather[0].description}</div>
          <img src={(`../images/${WEATHER[this.props.reqCity].list[this.state.counter].weather[0].icon}.png`)} alt="Weather Update" />
        </div>
        <div className="forecast">
          <div className="forecastType">Clouds</div>
          <div>{WEATHER[this.props.reqCity].list[this.state.counter].clouds.all}</div>
        </div>
        <div className="forecast">
          <div className="forecastType">Wind</div>
          <div>Speed - {WEATHER[this.props.reqCity].list[this.state.counter].wind.speed}&nbsp;mph</div>
          <div>Direction - {WEATHER[this.props.reqCity].list[this.state.counter].wind.deg}</div>
        </div>
        <div className="forecast">
          <div className="forecastType">Snow</div>
          <div>{WEATHER[this.props.reqCity].list[this.state.counter].snow['3h']}</div>
        </div>
        <button onClick={this.prevThreeHrs} disabled={ this.state.counter === 0 }>Prev 3 Hrs</button>
        &nbsp;&nbsp;
        <button onClick={this.nextThreeHrs} disabled={ this.state.counter === 39 }>Next 3 Hrs</button>      
        </div>
      );
    }
  }

  export default Weatherdashboards;