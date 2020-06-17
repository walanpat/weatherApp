/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import {
  Camera, CloudDrizzle, CloudRain, Sun, Cloud,
} from 'react-feather';

const Weather = (props) => {
  const [thing, setThing] = useState({ x: 3 });
  const add = (x, y) => {
    const newThing = thing;
    newThing.x = x + y;
    setThing(newThing);
  };
  useEffect(() => {
    if (props.city === 'mexico city') {
      setThing(7);
    }
  }, []);
  return (
    <div className="weatherinfo">
      {props.city && props.country && (
        <p className="weather_location">
          {' '}
          Location:
          <span className="weather__value">
            {' '}
            {props.city}
            ,
            {props.country}
            {' '}
          </span>
        </p>
      )}
      {props.date && (
        <p className="weather_date">
          {' '}
          <span className="weather__value">
            {' '}
            {props.date}
          </span>
        </p>
      )}
      {props.description.toString() === 'light rain' && (
        <div className="icon">
          <CloudDrizzle />
        </div>
      )}
      {props.description.toString() === 'moderate rain' && (
        <div className="icon">
          <CloudRain />
        </div>
      )}

      {props.description.toString() === 'overcast clouds' && (
        <div className="icon">
          <Cloud />
        </div>
      )}

      {props.description.toString() === 'broken clouds' && (
        <div className="icon">
          <Cloud />
        </div>
      )}

      {props.description.toString() === 'scattered clouds' && (
        <div className="icon">
          <Cloud />
        </div>
      )}

      {props.description.toString() === 'few clouds' && (
        <div className="icon">
          <Cloud />
        </div>
      )}

      {props.description.toString() === 'clear sky' && (
        <div className="icon">
          <Sun />
        </div>
      )}

      {props.temperature && (
        <p className="weather_temp">
          {' '}
          Temperature:
          <span className="weather__value">
            {' '}
            {props.temperature}
          </span>
        </p>
      )}

      {props.temphigh && (
        <p className="weather_temphigh">
          {' '}
          Temp High:
          <span className="weather__value">
            {' '}
            {props.temphigh}
          </span>
        </p>
      )}

      {props.templow && (
        <p className="weather_templow">
          {' '}
          Temp Low:
          <span className="weather__value">
            {' '}
            {props.templow}
          </span>
        </p>
      )}

      {props.humidity && (
        <p className="weather_humidity">
          {' '}
          Humidity:
          <span className="weather__value">
            {' '}
            {props.humidity}
            {' '}
          </span>
        </p>
      )}

      {props.description && (
        <p className="weather_description">
          {' '}
          Conditions:
          <span className="weather__value">
            {' '}
            {props.description}
            {' '}
          </span>
        </p>
      )}

      {props.error && <p className="weather_error">{props.error}</p>}
    </div>
  );
};

export default Weather;
