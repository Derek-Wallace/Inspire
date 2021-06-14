import { ProxyState } from "../AppState.js"
import { Image } from "../Models/Image.js"
import { Quote } from "../Models/Quote.js"
import { Task } from "../Models/Task.js"
import { Weather } from "../Models/Weather.js"
import { saveState } from "../Utils/LocalStorage.js"

const sandbox = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/'
})

class SandboxApiService {
  constructor(){
    ProxyState.on('user', saveState)
  }

  async getWeather() {
    let res = await sandbox.get('weather')
    res.data.main.temp = (res.data.main.temp - 273.15) * 9/5 + 32
    ProxyState.weather = new Weather(res.data)
  }

  async getQuote() {
    let res = await sandbox.get('quotes')
    ProxyState.quote = new Quote(res.data)
  }

  async getImage() {
    // let res = await sandbox.get('images')
    // ProxyState.image = new Image(res.data)
  }

  async getTasks() {
    let res = await sandbox.get(ProxyState.user + `w/todos`)
    ProxyState.tasks = res.data.map(t => new Task(t))
  }

  async addTask(formData) {
    let task = new Task(formData)
    let res = await sandbox.post(ProxyState.user + `w/todos`, task)
    ProxyState.tasks = [...ProxyState.tasks, new Task(res.data)]
  }

  async removeTask(id) {
    await sandbox.delete(ProxyState.user + `w/todos/` + id)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id != id)
  }

  async updateTask(id) {
    let task = ProxyState.tasks.find(t => t.id == id)
    if (task.completed == false){
      task.completed = true
    }else {task.completed = false}
    await sandbox.put(ProxyState.user + `w/todos/` + id, task)
    ProxyState.tasks = ProxyState.tasks
  }
}

export const sandboxApiService = new SandboxApiService()