$(document).ready(function() {
	$(function() {
		$('[data-toggle="tooltip"]').tooltip()
	});

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
});

/* End Events On Scroll */

$(document).on('click', '.more', function(event) {
	event.preventDefault();
	var isActive = $(this).hasClass('active');
	if (isActive) {
		$(this).removeClass('active');
		$(this).html('+');
	} else {
		$(this).addClass('active');
		$(this).html('−');
	}
	
	var parent = $(this).closest('.card-links').siblings()
	console.log(parent)
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
	$(this).attr('src', 'img/me-hover.png');
});

$('#me').on('mouseleave', function() {
	$(this).attr('src', 'img/me.png');
});