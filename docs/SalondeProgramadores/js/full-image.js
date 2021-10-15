const btnDirection = document.getElementById('full-direction'),
    modalC = document.getElementById('direction-container'),
    modal = document.getElementById('modal'),
    cerrar = document.getElementById('close');

    btnDirection.addEventListener('click', () => {
    modalC.style.visibility = "visible";
    modal.style.transform = "translateY(0%)";
});

cerrar.addEventListener('click', () => {
    modal.style.transform = "translateY(-150%)";
    setTimeout(() => {
        modalC.style.visibility = 'hidden';
    }, 500)
});
window.addEventListener('click', function (e) {
    if (e.target == modalC) {
        modal.style.transform = "translateY(-150%)";
        setTimeout(() => {
            modalC.style.visibility = 'hidden';
        }, 500)

    }
});