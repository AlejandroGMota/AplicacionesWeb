const btnFullImg = document.getElementById('min-image'),
    modalC = document.getElementById('nuestras-bebidas'),
    modal = document.getElementById('modal'),
    cerrar = document.getElementById('close');

    
btnFullImg.addEventListener('click', () => {
    console.log('botn funcionando');
});
btnFullImg.addEventListener('click', () => {
    modalC.style.visibility = "visible";
    modal.style.transform = "translateY(0%)";
});

cerrar.addEventListener('click', () => {
    modal.style.transform = "translateY(-150%)";
    setTimeout(() => {
        modalC.style.visibility = 'hidden';
    }, 500)
});