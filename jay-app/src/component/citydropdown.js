import React, { Component } from 'react';

class CityDropDown extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedDropdown : 'Bengaluru',
        cityList : []
      }
      this.dropdown = this.dropdown.bind(this);
    }
    dropdown(event) {
      this.setState({selectedDropdown : event.target.value});
      this.props.changeCity(event.target.value);
    }
    render() {
      return (
        <div className="leftContent">
        <form>          
        <label>Please select your city</label>
        <select onChange={this.dropdown}>
          { 
            this.props.cityList.map(function(element) {
              return <option className='cityItem' value={element.name} key={element.id}>{element.name}</option>;
            }, this)
        }
        </select>
        <div className="selectedCity">
          Weather forecast for <h5>{this.state.selectedDropdown}</h5>
        </div>
        </form>        
        </div>
      )
    }
  }

  export default CityDropDown;