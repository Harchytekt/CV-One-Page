/*jshint esversion: 6 */

$(document).ready(function() {
	var ua = navigator.userAgent.toLowerCase();

	if (ua.indexOf('safari') != -1 && ua.indexOf('chrome') <= -1) {
		//Only for Safari
		$('header .container').css('-webkit-backdrop-filter', 'blur(3px)');
	} else {
		$('header').css('background-image', 'url(resources/background.png)');
	}

	if($("#age").length != 0) {
		setAge();
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

function activeInNav() {
	if (!$('#ifo').is(':offscreen')) {
		$(".nav-item .nav-link").removeClass("active");
		$("#info").addClass("active");
	} else if (!$('#pjt .container').is(':offscreen')) {
		$(".nav-item .nav-link").removeClass("active");
		$("#code").addClass("active");
	} else if (!$('#ctt').is(':offscreen')) {
		$(".nav-item .nav-link").removeClass("active");
		$("#card").addClass("active");
	}
}

/* Begin Calculate Age */

function setAge() {
	var datesDifference = Date.now() - new Date('1994-06-21').getTime();
	var ageMilli = new Date(datesDifference);
	var age = Math.abs(ageMilli.getFullYear() - 1970);
	$("#age").html(age);
}

/* End Caclulate Age */

/* Begin Events On Scroll */

jQuery.expr.filters.offscreen = function(el) {
	var rect = el.getBoundingClientRect();
	return (
		(rect.x + rect.width) < 0 || (rect.y + rect.height) < 0 || (rect.x > window.innerWidth || rect.y > window.innerHeight)
	);
};

$(function() {
	if($("#age").length != 0) {
		if ($('#name').is(':offscreen')) {
			$("header").fadeIn();
		}

		activeInNav();

		$(window).scroll(function() {
			if ($('#name').is(':offscreen')) {
				$("header").fadeIn();
			} else {
				$("header").fadeOut();
			}

			activeInNav();
		});
	}
});

/* End Events On Scroll */

/* Begin Event For Previews */

$(".eye").click(function() {
	$(this).css("display", "none");
	$(this).parent().children(".eye-slash").css("display", "block");
	$(this).parent().children(".image").removeClass("hidden");
	$(this).parent().children(".image").addClass("shown");
});

$(".eye-slash").click(function() {
	$(this).css("display", "none");
	$(this).parent().children(".eye").css("display", "block");
	$(this).parent().children(".image").addClass("hidden");
	$(this).parent().children(".image").removeClass("shown");
});

/* End Event For Previews */

/* French Event Start */

var nbClicks = 0, fr = $('#french').html(), tempFr, res, tempIndex;
//$(document).on('mouseleave touchstart', '#french', function() { // For mobile
$(document).on('mouseout', '#french', function() {
	setTimeout(() => {
		$(this).stop().toggle('puff');

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

		setTimeout(() => {
			$(this).stop().toggle('puff');
		}, 500);
	}, 50);
});

/* French Event End */
