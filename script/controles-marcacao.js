const desejaInscreverEl = document.querySelector('#visibilidade-das-marcacoes');
const bodyEl = document.querySelector('body');

const xEl = document.querySelector('#x-da-marcacao');
const yEl = document.querySelector('#y-da-marcacao');
const larguraEl = document.querySelector('#largura-da-marcacao');
const alturaEl = document.querySelector('#altura-da-marcacao');

const tituloEl = document.querySelector('#titulo-da-marcacao');
const conteudoEl = document.querySelector('#conteudo-da-marcacao');
const corEl = document.querySelector('#cor-da-marcacao');

desejaInscreverEl.addEventListener('click', () =>{    
    const estaMarcado = desejaInscreverEl.checked;
    bodyEl.classList.toggle(desejaInscreverEl.value, estaMarcado);    
})

for (let marcacaoEl of marcacoes){
      
    marcacaoEl.addEventListener('click', (e) => {     
        
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

        const formato = marcacaoEl.classList.contains("formato-oval") ? "formato-oval" : "formato-retangular";
        const formatoEl = document.querySelector(`[value='${formato}']`);
        formatoEl.checked = true;

         
    });
}
