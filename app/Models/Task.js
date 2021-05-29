

export class Task{
  constructor({description, id, completed}){
    this.description = description
    this.id = id
    this.completed = completed || false
  }

  get template(){
    return`
    <div class="row d-flex align-items-center mb-1 ml-1"><input class="col-1" type="checkbox" name="completed" id="${this.id}" onclick="app.tasksController.updateTask('${this.id}')"><span class="col-8">${this.description}</span><i class="col-1 mdi mdi-trash-can" role="button" onclick="app.tasksController.removeTask('${this.id}')"></i></div>
    `
  }
}