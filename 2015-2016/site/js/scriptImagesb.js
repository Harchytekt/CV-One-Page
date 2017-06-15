/**
 * This is the file containing the JavaScript code.
 *
 * It is used to update the differents encountered images
 * (change the image, it's color,…)
 *
 * Author: DUCOBU Alexandre
 */

/**
 * These lines are used to identify if the browser is IE 8.
 * If it's true, the icons will be png's.
 * Otherwise, they'll be svg's.
 */
 var ext;
 if (document.all && document.querySelector && !document.addEventListener) {
     /*alert('IE8');*/
 	ext = '.png';
 } else {
 	/*alert('Not IE8');*/
 	ext = '.svg';
 }

 /**
  * Init the tab look.
  *
  */
 var currentArea = "Home";
 function initTab() {
     document.getElementById(currentArea).getElementsByTagName('img')[0].src
     = 'images/nav/' + currentArea + '_Green' + ext;
 }

/**
 * Gets the name of the area matching the given name.
 * @param {String} name - The name of the area's item.
 * @return {String} The area matching the given name.
 */
function getArea(name) {
    if (name == "Accueil" || name == "Home")
        return "Home";
    else if (name == "Présentation" || name == "Presentation")
        return "Infos";
    else if (name == "Expérience" || name == "Background")
        return "Exp";
    else if (name == "Projets" || name == "Projects")
        return "Projets";
    else if (name == "Contact" || name == "Contact")
        return "Contact";
    else if (name == "En Anglais")
        return "FrEn";
    return "EnFr";
}

/**
 * Changes the source of the image defined by the given item when the mouse is
 * over it.
 * This function turns the current image into green.
 * @param {String} item - The item defining the image.
 */
function overArea(item) {
    if (item.getAttribute('data-id') != 'current') {
        area = getArea(item.getElementsByTagName('img')[0].alt);
        item.getElementsByTagName('img')[0].src = 'images/nav/' + area + '_Green' + ext;
    }
}

/**
 * Changes the source of the image defined by the given item when the mouse
 * isn't over it anymore.
 * This function turns the current image into grey (default color).
 * @param {String} item - The item defining the image.
 */
function outArea(item) {
    if (item.getAttribute('data-id') != 'current') {
        area = getArea(item.getElementsByTagName('img')[0].alt);
        item.getElementsByTagName('img')[0].src = 'images/nav/' + area + ext;
    }
}

/**
 * Changes the source of the image defined by the given item when the mouse is
 * over it.
 * This function changes the image's colors.
 * @param {String} item - The item defining the image.
 */
function curseurOver(item) {
    if (item.alt == "Allons-y !" || item.alt == "Let's go !")
        item.src = 'images/icons/Bottom_Hover' + ext;
    else
        item.src = 'images/icons/social/' + item.alt + '_Hover' + ext;
}

/**
 * Changes the source of the image defined by the given item when the mouse
 * isn't over it anymore.
 * This function changes the image's colors (default colors).
 * @param {String} item - The item defining the image.
 */
function curseurOut(item) {
    if (item.alt == "Allons-y !" || item.alt == "Let's go !")
        item.src = 'images/icons/Bottom' + ext
    else
        item.src = 'images/icons/social/' + item.alt + ext;
}

/**
 * Changes the source of the image defined by the given item when it's clicked.
 * This function changes the image's colors.
 * @param {String} item - The item defining the image.
 */
function curseurClick(item) {
    if (item.alt == "Allons-y !" || item.alt == "Let's go !")
        item.src = 'images/icons/Bottom_Clicked' + ext;
    else
        item.src = 'images/icons/social/' + item.alt + '_Clicked' + ext;
}

var newArea;
var current;
var previous;
function changeNavArea(item) {

    switch (item) {
        case "PartHome":
            newArea = "Home";
            break;
        case "PartInfos":
            newArea = "Infos";
            break;
        case "PartExp":
            newArea = "Exp";
            break;
        case "PartProjets":
            newArea = "Projets";
            break;
        case "PartContact":
            newArea = "Contact";
            break;
    }

    if (newArea != currentArea) {
        previous = document.getElementById(currentArea);
        previous.setAttribute('data-id', 'unset');
        previous.getElementsByTagName('img')[0].src = 'images/nav/' + currentArea + ext;

        current = document.getElementById(newArea);
        current.setAttribute('data-id', 'current');
        current.getElementsByTagName('img')[0].src = 'images/nav/' + newArea + '_Green' + ext;
        currentArea = newArea;
    }
}

function reset() {
    /* For each item of NAV, remove the id="current".*/
}

/*
var current = Home
==> when 'new current', remove the id="current" of the current var
    + execute 'test()'.

After, do the same when click on the NAV.
*/
