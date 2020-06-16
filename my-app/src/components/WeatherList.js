import React from 'react';
import Weather from './Weather';
import moment from 'moment';
const WeatherList = (props) => {
  const { data } = props;
  let i = 0;
  let z = '';
  let todaysDate = '';

  if (data && data.list.length) {
    // console.log(data.list);
    todaysDate = moment(data.list[0].dt_txt.slice(0, 10), 'YYYY-MM-DD');
    console.log('1 ' + todaysDate.toString());
    console.log('2 ' + todaysDate.add(1, 'day'));
    console.log('3 ' + todaysDate.toString());

    //so I need to wrap each thing of the date
    //in such a way that I can manipulate it into it's own container
    //So how do I want to do that?
    //Well we should try to return a div based on if it is the last element in the array....
    //Interesting.  Well then I need to override the tomfoolery for the
    //"beginning" div, so what does this mean?
    // This means that in order to successfully wrap the "column 1" we have to use the iterator or check the date, it may just be easier to use an iterator at ths point.
    return data.list.map((element, i) => {
      //if todays date
      // <div>
      if (todaysDate._i === element.dt_txt.slice(0, 10)) {
        return (
          <div className='column0'>
            <Weather
              date={todaysDate.toString()}
              temperature={element.main.temp}
              temphigh={element.main.temp_max}
              templow={element.main.temp_min}
              humidity={element.humidity}
              city={data.city.name}
              country={data.city.country}
              humidity={element.main.humidity}
              description={element.weather[0].description}
              error={element.error}
            />

            <br />
          </div>
        );
      }
      //</div>
      //
      //if 1 day after today
      if (
        todaysDate.clone().add(1, 'day').toString() ===
        moment(element.dt_txt.slice(0, 10)).toString()
      ) {
        return (
          <div className='column1'>
            <Weather
              date={todaysDate.clone().add(1, 'day').toString()}
              temperature={element.main.temp}
              temphigh={element.main.temp_max}
              templow={element.main.temp_min}
              humidity={element.humidity}
              city={data.city.name}
              country={data.city.country}
              humidity={element.main.humidity}
              description={element.weather[0].description}
              error={element.error}
            />
            <br />
          </div>
        );
      } //if 2 days after today
      if (
        todaysDate.clone().add(2, 'day').toString() ===
        moment(element.dt_txt.slice(0, 10)).toString()
      ) {
        return (
          <div className='column2'>
            <Weather
              date={todaysDate.clone().add(2, 'day').toString()}
              temperature={element.main.temp}
              temphigh={element.main.temp_max}
              templow={element.main.temp_min}
              humidity={element.humidity}
              city={data.city.name}
              country={data.city.country}
              humidity={element.main.humidity}
              description={element.weather[0].description}
              error={element.error}
            />
            <br />
          </div>
        );
      } //if 3 days after today
      if (
        todaysDate.clone().add(3, 'day').toString() ===
        moment(element.dt_txt.slice(0, 10)).toString()
      ) {
        return (
          <div className='column3'>
            <Weather
              date={todaysDate.clone().add(3, 'day').toString()}
              temperature={element.main.temp}
              temphigh={element.main.temp_max}
              templow={element.main.temp_min}
              humidity={element.humidity}
              city={data.city.name}
              country={data.city.country}
              humidity={element.main.humidity}
              description={element.weather[0].description}
              error={element.error}
            />
            <br />
          </div>
        );
      } //if 4 days after today
      if (
        todaysDate.clone().add(4, 'day').toString() ===
        moment(element.dt_txt.slice(0, 10)).toString()
      ) {
        return (
          <div className='column4'>
            <Weather
              date={todaysDate.clone().add(4, 'day').toString()}
              temperature={element.main.temp}
              temphigh={element.main.temp_max}
              templow={element.main.temp_min}
              humidity={element.humidity}
              city={data.city.name}
              country={data.city.country}
              humidity={element.main.humidity}
              description={element.weather[0].description}
              error={element.error}
            />
            <br />
          </div>
        );
      }
    });
  }
  return z;
};
export default WeatherList;
