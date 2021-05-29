import { ProxyState } from "../AppState.js";
import { clockService } from "../Services/ClockService.js";


export class ClockController{
  constructor(){
    this.draw()
  }
  
  draw(){
    clockService.setClock()
    document.getElementById("clock").innerText = ProxyState.time
    document.getElementById("date").innerText = ProxyState.date
  }

  change(){
    clockService.change()
  }
}