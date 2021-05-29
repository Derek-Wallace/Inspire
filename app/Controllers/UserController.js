import { ProxyState } from "../AppState.js";
import { loadState } from "../Utils/LocalStorage.js";
import { TasksController } from "./TasksController.js";

function _draw(){
  document.getElementById('start').classList.add('d-none')
  document.getElementById('weather').classList.remove('d-none')
  document.getElementById('foot').classList.remove('d-none')
  document.getElementById('welcome').classList.remove('d-none')
  document.getElementById('welcome').innerHTML = `Welcome ${ProxyState.user}`
  let tasksController = new TasksController()
  tasksController.getTasks()
}

export class UserController{
  constructor(){
    ProxyState.on('user', _draw)
    loadState()
  }

  setUser(event){
    event.preventDefault()
    let form = event.target
    ProxyState.user = form.username.value
  }

  changeUser(){
    document.getElementById('start').classList.remove('d-none')
    document.getElementById('weather').classList.add('d-none')
    document.getElementById('foot').classList.add('d-none')
    document.getElementById('welcome').classList.add('d-none')
  }
}