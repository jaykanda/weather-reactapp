import React from 'react';
import { shallow, mount, render } from 'enzyme'
import * as WEATHER from '../data/weather-report';

import App from '../App';
import CityDropDown from '../component/citydropdown';
import Weatherdashboards from '../component/weatherDashboard';


const cityList = ['Bengaluru','Hyderabad'];
describe("WEATHER REPORT TEST SUITE", () => {
  it("APP component is loading properly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-title').html()).toMatch('Weather report dashboard');
    expect(wrapper).toMatchSnapshot();  
  });
  it("City dropdown component is loading properly", () => {
    const wrapper = shallow(<CityDropDown cityList={[]} />);
    wrapper.find('.cityItem').forEach((node, i) => {
      expect(node.text()).toEqual(cityList[i]);       
    });
    expect(wrapper).toMatchSnapshot();
  });
  it("Weather report component is loading properly", () => {
    const a = WEATHER;
    const expectItems = ['weather','clouds','wind','snow'];
    const wrapper = shallow(<Weatherdashboards reqCity={cityList[0]}/>);
    wrapper.find('.forecastType').forEach((node) => {
      expect(node.text().toLowerCase().indexOf(expectItems)).toBeGreaterThanOrEqual(-1);      
    });
    expect(wrapper).toMatchSnapshot();
  });
});

