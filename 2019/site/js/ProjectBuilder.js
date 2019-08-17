var currentProject;

function addOneProject(project) {
	currentProject = project;
	return `
		<!-- Start project's summary -->
		${ addSummary() }
		<!-- End project's summary -->
		<!-- Start tech -->
		<div class="tech" hidden>${ addTechs() }</div>
		<!-- End tech -->
		<br>
		<!-- Start links -->
		<div class="card-links ${ addLinks() }
		</div>
		<!-- End links -->`;
}

function addSummary() {
	var summaryHtml = ``;
	if (currentProject.isForSchool !== undefined && currentProject.isForSchool) {
		summaryHtml += `<img src="resources/img/school.svg" class="svg school" height="64" title="Projet scolaire">`;
	}

	summaryHtml += `
		<h5 class="card-title" title="${ currentProject.period !== undefined ? currentProject.period : currentProject.title }">${ currentProject.title }</h5>
		<div class="desc">
			<p class="card-text">
			<sup class="period">${currentProject.period}</sup> <br>`;

	for (var j = 0; j < currentProject.description.length; j++) {
		summaryHtml += `${ currentProject.description[j].line }`;
		if (j < currentProject.description.length - 1) {
			summaryHtml += `<br>`;
		}
	}
	return summaryHtml += `</p></div>`;
}

function addTechs() {
	var techHtml = ``;
	if (currentProject.subtitle !== undefined) {
		techHtml += `<h6 class="card-subtitle mb-2 text-muted">${ currentProject.subtitle }</h6>`;
	}
	techHtml += `<p class="card-text role">`;
	if (currentProject.role !== undefined) {
		techHtml += `<strong>${ lang === 'En' ? 'Role' : 'Rôle ' }:</strong> <br>`;
		for (var j = 0; j < currentProject.role.length; j++) {
			techHtml += `${ currentProject.role[j].name }`;
			if (j < currentProject.role.length -1) {
				techHtml += `, `;
			}
		}
		techHtml += ` <br>`;
	}
	return techHtml + `</p>
				<p class="card-text">
					${ addOneTech(`${ lang === 'En' ? 'Environment' : 'Environnement ' }`, currentProject.env) }
					${ addOneTech(`${ lang === 'En' ? 'Frameworks' : 'Frameworks ' }`, currentProject.framework) }
					${ addOneTech(`${ lang === 'En' ? 'Methodology' : 'Méthodologie ' }`, currentProject.meth) }
					${ addOneTech(`${ lang === 'En' ? 'Build automation' : 'Moteur de production ' }`, currentProject.build) }
					${ addOneTech(`${ lang === 'En' ? 'Tool' : 'Outils ' }`, currentProject.tool) }
					${ addOneTech(`${ lang === 'En' ? 'Other' : 'Autres ' }`, currentProject.other) }
				</p>`;
}

function addOneTech(techName, techList) {
	var currentTechHtml = ``;
	if (techList !== undefined) {
		currentTechHtml += `<strong>${ techName }:</strong> <br>`;
		for (var j = 0; j < techList.length; j++) {
			currentTechHtml += `
							<span class="defTooltip" data-toggle="tooltip" data-html="true" title="${ findDefinition(techList[j].name) }">
								${ techList[j].name }
							</span>`;
			if (j < techList.length -1) {
				currentTechHtml += `, `;
			}
		}
		currentTechHtml += ` <br>`;
	}
	return currentTechHtml;
}

function findDefinition(name) {
	for (var def = 0; def < definitions.length; def++) {
		if (name === definitions[def].title) {
			return definitions[def].description;
		}
	}
	return "Aucune définition trouvée";
}

function addLinks() {
	var linksHtml = ``;
	if (currentProject.links === undefined) {
		linksHtml += `
			noLink">
				<span class="card-link more" title="${ lang === 'En' ? 'See more' : 'Voir plus' }">+</span>`;
	} else {
		if (currentProject.links.length === 2) {
			linksHtml += `
			links">`;
			for (var link = 0; link < currentProject.links.length; link++) {
				if (currentProject.links[link].type === 'git') {
					linksHtml += `
				${ addOneLink('git', currentProject.links[link].url) }
				<span class="card-link more" title="${ lang === 'En' ? 'See more' : 'Voir plus' }">+</span>
					`;
				}
				if (currentProject.links[link].type === 'report') {
					linksHtml += `${ addOneLink('report', currentProject.links[link].url) }`;
				} else if (currentProject.links[link].type === 'site') {
					linksHtml += `${ addOneLink('site', currentProject.links[link].url) }`;
				}
			}
		} else if (currentProject.links[0].type === 'git') {
			linksHtml += `
			links">
				${ addOneLink('git', currentProject.links[0].url) }
				<span class="card-link more" title="${ lang === 'En' ? 'See more' : 'Voir plus' }">+</span>
				<span class="card-link pjt hidden"></span>
			`;
		} else {
			linksHtml += `
			links">
				<span class="card-link pjt hidden"></span>
				<span class="card-link more" title="${ lang === 'En' ? 'See more' : 'Voir plus' }">+</span>`;
			if (currentProject.links[0].type === 'report') {
				linksHtml += `${ addOneLink('report', currentProject.links[0].url) }`;
			} else if (currentProject.links[0].type === 'site') {
				linksHtml += `${ addOneLink('site', currentProject.links[0].url) }`;
			}
		}
	}
	return linksHtml;
}

function addOneLink(type, link) {
	var title = ``;
	var text = ``;
	var className = ``;
	var icon = ``;

	if (type === 'git') {
		title = `${ lang === 'En' ? 'See the repo' : 'Voir le dépôt' }`;
		text = `${ lang === 'En' ? 'git project' : 'Projet git' }`;
		className = `pjt`;
		icon = type;
	} else if (type === 'report') {
		title = `${ lang === 'En' ? 'See the report' : 'Voir le rapport' }`;
		text = `${ lang === 'En' ? 'Report' : 'Rapport' }`;
		className = `rpt`;
		icon = `report`;
	} else {
		title = `${ lang === 'En' ? 'See the website' : 'Voir le site web' }`;
		text = `${ lang === 'En' ? 'Website' : 'Site web' }`;
		className = `site`;
		icon = `link`;
	}
	return `<a href="${ link }" class="card-link ${ className }" title="${ title }" target="_blank">
				<img src="resources/img/${ icon }.svg" class="svg" height="20"> ${ text }
			</a>`;
}