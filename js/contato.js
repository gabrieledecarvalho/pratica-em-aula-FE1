const form = document.querySelector('.contato__formulario'); // puxando o form do html pra editar o comportamente dele com o js
//const botao = document.querySelector('.botao')

const contatos = [];

form.addEventListener("submit", Event => {
    Event.preventDefault(); // submit deixa de executar o comportamento padrão
    // console.log(Event.type, Event.target, Event.currentTarget, Event.timeStamp, Event.isTrusted);

    let nome = document.querySelector('#input-nome').value;
    let email = document.querySelector('#input-email').value;
    let periodo = document.querySelector('#input-periodo').value;
    let mensagem = document.querySelector('#input-mensagem').value;
    
    const aviso = document.querySelector('.contato__texto');
    if( !nome || !email || !periodo || !mensagem) {   
        aviso.textContent = "Preencha todos os campos!"
        aviso.classList.add('cuidado');
        return;
    }

    const contato = { nome, email, periodo, mensagem}; // criando um objeto js, lembrando que ele não é ordenado (se quiser ordenado pegue um array)
    contatos.push(contato);

    console.log(contatos);

    form.reset();
    // posso fazer assim, chamando o evento submit, onde aconteceu e resetar:
    // Event.target.reset(); 

    aviso.textContent = "Responderemos depois da pescaria."
    aviso.classList.remove('cuidado');

})

// form.addEventListener("click", Event => {
//     console.log(Event.type, Event.target, Event.currentTarget, Event.timeStamp, Event.isTrusted);
// })

