const carButton = document.querySelectorAll('.button-car'),
    carType = document.querySelector('.tittle').textContent,
    imgTag = document.querySelector('#car-img');

console.log(carType);


for (let i = 0; i < carButton.length; i++) {
    let carsList = ["1", "2", "3", "4"]
    let prefix

    switch (carType) {
        case 'Autos Nuevos':
            prefix = 'n';
            break;
        case 'Autos Seminuevos':
            prefix = 's';
            break;
        case 'Autos Usados':
            prefix = 'u';
            break;
        default:
            break;
    }

    carButton[i].addEventListener("click", () => {
        let carImgName = "../img/" + carsList[i] + prefix + ".jpg"
        imgTag.src = carImgName;
    });
};