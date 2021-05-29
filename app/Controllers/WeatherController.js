import { ProxyState } from "../AppState.js";
import { sandboxApiService } from "../Services/SandboxApiService.js";
import { weatherService } from "../Services/WeatherService.js";

function _draw(){
  document.getElementById('weather').innerHTML = ProxyState.weather.template
}
export class WeatherController{
  constructor(){
    ProxyState.on('weather', _draw)
    ProxyState.on('weatherUnit', _draw)
    this.getWeather()
  }
  
  getWeather(){
    sandboxApiService.getWeather()
  }

  change(){
    weatherService.change()
  }
}