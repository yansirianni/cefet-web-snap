const desejaInscreverEl = document.querySelector('#visibilidade-das-marcacoes');
const bodyEl = document.querySelector('body');


desejaInscreverEl.addEventListener('click', () =>{    
    const estaMarcado = desejaInscreverEl.checked;
    bodyEl.classList.toggle(desejaInscreverEl.value, estaMarcado);    
})
