// const fullName = 'Beyza Doğan';
// const age = '25';
// const myBtn = document.querySelector('#myBtn');
// const myTodos = document.querySelector('#myTodos');
// let todoId = 0;
// if(localStorage.lastTodoId) {
//     todoId = Number(localStorage.lastTodoId);
// }
// function generateTodoId() {
//     todoId++;
//     localStorage.lastTodoId = todoId
//     return todoId;
// }
// let todos = [
//     {
//         id: 0,
//         task: 'Yapılacak iş',
//         complete: false
//     },
//     {
//         id:1,
//         task: 'Baska Yapilacak İs',
//         complete: false
//     }
// ];
//     // "Yarın için ödev düşün",
//     // "Diğer günler için de düşün",
//     // "Hep ödev düşün"
//     const mytBtn = document.querySelector('#myTodos');
//     if(localStorage.todos) {
//         todos = JSON.parse(localStorage.todos)
//     };
//     // for (const todo of todos) {
//     //     myTodos.innerHTML += `<li class= "todoItem">${todo}</li>`
//     // }
//     for ( let i = 0; i<todos.length; i++) {
//         const currTodo =todo[i];
//         myTodos.innerHTML += `<li data-id ="${currTodo.id}"class ="todoItem">${currTodo.task}</li>

//     }
//  myBtn.addEventListener('click', addTodo)
//  function addTodo() {
//     let addList = prompt('Ne eklemek istersiniz?');
//     todos.push
//    myTodos.innerHTML += `<li data-id="${todoId} class="todoItem">${newTodo}</li>`;  
//    saveTodos();
//    bindClickEventss();
// }
// function saveTodos() {
//     localStorage.todos =JSON.stringify(todos);
// }

// function bindClickEventss() {
//     const todoItems = document.querySelectorAll('.todoItem');
//     for (const todoItem of todoItems) {
//         todoItem.addEventListener('click', sayMyName)
//     }
// }
// bindClickEventss();
// function sayMyName() {
//     alert(this.innerText);

// }
// let todoItems = document.querySelectorAll('.todoItem');
// for (const todoItem of todoItems) {
//     todoItem.addEventListener('dblclick', changeMe)
// }

// function changeMe() {
//     let change = prompt('Bu maddede değiştirmek istediğiniz şeyi girin:',  this.innerText)
//     this.innerText = change
//     const todoIndex = Number(this.data.index);
//     todos[todoIndex] = change;
//     saveTodos();

// };

// const myBtn = document.querySelect('#myBtn');
// // myBtn.addEventListener('click', btnOnClick);
// // myBtn.removeEventListener('click', btnOnClick);
// function btnOnClick() {
//     let newBtnName = prompt('yeni buton ismi?');
//     this.innerText = newBtnName;
//     // this tıklanan elementin kendisini verir
// }

// const myTodos = document.querySelector('#myTodos');

// let todoId = 0;
// if(localStorage.lastTodoId) {
//     todoId = Number(localStorage.lastTodoId);
// }

// function generateTodoId() {
//     todoId += 1;
//     localStorage.lastTodoId = todoId;
//     return todoId;
// }

// let todos = [];

// // if(typeof localStorage.todos !== 'undefined') {
// if(localStorage.todos) {
//     todos = JSON.parse(localStorage.todos);
// }

// for (let i = 0; i < todos.length; i++) {
//     const currTodo = todos[i];
//     myTodos.innerHTML += `<li data-id="${currTodo.id}" class="todoItem">${currTodo.task}</li>`;
// }

// myBtn.addEventListener('click', addTodo);
// function addTodo() {
//     let newTodo = prompt('Yeni eklenecek todo');
//     const todoId = generateTodoId();
//     todos.push({
//         id: todoId,
//         task: newTodo,
//         complete: false
//     });

//     myTodos.innerHTML += `<li data-id="${todoId}" class="todoItem">${newTodo}</li>`;

//     saveTodos();
//     bindClickEvents();
// }

// function saveTodos() {
//     localStorage.todos = JSON.stringify(todos);
// }

// function bindClickEvents() {
//     // eğer class ise başına . ekliyoruz
//     const todoItems = document.querySelectorAll('.todoItem');
//     // querySelectorAll her zaman dizi döner
//     // dizi içinde element özellikleri yoktur. her bir elemente ayrı ayrı atama yapmak gerekir.

//     for (const todoItem of todoItems) {
//         todoItem.addEventListener('dblclick', changeTodo);
//     }
// }

// bindClickEvents();

// function changeTodo() {
//     let newTodo = prompt('Güncellenecek todo', this.innerText);
//     this.innerText = newTodo;
//     const todoId = Number(this.dataset.id);
//     todos[todoIndex] = newTodo;
//     saveTodos();
// };



// let todos = [];

// function addTodo(id, task) {
//     todos.push(
//         {
//             id: id,
//             task: task,
//             complete: false
//         }
//     )
// };

// addTodo(1, 'Konuları karıştırmadan anlat');
// addTodo(2, 'sonra güncelleriz');

// function findTodo(id) {
//     for (const todo of todos) {
//         if(todo.id === id) {
//             return todo;
//         }
//     }
// }
// function updateTodo(id, newTask);