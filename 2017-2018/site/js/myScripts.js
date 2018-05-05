$(document).ready(function() {
	var ua = navigator.userAgent.toLowerCase();

	if (ua.indexOf('safari') != -1 && ua.indexOf('chrome') <= -1) {
		//Only for Safari
		$('header .container').css('-webkit-backdrop-filter', 'blur(3px)');
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
    });

});

/* French Event Start */

var nbClicks = 0, fr = $('#french').html(), tempFr, res, tempIndex;
//$(document).on('mouseleave touchstart', '#french', function() { // For mobile
$(document).on('mouseout', '#french', function() {
	$(this).toggle('puff');

	if (nbClicks++ % 2 == 0) {
		tempFr = fr.split('');
		res = [];
		while (tempFr.length > 0) {
			tempIndex = Math.floor(Math.random() * tempFr.length);
			res.push(tempFr[tempIndex]);
			tempFr.splice(tempIndex, 1);
		}
		$(this).html(res.join(''));
	} else {
		$(this).html(fr);
	}

	$(this).toggle('puff');
});

/* French Event End */
