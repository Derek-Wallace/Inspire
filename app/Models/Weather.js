import { ProxyState } from "../AppState.js"


export class Weather{
  constructor(data){
    this.name = data.name
    this.temp = data.main.temp
    this.weather = data.weather[0].main
    this.icon = data.weather[0].icon
  }


  get template(){
    return `
    <div class="row">
      <div class="col-6 p-0">
        <image src=" http://openweathermap.org/img/wn/${this.icon}@2x.png"/>
      </div>
      <div class="col-6">
        <h4>${this.temp.toFixed(0)}°${ProxyState.weatherUnit}</h4>
        <h5>${this.name}</h5>
        <p>${this.weather}</p>
      </div>
    </div>
    `
  }
}