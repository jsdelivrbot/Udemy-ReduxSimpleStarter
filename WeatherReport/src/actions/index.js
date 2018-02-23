import axios from 'axios'

const API_KEY = '7ceffc68ea65160544651a438c7762a6'
const URL = `https://api.openweathermap.org/data/2.5/forecast/?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  // hard code country code to USA
  const url = `${URL}&q=${city},us`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
