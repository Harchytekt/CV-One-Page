var jqxhr = $.getJSON("json/projects.json", function() {
	console.log(`success`);
})
.done(function(json) {
	buildProjects(json.projects);
})
.fail(function( jqxhr, textStatus, error) {
	console.log(`Request Failed: ${ textStatus }, ${ error }`);
});

function buildProjects(projects) {
	var projectsHtml = ``;
	for (var i = 0; i < projects.length; i++) {
		var project = projects[i].project;
		projectsHtml += `<!-- ${ project.title } -->`;
		projectsHtml += `
		<div class="grid-item align-self-center">
			<div class="card">
				<div class="card-body">
		`;
		if (project.isForSchool !== undefined && project.isForSchool) {
			projectsHtml += `<img src="img/school.svg" class="svg school" height="64" title="Projet scolaire">`;
		}
		// Add title
		projectsHtml += `<h5 class="card-title" title="${ project.period !== undefined ? project.period : project.title }">${ project.title }</h5>`;
		// Add desc
		projectsHtml += `
					<div class="desc">
						<p class="card-text">`;
		for (var j = 0; j < project.description.length; j++) {
			projectsHtml += `${ project.description[j].line }`;
			if (j < project.description.length - 1) {
				projectsHtml += `<br>`;
			}
		}
		projectsHtml += `
						</p>
					</div>
					`;
		// Add tech
		projectsHtml += `<div class="tech" hidden>`;
		if (project.subtitle !== undefined) {
			projectsHtml += `<h6 class="card-subtitle mb-2 text-muted">${ project.subtitle }</h6>`;
		}
		projectsHtml += `<p class="card-text role">`;
		if (project.role !== undefined) {
			projectsHtml += `<strong>Rôle :</strong> <br>`;
			for (var j = 0; j < project.role.length; j++) {
				projectsHtml += `${ project.role[j].role }`;
				if (j < project.role.length -1) {
					projectsHtml += `, `;
				}
			}
			projectsHtml += ` <br>`;
		}
		projectsHtml += `</p>
						<p class="card-text">
						`;
		if (project.env !== undefined) {
			projectsHtml += `<strong>Environnement :</strong> <br>`;
			for (var j = 0; j < project.env.length; j++) {
				projectsHtml += `${ project.env[j].env }`;
				if (j < project.env.length -1) {
					projectsHtml += `, `;
				}
			}
			projectsHtml += ` <br>`;
		}
		if (project.framework !== undefined) {
			projectsHtml += `<strong>Frameworks :</strong> <br>`;
			for (var j = 0; j < project.framework.length; j++) {
				projectsHtml += `${ project.framework[j].framework }`;
				if (j < project.framework.length - 1) {
					projectsHtml += `, `;
				}
			}
			projectsHtml += ` <br>`;
		}
		if (project.meth !== undefined) {
			projectsHtml += `<strong>Méthodologie :</strong> <br>`
			for (var j = 0; j < project.meth.length; j++) {
				projectsHtml += `${ project.meth[j].meth }`;
				if (j < project.meth.length - 1) {
					projectsHtml += `, `;
				}
			}
			projectsHtml += ` <br>`;
		}
		if (project.build !== undefined) {
			projectsHtml += `<strong>Moteur de production :</strong> <br>`
			for (var j = 0; j < project.build.length; j++) {
				projectsHtml += `${ project.build[j].build }`;
				if (j < project.build.length - 1) {
					projectsHtml += `, `;
				}
			}
			projectsHtml += ` <br>`;
		}
		if (project.tool !== undefined) {
			projectsHtml += `<strong>Outils :</strong> <br>`;
			for (var j = 0; j < project.tool.length; j++) {
				projectsHtml += `${ project.tool[j].tool }`;
				if (j < project.tool.length - 1) {
					projectsHtml += `, `;
				}
			}
			projectsHtml += ` <br>`;
		}
		if (project.other !== undefined) {
			projectsHtml += `<strong>Autres :</strong> <br>`;
			for (var j = 0; j < project.other.length; j++) {
				projectsHtml += `${ project.other[j].other }`;
				if (j < project.other.length - 1) {
					projectsHtml += `, `;
				}
			}
			projectsHtml += ` <br>`;
		}
		projectsHtml += `
						</p>
					</div>
		`;
		// Add links
		projectsHtml += `
					<br>
					<div class="card-links">
					`;
		if (project.git !== undefined) {
			projectsHtml += `
						<a href="${ project.git }" class="card-link pjt" title="Voir sur git" target="_blank">
							<img src="img/git.svg" class="svg" height="20"> Projet
						</a>
			`;
		} else {
			projectsHtml += `
						<span class="card-link pjt" title="Pas de git disponible">
							<img src="img/git.svg" class="svg" height="20"> Projet
						</span>
			`;
		}
		projectsHtml += `<span class="card-link more">+</span>`;
		if (project.report !== undefined) {
			projectsHtml += `
						<a href="${ project.report }" class="card-link rpt" title="Voir le rapport" target="_blank">
							<img src="img/report.svg" class="svg" height="20"> Rapport
						</a>
			`;
		} else if (project.site !== undefined) {
			projectsHtml += `
						<a href="${ project.site }" class="card-link site" title="Voir le site" target="_blank">
							<img src="img/link.svg" class="svg" height="20"> Site
						</a>
			`;
		} else {
			projectsHtml += `
						<span class="card-link site" title="Pas de site disponible">
							<img src="img/link.svg" class="svg" height="20"> Site
						</span>
			`;
		}
		projectsHtml += `
					</div>
				</div>
			</div>
		</div>
		`;
	}
	$('.grid-container.projects').html(projectsHtml);
	toSvg();
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