import React from 'react';
import WeatherList from './components/WeatherList';
import Titles from './components/Titles';
import Form from './components/Form';

const API_KEY = '29d02913330218981978b15e1a360c63';
//Current issues
//Need to iterate through the 40 value array of forecast data,
//Need to send it downwards into weather.js items and turn it into a true constructor (not a inheritence thing)
//Need to rework all of this set state stuff (probably) in order for the inheritence model to not be used
//Large amounts of refactoring will go into this
class App extends React.Component {
  constructor(props) {
    super(props); this.state = {
      numCount: 0,
      temperature: undefined,
      temphigh: undefined,
      templow: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
      dataArr: undefined,
    };
  }
 
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}&units=imperial`
    );
    const data = await api_call.json();
    this.setState({});
    // console.log(moment('2012-03-01','YYYY-MM-DD'))

    if (city && country) {
      this.setState({
        temperature: data.list[this.state.numCount].main.temp,
        temphigh: data.list[this.state.numCount].main.temp_max,
        templow: data.list[this.state.numCount].main.temp_min,
        city: data.city.name,
        country: data.city.country,
        humidity: data.list[this.state.numCount].main.humidity,
        description: data.list[this.state.numCount].weather.description,
        error: '',
        dataArr: data,
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter the values.',
      });
    }
  };
  render() {
    return (
      <div>
        <div className='wrapper'>
          <div className='main'>
            <div className='container'>
              <div className='row'>
                <Titles />
                <div className='weatherBox'>
                  <Form getWeather={this.getWeather} />
                  <div className='displayBox'>
                    <WeatherList data={this.state.dataArr} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
