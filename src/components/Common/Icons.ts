import { IconProp } from '@fortawesome/fontawesome-svg-core';
import {
  faSun,
  faCloud,
  faUmbrella,
  faSnowman,
  faBolt,
  faWater,
  faExclamationCircle,
} from '@fortawesome/free-solid-svg-icons';

export default function icon(weather: string): IconProp {
  switch (weather) {
    case 'Clear':
      // return weather_imgs.sunny;
      return faSun;
    case 'Clouds':
      // return weather_imgs.cloud;
      return faCloud;
    case 'Rain':
      // return weather_imgs.rain;
      return faUmbrella;
    case 'Snow':
      // return weather_imgs.snow;
      return faSnowman;
    case 'Thunder':
      // return weather_imgs.thunder;
      return faBolt;
    case 'Mist':
      // return weather_imgs.mist;
      return faWater;
    default:
      return faExclamationCircle;
  }
}
