import { ProxyState } from "../AppState.js"


class WeatherService{
  change(){
    if (ProxyState.weatherUnit == 'F'){
      ProxyState.weather.temp = (ProxyState.weather.temp - 32) * 5/9
      ProxyState.weatherUnit = 'C'
    }
    else{
      ProxyState.weather.temp = (ProxyState.weather.temp * 9/5) + 32
      ProxyState.weatherUnit = 'F'
    }
  }
}

export const weatherService = new WeatherService()