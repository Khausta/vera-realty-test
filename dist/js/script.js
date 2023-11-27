'use strict';

document.addEventListener('DOMContentLoaded', function() {

    //btns for table in display width more then 1635px
    let btnUp = document.querySelector('.js-btns-up'),
        btnDown = document.querySelector('.js-btns-down'),
        table = document.getElementById('table1');

    btnUp.addEventListener('click', () => {
        table.style.backgroundPositionY = 40 + '%'; 
    });

    btnDown.addEventListener('click', () => {
        table.style.backgroundPositionY = 100 + '%';
    });

    //btns for table in display width less then 1635px
    let btnUp1635px = document.querySelector('.table__block_img-1635px .js-btns .js-btns-up'),
        btnDown1635px = document.querySelector('.table__block_img-1635px .js-btns .js-btns-down'),
        table1635px = document.getElementById('table2');

    btnUp1635px.addEventListener('click', () => {
        table1635px.style.backgroundPositionY = 70 + '%';
    });

    btnDown1635px.addEventListener('click', () => {
        table1635px.style.backgroundPositionY = 100 + '%';
    });

    //animation for girl
    let girl = document.getElementById('js-animate'),
        hole = document.querySelector('.js-animation__hole');

        window.addEventListener('scroll', () => {
            
            if (Math.ceil(window.scrollY + window.innerHeight) >= Math.ceil(window.scrollY + hole.getBoundingClientRect().bottom)) {

                hole.classList.add('closing');
                hole.classList.add('open');
                girl.classList.add('up');
            }
        
        });
    });
