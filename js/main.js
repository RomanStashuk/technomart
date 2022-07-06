const modalOverlay = document.querySelector('.overlay');

const writeUsLink = document.querySelector('.contacts__btn');
const writeUsModal = document.querySelector('.write-us');
const closeWriteUs = writeUsModal.querySelector('.modal__close');
const writeUsInputName = writeUsModal.querySelector('[name=write-us--name]')

const mapLink = document.querySelector('.contacts__link');
const mapModal = document.querySelector('.map');
const closeMap = mapModal.querySelector('.modal__close');

const addToBookmarkBtn = document.querySelectorAll('.products__btn_to-bookmark');
const addToCartkBtn = document.querySelectorAll('.products__btn_buy');


writeUsLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    writeUsModal.classList.add('modal--opened');
    writeUsInputName.focus();
});

closeWriteUs.addEventListener('click', function(evt) {
    evt.preventDefault();
    writeUsModal.classList.remove('modal--opened');
});


mapLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapModal.classList.add('modal--opened');
});

closeMap.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapModal.classList.remove('modal--opened');
});
