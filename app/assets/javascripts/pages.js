$(document).on('turbolinks:load', function() {

	$('.menu_toggle').on('click', function() {
    $('.menu').slideToggle('400');
  });

	$('.glyphicon-menu-right').on('click', function() {
		if ($('.index').hasClass('active')) {
			$('.index').removeClass('active');
			$('.about').addClass('active');
		} else if ($('.gallery').hasClass('active')) {
			$('.gallery').removeClass('active');
			$('.index').addClass('active');
		}
	});

	$('.glyphicon-menu-left').on('click', function() {
		if ($('.index').hasClass('active')) {
			$('.index').removeClass('active');
			$('.gallery').addClass('active');
		} else if ($('.about').hasClass('active')) {
			$('.about').removeClass('active');
			$('.index').addClass('active');
		}
	});

	$('.glyphicon-menu-down').on('click', function() {
		$('.index').removeClass('active');
		$('.contact').addClass('active');
	});

	$('.glyphicon-menu-up').on('click', function() {
		$('.contact').removeClass('active');
		$('.index').addClass('active');
	});

});
