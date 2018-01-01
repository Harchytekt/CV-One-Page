$(document).ready(function() {
	setYear();
	var ua = navigator.userAgent.toLowerCase();

	if (ua.indexOf('safari') != -1 && ua.indexOf('chrome') <= -1) {
		//Only for Safari
		$('html').css('font-family', '-apple-system');
		$('body').css('font-family', '-apple-system');
		$('h1').css('font-family', '-apple-system');
		$('header').css('-webkit-backdrop-filter', 'blur(6px)');
		$('footer').css('-webkit-backdrop-filter', 'blur(6px)');
	} else {
		/*$('header').css('background-color', '#F0F0F0');
		$('footer').css('background-color', '#E6E6E5');*/
		$('header').css('background-image', 'url(resources/white-background.png)');
		$('footer').css('background-image', 'url(resources/white-background.png)');
	}

	//Change stylesheet and the linked icon.
    $('.img-zoom').hover(function() {
        $(this).addClass('transition');

    }, function() {
        $(this).removeClass('transition');
    });

});

/* Begin Set Year */

function setYear() {
    var year = (new Date()).getFullYear();
    document.getElementById('currentYear').innerHTML = " - " + year;
}

/* End Set Year */

