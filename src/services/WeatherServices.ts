import axios from 'axios';

export default class WeatherServices {
  static getCurrentWeather = async (cityName: string) => {
    return axios.get(
      `api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    );
  };

  static getFiveDayWeather = async (cityName: string) => {
    return axios.get(
      `api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    );
  };
}
