/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

   var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["I'm Jean Japheth Ezekiel","UI/UX Designer", "Content Manager ", "Technical Writer", "Freelancer", "Photographer"],
      typeSpeed: 100,
      loop: true,
    });
  });


 
  

  
});






const d = 40;

document.querySelectorAll('.rocket-button').forEach(elem => {

    elem.querySelectorAll('.default, .success > div').forEach(text => {
        charming(text);
        text.querySelectorAll('span').forEach((span, i) => {
            span.innerHTML = span.textContent == ' ' ? '&nbsp;' : span.textContent;
            span.style.setProperty('--d', i * d + 'ms');
            span.style.setProperty('--ds', text.querySelectorAll('span').length * d - d - i * d + 'ms');
        });
    });

    elem.addEventListener('click', e => {
        e.preventDefault();
        if(elem.classList.contains('animated')) {
            return;
        }
        elem.classList.add('animated');
        elem.classList.toggle('live');
        setTimeout(() => {
            elem.classList.remove('animated');
        }, 2400);
    });

});

