function adicionaTarefaNaLista(tarefa){
    var tarefaLi = montaLi(tarefa);
    var lista = document.querySelector("#lista-tarefas");
    lista.appendChild(tarefaLi);
}

function montaLi(tarefa){
    var td = document.createElement("li");
    td.textContent = tarefa;
    return td;
}