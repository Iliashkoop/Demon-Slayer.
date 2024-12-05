window.addEventListener('scroll', (evt) => {
    if (window.scrollY > 30) {//Условно
       //тут анимацию сами придумаете
       $('head').css('opacity', 1);
   }
})