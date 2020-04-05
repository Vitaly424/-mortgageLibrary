"use strict";


let accordion = document.querySelectorAll('.js-questions__accordion');


for (let i = 0; i < accordion.length; i++) {
    accordion[i].classList.remove('active');
}

accordion.forEach(function (el) {

    el.addEventListener('click', function () {

        for (let i = 0; i < accordion.length; i++) {
            accordion[i].classList.remove('active');
        }

        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            this.classList.add('active');
        };
    });

})