
$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    });

   var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints:{
          640: {
              slidesPerView: 3,
              spaceBetween: 10
          },
          0: {
            slidesPerView: 1,
            spaceBetween: 10
        },
      }
    });
    
});


