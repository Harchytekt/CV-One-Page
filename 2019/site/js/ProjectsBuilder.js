var definitions;
var lang = localStorage.getItem('lang').slice(-2);
$('.backToTop').prop('title', `${ lang === 'En' ? 'Back to top of page' : 'Retour en haut de page' }`);

var definitionsJSON = $.getJSON(`json/definitions${ lang === 'En' ? 'En' : '' }.json`, function() {
	// console.log(`success`);
})
.done(function(json) {
	definitions = jQuery.parseJSON(JSON.stringify(json.definitions));

	var jqxhr = $.getJSON(`json/projects${ lang === 'En' ? 'En' : '' }.json`, function() {
		// console.log(`success`);
	})
	.done(function(json) {
		buildProjects(json.projects);
	});
});

function buildProjects(projects) {
	var projectsHtml = ``;
	for (var i = 0; i < projects.length; i++) {
		var project = projects[i].project;
		projectsHtml += `
		<!-- ${ project.title } -->
		<div class="grid-item align-self-center">
			<div class="card">
				<div class="card-body">
					${ addOneProject(project) }
				</div>
			</div>
		</div>`;
	}
	$('.grid-container.projects').html(projectsHtml);
	toSvg();
	$('[data-toggle="tooltip"]').tooltip();
}

/*
 * Replace all SVG images with inline SVG
 */
function toSvg() {
	$('img.svg').each(function() {
		var img = $(this);
		var imgID = img.attr('id');
		var imgClass = img.attr('class');
		var imgURL = img.attr('src');
		var imgHeight = img.attr('height');
		var imgTitle = img.attr('title');

		$.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var svg = $(data).find('svg');

			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
				svg = svg.attr('id', imgID);
			}
			
			svg = svg.attr('height', imgHeight);
			svg = svg.attr('width', imgHeight);

			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				svg = svg.attr('class', imgClass+' replaced-svg');
			}

			// Add title
			/* if (typeof imgTitle !== 'undefined') {
				//svg = svg.attr('title', imgTitle);
				svg.append(`<title>test</title>`);
			} */

			// Remove any invalid XML tags as per http://validator.w3.org
			svg = svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			img.replaceWith(svg);

		}, 'xml');
	});
}