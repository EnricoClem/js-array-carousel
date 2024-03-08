// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.

// Recuperare le immagini come percorsi di recupero delle stesse e metterle in un array
const imagesArray = ['img/01.webp','img/02.webp','img/03.webp','img/04.webp','img/05.webp'];

// Recuperare l'elemento items-container
const itemsContainerElement = document.querySelector('.items-container')
let itemsHTML = '';

// Collocare in items-container le immagini indicate nell'array
// Usare un ciclo per creare div nel dom facendo riferimento alla lista contenuta nell'array
for (let i = 0; i < imagesArray.length; i++) {

    // Collegare ad una costante il valore dell'elemento dell'array a cui corrisponde il valore di i
    const imageURL = imagesArray[i];

    // Applicare l'elemento immagine all'interno del HTML
    const slideItem = `
    <div class="item">
        <img src="${imageURL}">
    </div>`;

    // Fare in modo che gli elementi si accumulino fino a fine ciclo
    itemsHTML += slideItem;
}

itemsContainerElement.innerHTML = itemsHTML;

// Applicare la classe item--active alla prima immagine
let activeItem = 0
const divItemElement = document.getElementsByClassName('item');

divItemElement[activeItem].classList.add('item--active');

// Rendere funzionante la classe next spostando al click la classe item--active al item sucessivo
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click', function () {

    divItemElement[activeItem].classList.remove('item--active');
    activeItem++;
    divItemElement[activeItem].classList.add('item--active');

});

// Applicare lo stesso ragionamento a prev modificando l'andamento a ritroso
prev.addEventListener('click', function () {

    divItemElement[activeItem].classList.remove('item--active');
    activeItem--;
    divItemElement[activeItem].classList.add('item--active');

});

// Rendere i tasti prev e next funzionanti anche ai limiti delle spostando item--active al item opposto della lista