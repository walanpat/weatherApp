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
    //Moment data is being sent in as 'YYYY-MM-DD HH:mm:SS'
    todaysDate = moment(data.list[0].dt_txt, 'YYYY-MM-DD HH:mm:SS');
    console.log(todaysDate.format('dddd MMM Do YY'));
    console.log(data.list[0].dt_txt.slice)
    console.log(moment(data.list[0].dt_txt.slice(0, 10)).format('dddd MMM Do YY').toString())


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
      // console.log(todaysDate.toString().slice(0,10))
      // console.log(moment(element.dt_txt.slice(0, 10)).toString())
      if (todaysDate.format('dddd MMM Do YY') === moment(element.dt_txt.slice(0, 10)).format('dddd MMM Do YY').toString()) {
        console.log(todaysDate.toString())
        return (
          <div className='column0'>
            <Weather
              date={moment(element.dt_txt,'YYYY-MM-DD HH:mm:SS').format('dddd MMM Do hh:mm a').toString()}
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
      if (todaysDate.clone().add(1,'day').format('dddd MMM Do YY') === moment(element.dt_txt.slice(0, 10)).format('dddd MMM Do YY').toString()) {

        return (
          <div className='column1'>
            <Weather
              date={moment(element.dt_txt,'YYYY-MM-DD HH:mm:SS').format('dddd MMM Do hh:mm a').toString()}
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
      if (todaysDate.clone().add(2,'day').format('dddd MMM Do YY') === moment(element.dt_txt.slice(0, 10)).format('dddd MMM Do YY').toString()) {
        return (
          <div className='column2'>
            <Weather
              date={moment(element.dt_txt,'YYYY-MM-DD HH:mm:SS').format('dddd MMM Do hh:mm a').toString()}
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
      if (todaysDate.clone().add(3,'day').format('dddd MMM Do YY') === moment(element.dt_txt.slice(0, 10)).format('dddd MMM Do YY').toString()) {

        return (
          <div className='column3'>
            <Weather
              date={moment(element.dt_txt,'YYYY-MM-DD HH:mm:SS').format('dddd MMM Do hh:mm a').toString()}
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
      if (todaysDate.clone().add(4,'day').format('dddd MMM Do YY') === moment(element.dt_txt.slice(0, 10)).format('dddd MMM Do YY').toString()) {

        return (
          <div className='column4'>
            <Weather
              date={moment(element.dt_txt,'YYYY-MM-DD HH:mm:SS').format('dddd MMM Do hh:mm a').toString()}
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
