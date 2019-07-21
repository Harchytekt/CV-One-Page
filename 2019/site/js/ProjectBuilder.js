var definitions;
var definitionsJSON = $.getJSON("json/definitions.json", function() {
	console.log(`success`);
})
.done(function(json) {
	definitions = json.definitions;
})
.fail(function( jqxhr, textStatus, error) {
	console.log(`Request Failed: ${ textStatus }, ${ error }`);
});

var jqxhr = $.getJSON("json/projects.json", function() {
	console.log(`success`);
})
.done(function(json) {
	buildProjects(json.projects);
})
.fail(function( jqxhr, textStatus, error) {
	console.log(`Request Failed: ${ textStatus }, ${ error }`);
});

function findDefinition(name) {
	var defs = jQuery.parseJSON(JSON.stringify(definitions));
	for (var def = 0; def < defs.length; def++) {
		if (name === defs[def].title) {
			return defs[def].description;
		}
	}
	return "Aucune définition trouvée";
}

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
			projectsHtml += `<img src="resources/img/school.svg" class="svg school" height="64" title="Projet scolaire">`;
		}
		// Add title
		projectsHtml += `<h5 class="card-title" title="${ project.period !== undefined ? project.period : project.title }">${ project.title }</h5>`;
		// Add desc
		projectsHtml += `
					<div class="desc">
						<p class="card-text">
							<sup class="period">${project.period}</sup> <br>`;
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
				projectsHtml += `<span class="defTooltip" data-toggle="tooltip" data-html="true" title="${findDefinition(project.env[j].env)}">
									${ project.env[j].env }
								</span>`;
				if (j < project.env.length -1) {
					projectsHtml += `, `;
				}
			}
			projectsHtml += ` <br>`;
		}
		if (project.framework !== undefined) {
			projectsHtml += `<strong>Frameworks :</strong> <br>`;
			for (var j = 0; j < project.framework.length; j++) {
				projectsHtml += `<span class="defTooltip" data-toggle="tooltip" data-html="true" title="${findDefinition(project.framework[j].framework)}">
									${ project.framework[j].framework }
								</span>`;
				if (j < project.framework.length - 1) {
					projectsHtml += `, `;
				}
			}
			projectsHtml += ` <br>`;
		}
		if (project.meth !== undefined) {
			projectsHtml += `<strong>Méthodologie :</strong> <br>`
			for (var j = 0; j < project.meth.length; j++) {
				projectsHtml += `<span class="defTooltip" data-toggle="tooltip" data-html="true" title="${findDefinition(project.meth[j].meth)}">
									${ project.meth[j].meth }
								</span>`;
				if (j < project.meth.length - 1) {
					projectsHtml += `, `;
				}
			}
			projectsHtml += ` <br>`;
		}
		if (project.build !== undefined) {
			projectsHtml += `<strong>Moteur de production :</strong> <br>`
			for (var j = 0; j < project.build.length; j++) {
				projectsHtml += `<span class="defTooltip" data-toggle="tooltip" data-html="true" title="${findDefinition(project.build[j].build)}">
									${ project.build[j].build }
								</span>`;
				if (j < project.build.length - 1) {
					projectsHtml += `, `;
				}
			}
			projectsHtml += ` <br>`;
		}
		if (project.tool !== undefined) {
			projectsHtml += `<strong>Outils :</strong> <br>`;
			for (var j = 0; j < project.tool.length; j++) {
				projectsHtml += `<span class="defTooltip" data-toggle="tooltip" data-html="true" title="${findDefinition(project.tool[j].tool)}">
									${ project.tool[j].tool }
								</span>`;
				if (j < project.tool.length - 1) {
					projectsHtml += `, `;
				}
			}
			projectsHtml += ` <br>`;
		}
		if (project.other !== undefined) {
			projectsHtml += `<strong>Autres :</strong> <br>`;
			for (var j = 0; j < project.other.length; j++) {
				projectsHtml += `<span class="defTooltip" data-toggle="tooltip" data-html="true" title="${findDefinition(project.other[j].other)}">
									${ project.other[j].other }
								</span>`;
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
					<div class="card-links `;

		if (project.links === undefined) {
			projectsHtml += `noLink">
							<span class="card-link more">+</span>`;
		} else {
			if (project.links.length === 2) {
				projectsHtml += `links">`;
				for (var link = 0; link < project.links.length; link++) {
					if (project.links[link].type === "git") {
						projectsHtml += `
								<a href="${ project.links[link].url }" class="card-link pjt" title="Voir sur git" target="_blank">
									<img src="resources/img/git.svg" class="svg" height="20"> Projet git
								</a>
								<span class="card-link more">+</span>
						`;
					}
					if (project.links[link].type === "report") {
						projectsHtml += `
									<a href="${ project.links[link].url }" class="card-link rpt" title="Voir le rapport" target="_blank">
										<img src="resources/img/report.svg" class="svg" height="20"> Rapport
									</a>
						`;
					} else if (project.links[link].type === "site") {
						projectsHtml += `
									<a href="${ project.links[link].url }" class="card-link site" title="Voir le site" target="_blank">
										<img src="resources/img/link.svg" class="svg" height="20"> Site web
									</a>
						`;
					}
				}
			} else if (project.links[0].type === "git") {
				projectsHtml += `links">
									<a href="${ project.links[0].url }" class="card-link pjt" title="Voir sur git" target="_blank">
										<img src="resources/img/git.svg" class="svg" height="20"> Projet git
									</a>
									<span class="card-link more">+</span>
									<span class="card-link pjt hidden"></span>
				`;
			} else {
				projectsHtml += `links">
									<span class="card-link pjt hidden"></span>
									<span class="card-link more">+</span>`;
				if (project.links[0].type === "report") {
					projectsHtml += `
									<a href="${ project.links[0].url }" class="card-link rpt" title="Voir le rapport" target="_blank">
										<img src="resources/img/report.svg" class="svg" height="20"> Rapport
									</a>
					`;
				} else if (project.links[0].type === "site") {
					projectsHtml += `
									<a href="${ project.links[0].url }" class="card-link site" title="Voir le site" target="_blank">
										<img src="resources/img/link.svg" class="svg" height="20"> Site web
									</a>
					`;
				}
			}
			
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