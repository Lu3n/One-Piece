// hello world

//Passo 1 - pegar os botoes no JS para poder verificar quando o usuario clicar em cima de um deles

const botoes = document.querySelectorAll('.botao');


// Passo 1 obj2 - pegar os personagens no JS para poder mostrar ou esconder ele 
const personagens = document.querySelectorAll ('.personagem');




botoes.forEach ((botao, indice) => {
    botao.addEventListener ("click", () => {
        

        // Passo 3 - Verificar se ja existe um botao selecionado, se sim, devemos remover a seleção dele
        const botaoSelecionado = document.querySelector (".botao.selecionado");
        botaoSelecionado.classList.remove ("selecionado")
        

        // Passo 2 - adicionar a classe 'selecionado' no botao que o usuario clicou
       botao.classList.add ("selecionado");
       
       //Passo 3 obj1 - Verificar se já exixste "selecionado" no personagem que o usuario selecionou
       const personagemSelecionado = document.querySelector (".personagem.selecionado");
       personagemSelecionado.classList.remove ("selecionado")


       //Passo 2 obj2 - Adicionar a calsse "selecionado" no personagem que o usuario selecionou
       personagens[indice].classList.add ("selecionado")
    })
})




