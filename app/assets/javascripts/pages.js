$(document).on('turbolinks:load', function() {

	$('.menu_toggle').on('click', function() {
    $('.menu').slideToggle('400');
  });

	$('.glyphicon-menu-right').on('click', function() {
		$('.index').removeClass('active');
		$('.about').addClass('active');
	});
});
