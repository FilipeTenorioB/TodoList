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
    return li;
}

function adicionaTarefaNaLista(tarefa){
    var lista = document.querySelector("#lista-tarefas");
    lista.appendChild(montaLi(tarefa, "tarefas-lista"));
}

function criarCheckbox() {
    var check = document.createElement("INPUT");
    check.setAttribute("type", "checkbox");
    document.body.appendChild(check);
  }

  /* onclick="criarCheckbox()" no button no HTML  */

/* Remover tarefas */

var tarefa = document.querySelector("li");
tarefa.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});

/* Editar tarefas */

