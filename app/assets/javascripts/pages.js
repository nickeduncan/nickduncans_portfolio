$(document).on('turbolinks:load', function() {
	$('.menu_toggle').on('click', function() {
    $('.menu').slideToggle('400');
  });
});
