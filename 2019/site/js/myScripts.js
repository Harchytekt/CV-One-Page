$(document).ready(function() {
	getLanguage();

	setTimeout(function() {
		setProjects();
		
		$(function() {
			$('[data-toggle="tooltip"]').tooltip()
		});

		if($("#age").length != 0) {
			setAge();
		}

		var offset = 220;
		var duration = 1000;
		$(this).scroll(function() {
			if ($(this).scrollTop() > offset) {
				$('.backToTop').fadeIn(duration);
			} else {
				$('.backToTop').fadeOut(duration);
			}
		});

		$('.backToTop').click(function(event) {
			event.preventDefault();
			$('html, body').animate({scrollTop: 0}, duration);
			return false;
		});

		/* Begin Events On Scroll */

		jQuery.expr.filters.offscreen = function(el) {
			var rect = el.getBoundingClientRect();
			return (
				(rect.x + rect.width) < 0 || (rect.y + rect.height) < 0 || (rect.x > window.innerWidth || rect.y > window.innerHeight)
			);
		};

		/* End Events On Scroll */
	}, 100);
});

/* Begin Calculate Age */

function setAge() {
	var datesDifference = Date.now() - new Date('1994-06-21').getTime();
	var ageMilli = new Date(datesDifference);
	var age = Math.abs(ageMilli.getFullYear() - 1970);
	$("#age").html(age);
}

/* End Caclulate Age */

$(document).on('click', '.more', function(event) {
	event.preventDefault();
	var isActive = $(this).hasClass('active');
	if (isActive) {
		$(this).removeClass('active');
		$(this).closest('.card').removeClass('active');
		$(this).html('+');
	} else {
		$(this).addClass('active');
		$(this).closest('.card').addClass('active');
		$(this).html('−');
	}
	
	var parent = $(this).closest('.card-links').siblings()
	parent.closest('.desc').prop('hidden', !isActive);
	parent.closest('.tech').prop('hidden', isActive);
});

// Creating my own function in jQuery
jQuery.fn.replaceClass = function(oldClass, newClass) {
	var object = $(this[0]) // It's your element

	object.removeClass(oldClass);
	object.addClass(newClass);

	return this; // This is needed so others can keep chaining off of this
};

$('#me').on('mouseenter', function() {
	$(this).attr('src', 'resources/img/me-hover.png');
});

$('#me').on('mouseleave', function() {
	$(this).attr('src', 'resources/img/me.png');
});

function getLanguage() {
	if (window.location.pathname === `/Fr` || window.location.pathname === `/En`) {
		localStorage.setItem('lang', window.location.pathname);
	} else {
		var page = ``;
		if (localStorage.getItem('lang') === null) {
			if ((navigator.language || navigator.userLanguage).split('-')[0] === 'fr') {
				page = `/Fr`;
				localStorage.setItem('lang', page);
			} else {
				page = `/En`;
				localStorage.setItem('lang', page);
			}
		} else {
			page = `${ localStorage.getItem('lang') }`;
		}
		window.location.replace(`${ window.location.origin }${ page }`);
	}
}