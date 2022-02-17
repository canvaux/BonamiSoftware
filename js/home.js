'use strict';

const serviceCardDiv = document.querySelectorAll('.service_card_div');

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
