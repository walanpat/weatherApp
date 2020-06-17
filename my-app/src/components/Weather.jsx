// eslint-disable react/destructuring-assignment
// eslint-disable no-unused-vars
// eslint linebreak-style: ["error", "windows"]
import React, { useEffect, useState } from 'react';
import {
  CloudDrizzle, CloudRain, Sun, Cloud,
} from 'react-feather';
import PropTypes from 'prop-types';

const Weather = (props) => {

  const [property, setProperty] = useState({
    city: props.city,
    country: props.country,
    date: props.date,
    temp: props.temperature,
    description: props.description,
    temphigh: props.temphigh,
    templow: props.templow,
    humidity: props.humidity,
  });
  if (props) {
    // const add = (x, y) => {
    //   const newThing = thing;
    //   newThing.x = x + y;
    //   setThing(newThing);
    // };

    // useEffect(() => {
    // }, []);

    return (
      <div className="weatherinfo">
        {property.city && property.country && (
          <p className="weather_location">
            {' '}
            Location:
            <span className="weather__value">
              {' '}
              {property.city}
              ,
              {property.country}
              {' '}
            </span>
          </p>
        )}
        {property.date && (
          <p className="weather_date">
            {' '}
            <span className="weather__value">
              {' '}
              {property.date}
            </span>
          </p>
        )}
        {property.description.toString() === 'light rain' && (
          <div className="icon">
            <CloudDrizzle />
          </div>
        )}
        {property.description.toString() === 'moderate rain' && (
          <div className="icon">
            <CloudRain />
          </div>
        )}

        {property.description.toString() === 'overcast clouds' && (
          <div className="icon">
            <Cloud />
          </div>
        )}

        {property.description.toString() === 'broken clouds' && (
          <div className="icon">
            <Cloud />
          </div>
        )}

        {property.description.toString() === 'scattered clouds' && (
          <div className="icon">
            <Cloud />
          </div>
        )}

        {property.description.toString() === 'few clouds' && (
          <div className="icon">
            <Cloud />
          </div>
        )}

        {property.description.toString() === 'clear sky' && (
          <div className="icon">
            <Sun />
          </div>
        )}

        {property.temperature && (
          <p className="weather_temp">
            {' '}
            Temperature:
            <span className="weather__value">
              {' '}
              {property.temperature}
            </span>
          </p>
        )}

        {property.temphigh && (
          <p className="weather_temphigh">
            {' '}
            Temp High:
            <span className="weather__value">
              {' '}
              {property.temphigh}
            </span>
          </p>
        )}

        {property.templow && (
          <p className="weather_templow">
            {' '}
            Temp Low:
            <span className="weather__value">
              {' '}
              {property.templow}
            </span>
          </p>
        )}

        {property.humidity && (
          <p className="weather_humidity">
            {' '}
            Humidity:
            <span className="weather__value">
              {' '}
              {property.humidity}
              {' '}
            </span>
          </p>
        )}

        {property.description && (
          <p className="weather_description">
            {' '}
            Conditions:
            <span className="weather__value">
              {' '}
              {property.description}
              {' '}
            </span>
          </p>
        )}

        {property.error && <p className="weather_error">{property.error}</p>}
      </div>
    );
  }
  return '';
};

export default Weather;
Weather.propTypes = {
  city: PropTypes.string,
  country: PropTypes.string,
  date: PropTypes.string,
  temp: PropTypes.string,
  description: PropTypes.string,
  temphigh: PropTypes.string,
  templow: PropTypes.string,
  humidity: PropTypes.string,
};

Weather.defaultProps = {
  city: PropTypes.string,
  country: PropTypes.string,
  date: PropTypes.string,
  temp: PropTypes.string,
  description: PropTypes.string,
  temphigh: PropTypes.string,
  templow: PropTypes.string,
  humidity: PropTypes.string,
};
