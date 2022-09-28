$(document).ready(function() {
    $('.partners__slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		rows: 1,
		dots: false,
		autoplay: true,
		infinite: true,
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
				  slidesToShow: 4
				}
			  },
           {
             breakpoint: 992,
             settings: {
               slidesToShow: 3
             }
           },
		   {
			breakpoint: 500,
			settings: {
			  slidesToShow: 2
			}
		  },
		  {
			breakpoint: 424,
			settings: {
			  slidesToShow: 1
			}
		  }
       ] 
	});
    $('.about__box__title').click(function (e) {
        e.preventDefault();
        let elem = e.target;
		let id = '1' + elem.getAttribute('id');
		$('.about__box__content').removeClass('about__box__content--active');
        $('.about__box__title').removeClass('about__box__title--active');
		jQuery("#"+id).addClass('about__box__content--active');
        let idElem = elem.getAttribute('id');
		jQuery("#"+idElem).addClass('about__box__title--active');
	});
	$('.menu__btn').on('click', function (e) {
        e.preventDefault();
        $('.menu__btn').toggleClass('menu__btn--close');
        $('.menu__list').toggleClass('menu__list--active');
        $('.menu__btn-element').toggleClass('menu__btn-element_close');
    });
});
/* scrollto */

$('.scrollto a').on('click', function scroll(e) {
    e.preventDefault();
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top - 30
    }, {
        duration: 370,
        easing: "linear"
    });
    $('.menu__list').removeClass('menu__list--active');
    return false;
});