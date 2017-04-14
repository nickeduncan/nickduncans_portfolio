$(document).on('turbolinks:load', function() {

	/// Navbar navigation
	/// TODO add clickhand on hover
	$('.logo').on('click', function() {
		$(document).find('.active').removeClass('active');
		$('.index').addClass('active');
	})

	$('.menu_toggle').on('click', function() {
    $('.menu').slideToggle('400');
  });

	$('.menu-about').on('click', function() {
		$(document).find('.active').removeClass('active');
		$('.about').addClass('active');
	});

	$('.menu-gallery').on('click', function() {
		$(document).find('.active').removeClass('active');
		$('.gallery').addClass('active');
	});

/// Arrow navigation
/// TODO add effects (cube?)
	$('.glyphicon-menu-down, .menu-contact').on('click', function() {
		$(document).find('.active').removeClass('active');
		$('.contact').addClass('active');
	});

	$('.glyphicon-menu-up').on('click', function() {
		$('.contact').removeClass('active');
		$('.index').addClass('active');
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
});
