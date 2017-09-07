$(document).ready(function() {
	setAge();

	var src, res, ext;
	var fRegex = (/resources\/leftIcons\/[a-z]+/), sRegex = (/Active{1}/), extRegex = (/.png$|.svg$/);
	$('.modifiable').mouseenter(function() {
		if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { // If not mobile
			modifyImg($(this), 1);
		}
	});
	$('.modifiable').mouseleave(function() {
		modifyImg($(this), 0);
	});
	$('.modifiable').click(function() {
		modifyImg($(this), -1);
	});

	function modifyImg(item, state) {
		src = item.attr("src");
		res = src.match(fRegex).toString();
		ext = src.match(extRegex).toString();
		if (state == 0 || (state == -1  && src.match(sRegex) != null)) {
			res += ext;
		} else {
			res += "Active" + ext;
		}

		item.attr("src", res);
	}


	$('.displayItem').click(function() {
		$(this).closest('.right').find('.hiddenItem').stop().show(500);
		$(this).css('visibility', 'hidden');
	});
	$('.hideItem').click(function() {
		$(this).closest('.right').find('.hiddenItem').stop().hide(800);
		dItem = $(this).closest('.right').find('.displayItem');
		setTimeout(function() {
			dItem.css('visibility', 'visible');
		}, 700);
	});
});

/* Begin Calculate Age */

function setAge() {
    var datesDifference = Date.now() - new Date('1994-06-21').getTime();
    var ageMilli = new Date(datesDifference);
    var age = Math.abs(ageMilli.getFullYear() - 1970);
    document.getElementById("age").innerHTML = age;
}

/* End Caclulate Age */
