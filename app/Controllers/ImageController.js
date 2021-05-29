import { ProxyState } from "../AppState.js";
import { sandboxApiService } from "../Services/SandboxApiService.js";


function _draw(){
  document.getElementById('image').style = `background-image: url('${ProxyState.image.url}'); background-size: cover; background-position: top`
}
export class ImageController{
  constructor(){
    ProxyState.on('image', _draw)
    this.getImage()
  }
  
  
  getImage(){
    sandboxApiService.getImage()
  }
}