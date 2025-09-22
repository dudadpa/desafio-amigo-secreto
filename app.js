let amigos = [] 

function adicionarAmigo() { 
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome === "") { 
        alert("Por favor, insira um nome.");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
} 

function atualizarLista() { 
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) { 
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() { 
    if (amigos.length === 0) { 
        alert("Adicione pelo menos 1 amigo na lista!");
        return;
    }
    
    let indice = Math.floor(Math.random() * amigos.length);
    let sorteado = amigos[indice];
    
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> O amigo secreto sorteado é: <strong>${sorteado}</strong></li>`;
}