const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");
const button = button.getElementById("button");

const todos = JSON.parse(localStorage.getItem("todos"));

//add edit button
if(li){
button.addEventLitener("click", function(event){
    ul.addEventLitner("click", function(event){

})
})
}

//Show todo list
if(todos){
    todos.forEach(todo => {
        add(todo);
    })
}

//prevent page updates
form.addEventListener("submit", function(event){
    event.preventDefault();
    add();
})

function add(todo){
    let todoText = input.value;

if(todo){
    todoText = todo.text;
}

    //make list
    if(todoText){
        const li = document.createElement("li");
        li.innerText = todoText;
        li.classList.add("list-group-item");

        if(todo && todo.completed){
            li.classList.add("text-decoration-line-through");
        }

        //remove list
        li.addEventListener("contextmenu", function(event){
            event.preventDefault();
            li.remove();
            saveData();
        })

        //cross out
        li.addEventListener("click", function(){
            li.classList.toggle("text-decoration-line-through");
            saveData();
        })

        ul.appendChild(li);
        input.value = "";
        saveData();
    }
}

//make savedata
function saveData(){
    const lists = document.querySelectorAll("li");
    let todos = [];

    //make 2 elements
    lists.forEach(list => {
        let todo = {
            text: list.innerText,
            completed: list.classList.contains("text-decoration-line-through")
        };
        todos.push(todo);
    })

    //save data
    localStorage.setItem("todos", JSON.stringify(todos));
}