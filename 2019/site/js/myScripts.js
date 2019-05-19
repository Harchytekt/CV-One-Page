$(function() {
	$('[data-toggle="tooltip"]').tooltip()
});

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