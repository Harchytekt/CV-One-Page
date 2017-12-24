$(document).ready(function() {
	var ua = navigator.userAgent.toLowerCase();

	if (ua.indexOf('safari') != -1 && ua.indexOf('chrome') <= -1) {
		//Only for Safari
		$('header').css('-webkit-backdrop-filter', 'blur(3px)');
		$('footer').css('-webkit-backdrop-filter', 'blur(3px)');
	} else {
		$('header').css('background-image', 'url(resources/background.png)');
	}

	//Change stylesheet and the linked icon.
    $('.img-zoom').hover(function() {
        $(this).addClass('transition');

    }, function() {
        $(this).removeClass('transition');
    });


    var offset = 220;
    var duration = 1000;
    $(this).scroll(function() {
        console.log("hgfhdjgf");
        if ($(this).scrollTop() > offset) {
            console.log($(this).scrollTop());
            $('.back-to-top').fadeIn(duration);
        } else {
            $('.back-to-top').fadeOut(duration);
        }
    });

    $('.back-to-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, duration);
        return false;
    })

});
