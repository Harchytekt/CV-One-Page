/**
 * This is the file containing the JavaScript code.
 *
 * It is used to update the differents encountered images
 * (change the image, it's color,…)
 *
 * Author: DUCOBU Alexandre
 */

 var currentHoverImg;
 var newPart;
 var newCurrent;
 var isOnScroll = false;
 var isClicked  = false;

$(document).ready(function() {

    setToGreen($('#current img'));
    updateCurrent();

    $('.link').mouseenter(function() {
        if ($(this).attr('id') != 'current') {
            currentHoverImg = $(this).children().children();
            setToGreen(currentHoverImg);
        }
    });
    $('.link').mouseleave(function() {
        if ($(this).attr('id') != 'current') {
            setLinkToDefault(currentHoverImg);
        }
    });
    $('.link').click(function() {
        if ($(this).attr('id') != 'current') {
            setLinkToDefault($('#current img'));
            $('#current').attr('id', '');
            $(this).attr('id', 'current');
            setNewPart($(this).attr('class').substr(5));
        }
    });
    $(window).scroll(function() {
        if (!isOnScroll) {
            updateCurrent();
        }
    });

    $('#social img').mouseenter(function() {
        setSocialHover($(this));
    });
    $('.btnBottom img').mouseenter(function() {
        setSocialHover($(this));
        $(this).attr('id', '');
    });
    $('#social img').mouseleave(function() {
        setSocialDefault($(this));
    });
    $('.btnBottom img').mouseleave(function() {
        setSocialDefault($(this));
    });
    $('#social img').mousedown(function() {
        setSocialClicked($(this));
    });
    $('.btnBottom img').mousedown(function() {
        if ($(this).attr('id') != 'clicked') {
            setSocialClicked($(this));
            $(this).attr('id', 'clicked');
        }
    });
    $('.btnBottom').click(function() {
        if ($(this).attr('id') != 'clicked') {
            $(this).attr('id', 'clicked');
            setLinkToDefault($('#current img'));
            $('#current').attr('id', '');
            setToGreen($('.link.infos').children().children())
            $('.link.infos').attr('id', 'current');
        }
        setNewPart('infos');
    });
});

// Link

function setToGreen(chosenIMG) {
    var imgPath       = chosenIMG.attr('src');
    var currentLength = imgPath.length;
    var currentPath   = imgPath.substr(0, currentLength-4);
    var currentExt    = imgPath.substr(currentLength-4);
    chosenIMG.attr('src', currentPath + '_Green' + currentExt);
}

function setLinkToDefault(chosenIMG) {
    var imgPath       = chosenIMG.attr('src');
    var currentLength = imgPath.length;
    var currentPath   = imgPath.substr(0, currentLength-10);
    var currentExt    = imgPath.substr(currentLength-4);
    chosenIMG.attr('src', currentPath + currentExt);
}

function setNewPart(chosenPart) {
    getPart(chosenPart);
    isOnScroll = true;
    scrollTo();
}

function setCurrent(chosenCurrent) {
    getClass(chosenCurrent);
    if ($('.'+newCurrent).attr('id') != 'current') {
        setLinkToDefault($('#current img'));
        $('#current').attr('id', '');
        $('.'+newCurrent).attr('id', 'current');
        setToGreen($('#current img'));
    }
}

function scrollTo() {
    $('html, body').stop().animate({
        scrollTop: $(newPart).offset().top
    }, 2000);
    setTimeout(function () {
        isOnScroll = false;
    }, 2010);
}

function getPart(chosenPart) {
    switch (chosenPart) {
        case 'infos':
            newPart = '#PartInfos';
            break;
        case 'exp':
            newPart = '#PartExp';
            break;
        case 'projets':
            newPart = '#PartProjets';
            break;
        case 'contact':
            newPart = '#PartContact';
            break;
        default:
            newPart = '#PartHome';
            break;
    }
}

function getClass(chosenCurrent) {
    switch (chosenCurrent) {
        case 'PartInfos':
            newCurrent = 'infos';
            break;
        case 'PartExp':
            newCurrent = 'exp';
            break;
        case 'PartProjets':
            newCurrent = 'projets';
            break;
        case 'PartContact':
            newCurrent = 'contact';
            break;
        default:
            newCurrent = 'home';
            break;
    }
}

function updateCurrent() {
    var scroll = $(window).scrollTop();
    $('.section').each(function() {

        var middleSection = 3 * ($(this).offset().top + $(this).outerHeight()) / 4;
        var bottomWindow = $(window).scrollTop() + $(window).height();

        if(bottomWindow > middleSection){
            setCurrent($(this).attr('id'));
        }
    });
}

// Social

function setSocialHover(chosenIMG) {
    var imgPath       = chosenIMG.attr('src');
    var currentLength = imgPath.length;
    var currentPath   = imgPath.substr(0, currentLength-4);
    var currentExt    = imgPath.substr(currentLength-4);
    chosenIMG.attr('src', currentPath + '_Hover' + currentExt);
}

function setSocialDefault(chosenIMG) {
    var imgPath       = chosenIMG.attr('src');
    var currentLength = imgPath.length;
    var currentExt    = imgPath.substr(currentLength-4);
    var currentPath;
    if (isClicked) {
        currentPath = imgPath.substr(0, currentLength-12);
        isClicked   = false;
    } else {
        currentPath = imgPath.substr(0, currentLength-10);
    }
    chosenIMG.attr('src', currentPath + currentExt);
}

function setSocialClicked(chosenIMG) {
    isClicked         = true;
    var imgPath       = chosenIMG.attr('src');
    var currentLength = imgPath.length;
    var currentPath   = imgPath.substr(0, currentLength-10);
    var currentExt    = imgPath.substr(currentLength-4);
    chosenIMG.attr('src', currentPath + '_Clicked' + currentExt);
}
