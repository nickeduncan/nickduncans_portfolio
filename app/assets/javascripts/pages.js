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

	$('.menu-contact').on('click', function() {
		$(document).find('.active').removeClass('active');
		$('.contact').addClass('active');
	});

/// Arrow navigation with cube effects
	var panel = "";
	$('.glyphicon-menu-down').on('click', function() {
		$(document).find('.active').removeClass('active');
		$('.contact').addClass('active');
		$('.cube').toggleClass("show-bottom");
		$('.cube').removeClass(panel);
		panel = "show-bottom";
	});

	$('.glyphicon-menu-up').on('click', function() {
		$(document).find('.active').removeClass('active');
		$('.index').addClass('active');
		$('.cube').toggleClass("show-front");
		$('.cube').removeClass(panel);
		panel = "show-front"
	});

	$('.glyphicon-menu-right').on('click', function() {
		if ($('.index').hasClass('active')) {
			$(document).find('.active').removeClass('active');
			$('.about').addClass('active');
			$('.cube').toggleClass("show-right");
			$('.cube').removeClass(panel);
			panel = "show-right"
		} else if ($('.gallery').hasClass('active')) {
			$(document).find('.active').removeClass('active');
			$('.index').addClass('active');
			$('.cube').toggleClass("show-front");
			$('.cube').removeClass(panel);
			panel = "show-front"
		}
	});

	$('.glyphicon-menu-left').on('click', function() {
		if ($('.index').hasClass('active')) {
			$(document).find('.active').removeClass('active');
			$('.gallery').addClass('active');
			$('.cube').toggleClass("show-left");
			$('.cube').removeClass(panel);
			panel = "show-left"
		} else if ($('.about').hasClass('active')) {
			$(document).find('.active').removeClass('active');
			$('.index').addClass('active');
			$('.cube').toggleClass("show-front");
			$('.cube').removeClass(panel);
			panel = "show-front"
		}
	});

	/// Gallery card flipping
	$(".card").on("click", function(){
		$(this).toggleClass("flipped");
	});
});
