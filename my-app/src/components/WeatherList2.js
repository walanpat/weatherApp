import React from 'react';
import Weather from './Weather';

class WeatherList extends React.Component {
  state = {
    temperature: [],
    temphigh: [],
    templow: [],
    city: undefined,
    country: undefined,
    humidity: [],
    description: [],
    error: undefined,
  };

    //Initial storing of what these multiple arrays are
  store = (data) => {
    if (data) {
      if (data.data !== undefined) {
      }
    }
    if (data.data !== undefined) {
      this.setState({
        temperature: data.data.list.map((e) => e.main.temp),
        temphigh: data.data.list.map((e) => e.main.temp_max),
        templow: data.data.list.map((e) => e.main.temp_min),
        city: data.city.name,
        country: data.city.country,
        humidity: data.data.list.map((e) => e.main.humidity),
        description: data.data.list.weater.description,
        error: undefined,
      });
    }
  };


createWeatherList= () =>{
    for(let i = 0; i<39;i++){
        <Weather 
        temperature={this.state.temperature[i]} 
        temphigh={this.state.temphigh[i]}
        templow={this.state.templow[i]}
        humidity={this.state.humidity[i]}
        city={this.state.city}
        country={this.state.country}
        description={this.state.description[i]}
        error={this.state.error}
      />
    }
}
//if(this.data.data.weather[0].main==="Rain")
//if(this.data.data.weather[0].main==="Rain")
//if(this.data.data.weather[0].main==="Clear")
//if(this.data.data.weather[0].main==="Clouds")

render() {
        return (<div>
        {this.state.city}
        {this.state.country}
        {this.state.temp.map((temp,index =>(
            <p key ={index}>Avg Temp: {temp}</p>
        )))}
         {this.state.temphigh.map((temp,index =>(
            <p key ={index}>Avg Temp: {temp}</p>
        )))}
         {this.state.templow.map((temp,index =>(
            <p key ={index}>Avg Temp: {temp}</p>
        )))}
         {this.state.humidity.map((humidity,index =>(
            <p key ={index}>Avg Temp: {humidity}</p>
        )))}
         {this.state.description.map((description,index =>(
            <p key ={index}>Avg Temp: {description}</p>
        )))}
        </div>);
    };
}
  

export default WeatherList;
