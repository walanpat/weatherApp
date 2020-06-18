import React, { useEffect, useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import Weather from './Weather';

const WeatherList = (props) => {
  const properties = props;

  const z = '';
  let todaysDate = '';
  console.log(props);
  if (props.data && props.data.list.length) {
    // console.log(data.list);
    // Moment data is being sent in as 'YYYY-MM-DD HH:mm:SS'
    todaysDate = moment(props.data.list[0].dt_txt.slice(0, 10), 'YYYY-MM-DD');
    // console.log(todaysDate.format('dddd MMM Do YY'));
    // console.log(property.list[0].dt_txt.slice);
    // console.log(moment(property.list[0].dt_txt.slice(0, 10)).format('dddd MMM Do YY').toString());

    // so I need to wrap each thing of the date
    // in such a way that I can manipulate it into it's own container
    // So how do I want to do that?
    // Well we should try to return a div based on if it is the last element in the array....
    // Interesting.  Well then I need to override the tomfoolery for the
    // "beginning" div, so what does this mean?
    // This means that in order to successfully wrap the "column 1" we have to use the
    // iterator or check the date, it may just be easier to use an iterator at ths point.
    return props.data.list.map((element) => {
      if (todaysDate.format('dddd MMM Do YY') === moment(element.dt_txt.slice(0, 10)).format('dddd MMM Do YY').toString()) {
        return (
          <div className="column0">
            <Weather
              date={moment(element.dt_txt, 'YYYY-MM-DD HH:mm:SS').format('dddd MMM Do hh:mm a').toString()}
              temperature={element.main.temp}
              temphigh={element.main.temp_max}
              templow={element.main.temp_min}
              humidity={element.main.humidity}
              city={properties.city.name}
              country={properties.city.country}
              description={element.weather[0].description}
              error={element.error}
            />
            <br />
          </div>
        );
      }
      // if 1 day after today
      if (todaysDate.clone().add(1, 'day').format('dddd MMM Do YY') === moment(element.dt_txt.slice(0, 10)).format('dddd MMM Do YY').toString()) {

        return (
          <div className="column1">
            <Weather
              date={moment(element.dt_txt, 'YYYY-MM-DD HH:mm:SS').format('dddd MMM Do hh:mm a').toString()}
              temperature={element.main.temp}
              temphigh={element.main.temp_max}
              templow={element.main.temp_min}
              humidity={element.main.humidity}
              city={properties.city.name}
              country={properties.city.country}
              description={element.weather[0].description}
              error={element.error}
            />
            <br />
          </div>
        );
      } // if 2 days after today
      if (todaysDate.clone().add(2, 'day').format('dddd MMM Do YY') === moment(element.dt_txt.slice(0, 10)).format('dddd MMM Do YY').toString()) {
        return (
          <div className="column2">
            <Weather
              date={moment(element.dt_txt, 'YYYY-MM-DD HH:mm:SS').format('dddd MMM Do hh:mm a').toString()}
              temperature={element.main.temp}
              temphigh={element.main.temp_max}
              templow={element.main.temp_min}
              humidity={element.main.humidity}
              city={properties.city.name}
              country={properties.city.country}
              description={element.weather[0].description}
              error={element.error}
            />
            <br />
          </div>
        );
      } // if 3 days after today
      if (todaysDate.clone().add(3, 'day').format('dddd MMM Do YY') === moment(element.dt_txt.slice(0, 10)).format('dddd MMM Do YY').toString()) {
        return (
          <div className="column3">
            <Weather
              date={moment(element.dt_txt, 'YYYY-MM-DD HH:mm:SS').format('dddd MMM Do hh:mm a').toString()}
              temperature={element.main.temp}
              temphigh={element.main.temp_max}
              templow={element.main.temp_min}
              humidity={element.main.humidity}
              city={properties.city.name}
              country={properties.city.country}
              description={element.weather[0].description}
              error={element.error}
            />
            <br />
          </div>
        );
      } // if 4 days after today
      if (todaysDate.clone().add(4, 'day').format('dddd MMM Do YY') === moment(element.dt_txt.slice(0, 10)).format('dddd MMM Do YY').toString()) {
        return (
          <div className="column4">
            <Weather
              date={moment(element.dt_txt, 'YYYY-MM-DD HH:mm:SS').format('dddd MMM Do hh:mm a').toString()}
              temperature={element.main.temp}
              temphigh={element.main.temp_max}
              templow={element.main.temp_min}
              humidity={element.main.humidity}
              city={properties.city.name}
              country={properties.city.country}
              description={element.weather[0].description}
              error={element.error}
            />
            <br />
          </div>
        );
      }
      return '';
    });
  }
  return z;
};
export default WeatherList;
WeatherList.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  date: PropTypes.string,
  temp: PropTypes.string,
  description: PropTypes.string,
  temphigh: PropTypes.string,
  templow: PropTypes.string,
  humidity: PropTypes.string,
};

WeatherList.defaultProps = {
  city: PropTypes.string,
  country: PropTypes.string,
  date: PropTypes.string,
  temp: PropTypes.string,
  description: PropTypes.string,
  temphigh: PropTypes.string,
  templow: PropTypes.string,
  humidity: PropTypes.string,
};