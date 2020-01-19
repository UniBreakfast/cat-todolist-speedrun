const todoList = document.querySelector('.todos')
const template = document.querySelector('template').content
const todoName = template.querySelector('.todo-name')
const addBtn = document.querySelector('.add-btn')
const addInp = document.querySelector('.add-input')

todoList.addEventListener('click', delToDo)
todoList.addEventListener('click', doneToDo)
addBtn.addEventListener('click', addToDo)

function addToDo() {
  if (addInp.value != '') {
    todoName.innerText = addInp.value
    todoList.append(template.cloneNode(1))
    addInp.value = ''
  }
}

function delToDo(event) {
  if (event.target.classList.contains('del-btn')) {
    event.target.closest('.todo').remove()
  }
}

function doneToDo(event) {
  if (event.target.type == 'checkbox') {
    event.target.nextElementSibling.style.textDecoration = event.target.checked?
      'line-through' : ''
  }
}