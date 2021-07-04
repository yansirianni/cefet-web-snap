//common

const filtroEl = document.querySelector('#filtro-da-foto');
const seletorImagemEl = document.querySelector('#imagem');
const imagemEl = document.querySelector('.foto-anotada > img');

//Exercice 4

filtroEl.addEventListener('input', e => {
    
    imagemEl.style.filter = filtroEl.value;
})

//challenge

seletorImagemEl.addEventListener('change', (event) => {    
    const fileList = event.target.files;   

    readImage(fileList[0], imagemEl);
  });

function readImage(file, imageEl){

// Check if the file is an image.
if (file.type && !file.type.startsWith('image/')) {
    console.log('File is not an image.', file.type, file);  
    return; 
}    

const reader = new FileReader();
reader.addEventListener('load', (event) => {
    imageEl.src = event.target.result;
});
reader.readAsDataURL(file);
}
