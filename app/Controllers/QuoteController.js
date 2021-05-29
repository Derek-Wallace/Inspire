import { ProxyState } from "../AppState.js";
import { sandboxApiService } from "../Services/SandboxApiService.js";

function _draw(){
  document.getElementById('quote').innerHTML = ProxyState.quote.template
}
export class QuoteController{
  constructor(){
    ProxyState.on('quote', _draw)
    this.getQuote()
  }

  getQuote(){
    sandboxApiService.getQuote()
  }
}