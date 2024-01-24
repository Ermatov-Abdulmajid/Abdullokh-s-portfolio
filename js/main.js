// LIGHT MODE
const lightMode = document.querySelector('.site-header__light-button') ;

if (lightMode) {
    lightMode.addEventListener('click', function() {
        document.body.classList.add('light-mode');
    });
}

const darkMode = document.querySelector('.site-header__dark-button') ;

if (darkMode) {
    darkMode.addEventListener('click', function() {
        document.body.classList.remove('light-mode');
    });
}

// HEADER
const elHeader = document.querySelector('.site-header')
const sideBar = elHeader.querySelector('.site-header__inner')
const open = elHeader.querySelector('.site-header__button-menu')
const close = elHeader.querySelector('.site-header__button-close')

open.addEventListener('click', () => {
    ShowSidear()
});

close.addEventListener('click', () => {
    HideSidear()
});

function ShowSidear() {
    elHeader.classList.add('site-header--open')
}

function HideSidear() {
    elHeader.classList.remove('site-header--open')
}


const faqs = document.querySelectorAll('.accordion__content')

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active')
    })
})