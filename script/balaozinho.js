const balaozinhoEl = document.querySelector('#balaozinho');
const marcacoes = document.querySelectorAll('.marcacao');

for (let marcacaoEl of marcacoes){

    marcacaoEl.addEventListener('mouseover', (e) => {   
        marcacaoEl = e.currentTarget;       
        balaozinhoEl.innerHTML = `<h2>${marcacaoEl.dataset.titulo}<\h2><p>${marcacaoEl.dataset.conteudo}<\p>`;
        balaozinhoEl.style.color = marcacaoEl.dataset.cor;
    });

    marcacaoEl.addEventListener('mouseout', (e) => {
        balaozinhoEl.innerHTML = '';
    });

    marcacaoEl.addEventListener('mousemove', (e) => {              
        balaozinhoEl.style.left = `${e.pageX}px`;
        balaozinhoEl.style.top = `${e.pageY}px`;
    });
}