'use strict';

const serviceCardDiv = document.querySelectorAll('.service_card_div');
const bubbles = document.querySelector('.bubbles');

let width = 80;
let height = 80;
let count = 20;

const changeBubbleAnimation = function () {
   const elm = document.body;

   window.addEventListener('scroll', function () {
      let scrolllY = this.scrollY;
      elm.style.backgroundPositionX = 0;
      elm.style.backgroundPositionY = `${scrolllY / 10}px`;
   });
};

changeBubbleAnimation();

// console.log(document.body.scrollHeight);

// for (let i = 0; i <= count; i++) {
//    const elem = document.createElement('div');
//    elem.classList.add('dots_bubble');
//    elem.style.width = `${width}px`;
//    elem.style.height = `${height}px`;
//    elem.style.background = '#30D5C8';

//    let x = Math.floor(Math.random() * 1000);
//    let y = Math.floor(Math.random() * 1000);

//    elem.style.top = `${x}px`;
//    elem.style.left = `${y}px`;

//    bubbles.append(elem);
// }

// remove all card classes
const removeClasses = function () {
   serviceCardDiv.forEach((el) => {
      el.classList.remove('service_card_active');
   });
};

serviceCardDiv.forEach((el) => {
   el.addEventListener('click', function () {
      removeClasses();
      this.classList.add('service_card_active');
   });
});
