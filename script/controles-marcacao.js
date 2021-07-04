//Common

const desejaInscreverEl = document.querySelector('#visibilidade-das-marcacoes');
const bodyEl = document.querySelector('body');

const xEl = document.querySelector('#x-da-marcacao');
const yEl = document.querySelector('#y-da-marcacao');
const larguraEl = document.querySelector('#largura-da-marcacao');
const alturaEl = document.querySelector('#altura-da-marcacao');

const tituloEl = document.querySelector('#titulo-da-marcacao');
const conteudoEl = document.querySelector('#conteudo-da-marcacao');
const corEl = document.querySelector('#cor-da-marcacao');

const formatoMarcacao = document.querySelectorAll('[name="formato-da-marcacao"]');

//Exercice 0

desejaInscreverEl.addEventListener('click', () =>{    
    const estaMarcado = desejaInscreverEl.checked;
    bodyEl.classList.toggle(desejaInscreverEl.value, estaMarcado);    
})

//Exercice 2

for (let marcacaoEl of marcacoes){
      
    marcacaoEl.addEventListener('click', () => {     
        
        marcacoes.forEach(function(el){
            el.classList.remove('selecionada');
        });
        
        marcacaoEl.classList.add('selecionada');
        xEl.value = parseInt(marcacaoEl.style.left);
        yEl.value = parseInt(marcacaoEl.style.top);
        larguraEl.value = parseInt(marcacaoEl.style.width);
        alturaEl.value = parseInt(marcacaoEl.style.height);
       
        tituloEl.value = marcacaoEl.dataset.titulo;
        conteudoEl.value = marcacaoEl.dataset.conteudo;
        corEl.value = marcacaoEl.dataset.cor;

        let formato = marcacaoEl.classList.contains("formato-oval") ? "formato-oval" : "formato-retangular";
        let formatoEl = document.querySelector(`[value='${formato}']`);
        formatoEl.checked = true;         
    });
}

//Exercice 3

xEl.addEventListener('input', () => {
    const marcacaoSelecionadaEl = document.querySelector('.marcacao.selecionada');
    marcacaoSelecionadaEl.style.left = `${xEl.value}px`;
});

yEl.addEventListener('input', () => {
    const marcacaoSelecionadaEl = document.querySelector('.marcacao.selecionada');
    marcacaoSelecionadaEl.style.top = `${yEl.value}px`;
});

larguraEl.addEventListener('input', () => {
    const marcacaoSelecionadaEl = document.querySelector('.marcacao.selecionada');
    marcacaoSelecionadaEl.style.width = `${larguraEl.value}px`;
});

alturaEl.addEventListener('input', () => {
    const marcacaoSelecionadaEl = document.querySelector('.marcacao.selecionada');
    marcacaoSelecionadaEl.style.height = `${alturaEl.value}px`;
});

tituloEl.addEventListener('input', () => {
    const marcacaoSelecionadaEl = document.querySelector('.marcacao.selecionada');
    marcacaoSelecionadaEl.dataset.titulo = tituloEl.value;
});

conteudoEl.addEventListener('input', () => {
    const marcacaoSelecionadaEl = document.querySelector('.marcacao.selecionada');
    marcacaoSelecionadaEl.dataset.conteudo = conteudoEl.value;
});

corEl.addEventListener('input', () => {
    const marcacaoSelecionadaEl = document.querySelector('.marcacao.selecionada');
    marcacaoSelecionadaEl.dataset.cor = corEl.value;
});

for (let formatoMarcacaoEl of formatoMarcacao){
    formatoMarcacaoEl.addEventListener('click', () => {
        const marcacaoSelecionadaEl = document.querySelector('.marcacao.selecionada');
        let formato = marcacaoSelecionadaEl.classList.contains("formato-oval") ? "formato-oval" : "formato-retangular";
        marcacaoSelecionadaEl.classList.remove(formato);
        marcacaoSelecionadaEl.classList.add(formatoMarcacaoEl.value);
        
    })
}
