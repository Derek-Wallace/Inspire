import { ProxyState } from "../AppState.js"



export function saveState(){
  window.localStorage.setItem('Inspire', JSON.stringify({
    user: ProxyState.user
  }))
}

export function loadState(){
  let loadedData = JSON.parse(window.localStorage.getItem('Inspire'))
  if (loadedData != null) {
    ProxyState.user = loadedData.user
  }
}