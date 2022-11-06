const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");
const nothing = document.querySelector("#todo-list .nothing");

const TODOS_KEY = "todos"

// paintTodo가 호출 될 때마다 배열에 넣기(push)
let todos = [];

// todos array의 내용을 localstorage에 넣는 것뿐
function saveTodo() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
    // 우리가 삭제하고 싶은 li
    const li = event.target.parentElement;
    li.remove();
    // 배열에서 클릭한 li 삭제하고 새 배열
    // li.id는 string값이라 비교를 위해서는 number로 바꿔줘야함
    todos = todos.filter((item) => item.id !== parseInt(li.id));
    saveTodo();
}

function paintTodo(todo) {
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span); // li>span을 넣어줌.
    li.appendChild(button);
    todoList.appendChild(li);
}

function todoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value; // newTodo에 todoInput.value 복사
    todoInput.value = ""; // 그후 todoInput.value 값을 변화해도 newTodo에는 아무런 영향을 주지 않는다.
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    //로컬 스토리지에 들어갈때는 배열에 이미 push된 상태여야 함.
    saveTodo();
}

todoForm.addEventListener("submit", todoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

//console.log(savedTodos);

// if(savedTodos)랑 같음
if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
} 