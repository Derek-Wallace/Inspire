import { ProxyState } from "../AppState.js";
import { sandboxApiService } from "../Services/SandboxApiService.js";

function _draw(){
  let template = ''
  let checkedTotal = 0
  ProxyState.tasks.forEach(t => template += t.template)
  document.getElementById('tasks').innerHTML =  template
  ProxyState.tasks.forEach(t => {
    if(t.completed == true){
      document.getElementById(`${t.id}`).checked = true
      checkedTotal++
    }
  })
  document.getElementById('total').innerHTML = `${checkedTotal}/${ProxyState.tasks.length}`
}
export class TasksController{
  constructor(){
    ProxyState.on('tasks', _draw)
  }

  getTasks(){
    sandboxApiService.getTasks()
  }

  addTask(event){
    event.preventDefault()
    let form = event.target
    let formData = {
      description: form.description.value
    }
    console.log(event)
    sandboxApiService.addTask(formData)
    form.reset()
  }

  removeTask(id){
    sandboxApiService.removeTask(id)
  }

  updateTask(id){
    sandboxApiService.updateTask(id)
  }
}