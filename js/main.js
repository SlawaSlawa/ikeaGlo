'use strict';

const btnBurger = document.querySelector('.btn-burger'),
    catalog = document.querySelector('.catalog'),
    btnClose = document.querySelector('.btn-close'),
    subCatalog = document.querySelector('.subcatalog'),
    subCatalogHeader = document.querySelector('.subcatalog-header'),
    btnReturn = document.querySelector('.btn-return');

// -----------------Создание и добавление overlay----------------------
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.insertAdjacentElement('beforeend', overlay);
// /////////////////Создание и добавление overlay----------------------



//---------------------Открытие - закрытие бургер-меню ---------------------
const openMenu = () => {
    catalog.classList.add('open');
    overlay.classList.add('active');
};

const closeMenu = () => {
    closeSubMenu();
    catalog.classList.remove('open');
    overlay.classList.remove('active');
};
/////////////////////Открытие - закрытие бургер-меню ---------------------
// ------------------Открытие - закрытие submenu-----------------------------
const openSubMenu = (event) => {
    event.preventDefault();
    const target = event.target;
    const itemList = event.target.closest('.catalog-list__item');

    if (itemList) {
        subCatalog.classList.add('subopen');
        subCatalogHeader.innerHTML = itemList.innerHTML;
    }
}

const closeSubMenu = (event) => {
    subCatalog.classList.remove('subopen');
}
// //////////////////Открытие - закрытие submenu-----------------------------

overlay.addEventListener('click', closeMenu);
btnBurger.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') closeMenu();
});
catalog.addEventListener('click', openSubMenu);
btnReturn.addEventListener('click', closeSubMenu);