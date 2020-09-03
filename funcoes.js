/* Adicionar tarefas */

var botaoAdicionar = document.querySelector("#bto-adicionartarefa");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var tarefa = document.querySelector("#local-adicionartarefa");
    var tarefaDigitada = tarefa.value;
    adicionaTarefaNaLista(tarefaDigitada);
});

function montaLi(tarefa, classe){
    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");

    var li = document.createElement("li");
    li.textContent = tarefa;
    li.classList.add(classe);
    li.innerHTML = '<input type="checkbox"><button class="bto-removertarefa">x</button>'; 
    return li;
}

function adicionaTarefaNaLista(tarefa){
    var lista = document.querySelector("#lista-tarefas");
    lista.appendChild(montaLi(tarefa, "tarefas-lista"));
}

/* Remover tarefas */

var tarefa = document.querySelector("li");
tarefa.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});

var tarefa = document.querySelector("li");
var button = document.querySelector("button");
tarefa.addEventListener("mousedown", function() {
  console.log("Handler for paragraph.");
});
button.addEventListener("mousedown", function(event) {
  console.log("Handler for button.");
  if (event.which == 3)
    event.stopPropagation();
});

/* Editar tarefas */

