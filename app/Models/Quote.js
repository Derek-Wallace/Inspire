

export class Quote{
  constructor(data){
    this.content = data.content
    this.author = data.author
  }


  get template(){
    return `
    <h5>"${this.content}"</h5>
    <p class="author text-center"><b>-${this.author}</b><p>
    `
  }
}