const container = document.querySelector('.main-container'),
    min = document.querySelectorAll('.img-min');
for (let i = 0; i < min.length; i++) {
    let cityName, image;
    switch (i) {
        case 0:
            cityName = 'Mi Iphone en Seattle';
            image = 'Iphone1';
            break;
        case 1:
            cityName = 'Mi Iphone en un café';
            image = 'Iphone2';
            break;
        case 2:
            cityName = 'Mi Iphone en un parque de Seattle';
            image = 'Iphone3';
            break;
        case 3:
            cityName = 'Mi Iphone en las afueras de Seattle';
            image = 'Iphone4';
            break;
        case 4:
            cityName = 'Mi Iphone desde la AppleStore en Birmingham';
            image = 'Iphone5';
            break;
        case 5:
            cityName = 'Mi Iphone junto al puente';
            image = 'Iphone6';
            break;
    }
    min[i].addEventListener('click', () => {
        container.innerHTML = `
        <h2 style="margin-bottom: 25px;" class="city-name" style="float: left;">${cityName}</h2>
        <a href="./index.html" title="Volver a la página principal">
            <img style="width: 80%; margin-left:10% ;" src="./img/${image}.jpg" alt="${cityName}">
        </a>
        `;
    })
}