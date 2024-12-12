const secao = document.createElement('section');
secao.classList.add('carrosel');

const titulo = document.createElement('h2');
titulo.classList.add('depoimentos__titulo');
titulo.textContent = 'Depoimentos';

secao.append(titulo);

const conteudo = document.createElement('div');
conteudo.classList.add('depoimentos__conteudo');

secao.append(conteudo);

const depoimentos = [
    {
        autor: 'Zé Ninguém',
        texto: 'O lugar é muito bonito. Adorei a experiência.'
    },
    {
        autor: 'Maria Filó',
        texto: 'Passar momentos junto à natureza é sempre revigorante.'
    },
    {
        autor: 'João Biriba',
        texto: 'Não vejo a hora de voltar. O local é incrível.'
    },
    {
        autor: 'Ana do Mé',
        texto: 'Acampar é a minha paixão e ali eu pude realizá-la'
    }
];

const setaEsquerda = document.createElement('img');
setaEsquerda.classList.add('setaEsquerda');
setaEsquerda.setAttribute("src", "./img/left-arrow")

const setaDireita = document.createElement('img');
setaEsquerda.classList.add('setaDireita');

// criar o contador com o íncice de cada depoimento
// função atualizar depoimento para pegar o depoimento do contator
// cont = (contador + 1) % array.length; essa funçãozinha faz o carrossel circular e nunca estourar o array

// tirar o forEach
depoimentos.forEach(depoimento => {
    const conteiner = document.createElement('div');
    conteiner.classList.add('depoimentos__conteiner');

    const texto = document.createElement('p');
    texto.classList.add('depoimentos__texto');
    texto.textContent = depoimento.texto;

    const autor = document.createElement('p');
    autor.classList.add('depoimentos__autor');
    autor.textContent = depoimento.autor;

    conteiner.append(texto);
    conteiner.append(autor);

    conteudo.append(conteiner);
});

const main = document.querySelector('main');
main.lastElementChild.before(secao);
// main.append(secao);

