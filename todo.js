// const todoBtn = document.querySelector('#todoBtn');
// const todoInput = document.querySelector('#todoInput');
// const todoList = document.querySelector('#todoList');
// // append - ekle
// function appendTodo() {
//     todoList.innerHTML += `<li>${todoInput.value}<li/>`;
//     todoInput.value = '';
// }
// todoBtn.addEventListener('click', appendTodo);
// const link = document.querySelector('#gitmeyenLink');
// link.addEventListener('click', engelle);
// function engelle(event) {
//     event.preventDe1fault(); 
//     // console.log(event.target); eveny.target tıklanan elementi verir
//     // console.log (event.target.id);
// }
const todoForm = document.querySelector('#todoForm');
todoForm.addEventListener('submit', appendTodo);
// append- ekle
function appendTodo(event) {
    event.preventDefault();
    todoList.innerHTML += `<li>${todoInput.value}</li>`;
    todoInput.value = '';

}

const clearBtn = document.querySelector('#ClearAll');
function clearTodos(event) {
    event.preventDefault();
    // prevent = engellemek - engel olmak
    // default = ön tanımlı 
    todoList.innerHTML = '';

}
    clearBtn.addEventListener("click", clearTodos);

   


