const addInp = document.querySelector('.add-input')
const addBtn = document.querySelector('.add-btn')
const todoList = document.querySelector('.todos')
const template = document.querySelector('template').content
const todoName = template.querySelector('.todo-name')

addBtn.addEventListener('click', addToDo)

function addToDo() {
  if (addInp.value != '') {
    todoName.innerText = addInp.value
    todoList.append(template.cloneNode(1))
  }
}
