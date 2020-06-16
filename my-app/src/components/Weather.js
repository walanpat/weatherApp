import React from 'react';

const Weather = (props) => (
  <div className='weatherinfo'>
    {props.city && props.country && (
      <p className='weather_location'>
        {' '}
        Location:
        <span className='weather__value'>
          {' '}
          {props.city}, {props.country}{' '}
        </span>
      </p>
    )}
    {props.date && (
      <p className='weather_date'>
        {' '}
        <span className='weather__value'> {props.date}</span>
      </p>
    )}
    {props.temperature && (
      <p className='weather_temp'>
        {' '}
        Temperature:
        <span className='weather__value'> {props.temperature}</span>
      </p>
    )}

    {props.temphigh && (
      <p className='weather_temphigh'>
        {' '}
        Temp High:
        <span className='weather__value'> {props.temphigh}</span>
      </p>
    )}

    {props.templow && (
      <p className='weather_templow'>
        {' '}
        Temp Low:
        <span className='weather__value'> {props.templow}</span>
      </p>
    )}

    {props.humidity && (
      <p className='weather_humidity'>
        {' '}
        Humidity:
        <span className='weather__value'> {props.humidity} </span>
      </p>
    )}

    {props.description && (
      <p className='weather_description'>
        {' '}
        Conditions:
        <span className='weather__value'> {props.description} </span>
      </p>
    )}
	
    {props.error && <p className='weather_error'>{props.error}</p>}
  </div>
);

export default Weather;
