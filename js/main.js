$(document).ready(function() {
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
});