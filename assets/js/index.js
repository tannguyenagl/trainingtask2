window.onscroll = function () {
  myFunction();
};
function myFunction() {
  if (window.innerWidth >= 1) {
    if (window.pageYOffset > 1) {
      $('.c-header').css('background', 'white');
      $('.c-header').css('color', 'black');

      $('.c-header__item').css('color', 'black');
    } else {
      $('.c-header').css('background', 'transparent');
      $('.c-header').css('color', 'white');
      $('.c-header__item').css('color', 'white');
    }
  }
}

$('.c-top').click(function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

$('.c-office__btn2').click(function () {
  $('.c-office__btn1').css('background', '#c1c1c1');
  $('.c-office__btn2').css('background', '#0006ff');
  $('.c-office__wrapadress1').css('display', 'none');
  $('.c-office__wrapadress2').css('display', 'block');
});

$('.c-office__btn1').click(function () {
  $('.c-office__btn2').css('background', '#c1c1c1');
  $('.c-office__btn1').css('background', '#0006ff');
  $('.c-office__wrapadress2').css('display', 'none');
  $('.c-office__wrapadress1').css('display', 'block');
});
