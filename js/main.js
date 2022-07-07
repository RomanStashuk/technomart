const modalOverlay = document.querySelector('.overlay');

const writeUsLink = document.querySelector('.contacts__btn');
const writeUsModal = document.querySelector('.write-us');
const closeWriteUs = writeUsModal.querySelector('.modal__close');

const writeUsForm = writeUsModal.querySelector('.write-us__form')
const writeUsInputName = writeUsModal.querySelector('[name=write-us--name]');
const writeUsInputEmail = writeUsModal.querySelector('[name=write-us--email]');
const writeUsInputMail = writeUsModal.querySelector('[name=write-us--mail-text]');

const mapLink = document.querySelector('.contacts__link');
const mapModal = document.querySelector('.map');
const closeMap = mapModal.querySelector('.modal__close');

const addToBookmarkBtn = document.querySelectorAll('.products__btn_to-bookmark');
const addToCartkBtn = document.querySelectorAll('.products__btn_buy');

let isStorageSupport = true;
let storage = '';

try {
    storage = {
        name: localStorage.getItem('name'),
        email: localStorage.getItem('email'),
        mail: localStorage.getItem('mail')
    };
} catch (err) {
    isStorageSupport = false;
}


// Modal write-us
writeUsLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    writeUsModal.classList.add('modal--opened');
    modalOverlay.classList.add('modal--opened');
    writeUsInputName.focus();
    if (storage.name) {
        writeUsInputName.value = storage.name;
        writeUsInputEmail.focus();
    }
    if (storage.email) {
        writeUsInputEmail.value = storage.email;
        writeUsInputMail.focus();
    }
    if (storage.mail) {
        writeUsInputMail.value = storage.mail;
    }
});

closeWriteUs.addEventListener('click', function(evt) {
    evt.preventDefault();
    writeUsModal.classList.remove('modal--opened');
    modalOverlay.classList.remove('modal--opened');
    writeUsModal.classList.remove('modal--error');
});

writeUsForm.addEventListener('submit', function(evt) {
    if (!writeUsInputName.value || !writeUsInputEmail.value || !writeUsInputMail.value) {
        evt.preventDefault();
        writeUsModal.classList.remove('modal--error');
        writeUsModal.offsetWidth = writeUsModal.offsetWidth;
        writeUsModal.classList.add('modal--error');
    } else {
        if (isStorageSupport) {
            localStorage.setItem('name', writeUsInputName.value);
            localStorage.setItem('email', writeUsInputEmail.value);
            localStorage.setItem('mail', writeUsInputMail.value);
        }
    }
});


// Modal map
mapLink.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapModal.classList.add('modal--opened');
    modalOverlay.classList.add('modal--opened');
});

closeMap.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapModal.classList.remove('modal--opened');
    modalOverlay.classList.remove('modal--opened');
});


window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        if (writeUsModal.classList.contains('modal--opened')) {
            evt.preventDefault();
            writeUsModal.classList.remove('modal--opened');
            modalOverlay.classList.remove('modal--opened');
            writeUsModal.classList.remove('modal--error');
        }
    }
});

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        if (mapModal.classList.contains('modal--opened')) {
            evt.preventDefault();
            mapModal.classList.remove('modal--opened');
            modalOverlay.classList.remove('modal--opened');
        }
    }
});

// modalOverlay.addEventListener('click', function(evt) {
//     if (modalOverlay.classList.contains('modal--opened')) {
//         evt.preventDefault();
//         writeUsModal.classList.remove('modal--opened');
//         modalOverlay.classList.remove('modal--opened');
//     }
// });

// modalOverlay.addEventListener('click', function(evt) {
//     if (modalOverlay.classList.contains('modal--opened')) {
//         evt.preventDefault();
//         mapModal.classList.remove('modal--opened');
//         modalOverlay.classList.remove('modal--opened');
//     }
// });
