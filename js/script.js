$(function() {

	//Toggle Navbar
	$('.btn-toggle').on('click', function() {
		$('.navbar').addClass('nav-toggle').fadeIn(500);
		$(this).addClass('hidden-xs');
	});

	//Adjust Navbar when Scroll

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 200) {
			$('.nav-scroll').css({
				'background': 'rgba(118, 129, 112, 0.7)',
				'boxShadow': '0 -2px 3px rgba(118, 129, 112, 0.7)'
			});
		} else {
			$('.nav-scroll').css({
				'background': 'transparent',
				'boxShadow': 'none'
			});
		}
	});

	//Smoth Scroll
	$('.header .overlay .navbar a').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('scroll')).offset().top - 20
		}, 500)

	});




});