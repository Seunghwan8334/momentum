const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    // localstorage 는 string만 보관할 수 있어서 바꿔줌
    
}

function deleteToDo(event) {
    const parent = event.target.parentElement;
    parent.remove();
    console.log(parent);

    toDos = toDos.filter((toDo) => toDo.id !== parseInt(parent.id));
    saveToDos();
}

function paintToDo(newToDoObj) {
    const created_li = document.createElement("li");
    created_li.id = newToDoObj.id;
    const created_span = document.createElement("span");
    created_span.innerText = newToDoObj.text;
    created_li.appendChild(created_span);
    
    const created_button = document.createElement("button");
    created_button.innerText = "❌";
    created_li.appendChild(created_button);
    created_button.addEventListener("click",deleteToDo);

    toDoList.appendChild(created_li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newToDoObj = {
        text:newToDo,
        id:Date.now(),
    };

    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos != null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach((item) => paintToDo(item));
}
