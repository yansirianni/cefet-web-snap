const filtroEl = document.querySelector('#filtro-da-foto');

filtroEl.addEventListener('input', e => {
    let imagemEl = document.querySelector('.foto-anotada > img');
    imagemEl.style.filter = filtroEl.value;
})