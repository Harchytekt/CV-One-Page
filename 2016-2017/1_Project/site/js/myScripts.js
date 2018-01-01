/* Begin init site + animate social icons and vignettes */

$(document).ready(function() {
    setAge();
    setYear();
    initBars();
    updateBannersBg();
    $('header').slideDown({duration: 800});
    $('main').slideDown({duration: 800});
    $('#imgMe').slideDown({duration: 800});

    $('.arrowContainer').click(function() {
        if ($(this).attr('class') == 'arrowContainer down') {
            $(this).attr('class', 'arrowContainer up');
            $(this).parent().css("width", "100%");
            if ($(this).closest(".large").length) {
                $(this).parent().find(".hidden").stop().show(2000);
            } else if ($(this).closest(".right").length) {
                $(this).parent().find(".hidden").stop().show(200).queue(displayBars());
            } else {
                $(this).parent().find(".hidden").stop().show(200);
            }
        } else {
            $(this).attr('class', 'arrowContainer down');
            if ($(window).width() > 1024 && $(this).parent().attr("class") != "vignette large") {
                $(this).parent().css("width", "48%");

            }
            if ($(this).closest(".right").length) {
                $(this).parent().find(".hidden").stop().hide(2000).queue(clearBars());
            } else {
                $(this).parent().find(".hidden").stop().hide(2000);
            }
        }
    });

    // Animate the social icons + show the username/email address
    $('.social').mouseenter(function() {
        shake($(this));
        $(this).children('.hiddenFeature').css("visibility", "visible");
        $(this).children('.hiddenFeature').css("opacity", "1");
    });
    // Stop the animation on the social iconsand hide the username/email address
    $('.social').mouseleave(function() {
        $(this).stop(true);
        $(this).children('.hiddenFeature').css("visibility", "hidden");
        $(this).children('.hiddenFeature').css("opacity", "0");
    });

    // Animate change language label
    $('#changeLang').mouseenter(function() {
        $(this).children('.hiddenFeature').css("bottom", "45px");
        $(this).children('.hiddenFeature').css("visibility", "visible");
        $(this).children('.hiddenFeature').css("opacity", "1");
    });
    // Stop the animation of the change language label
    $('#changeLang').mouseleave(function() {
        $(this).stop(true);
        $(this).children('.hiddenFeature').animate({
            right: 0,
            bottom: 40
        });
        $(this).children('.hiddenFeature').css("visibility", "hidden");
        $(this).children('.hiddenFeature').css("opacity", "0");
    });

    // Animate the arrow of the vignette
    $('.arrowContainer').mouseenter(function() {
        for (var i = 0; i < 20; i++) {
            var item = $(this).children('.arrowLabel');
            item.animate({bottom: '-4px'}, "slow");
            item.animate({bottom: '4px'}, "slow");
        }
    });
    // Stop the animation of the arrow of the vignette
    $('.arrowContainer').mouseleave(function() {
        var item = $(this).children('.arrowLabel');
        item.stop(true);
        item.animate({bottom: '2px'}, "slow");
    });
    //Change stylesheet and the linked icon.
    $('.img-zoom').hover(function() {
        $(this).addClass('transition');

    }, function() {
        $(this).removeClass('transition');
    });
    $('#changeStyle').click(function() {
        if ($(this).children('#sun').length) {
            $('#theme').attr('href', 'style/whiteTheme.css');
            $(this).children('#sun').attr('src', 'img/footer/moon.svg');
            $(this).children('#sun').attr('id', 'moon');
        } else {
            $('#theme').attr('href', 'style/devTheme.css');
            $(this).children('#moon').attr('src', 'img/footer/sun.svg');
            $(this).children('#moon').attr('id', 'sun');
        }
        updateBannersBg();
    });
    // Change the width of the left and right vignettes at window's resize.
    var size = 0;
    $(window).on('resize', function() {
        if ($(this).width() <= 1024 && size != -1) {
            $('.vignette.left').css("width", "100%");
            $('.vignette.right').css("width", "100%");
            size = -1;
        } else if ($(this).width() > 1024 && size != 1) {
            $('.vignette.left').css("width", "48%");
            $('.vignette.right').css("width", "48%");
            size = 1;
        }
    });
});

/* End init site + animate social icons and vignettes */

/* Begin set navbar's background */

var firstItem = document.getElementsByTagName('header')[0];
var secondItem = document.getElementsByTagName('footer')[0];
var ua = navigator.userAgent.toLowerCase();
var theme = "black";
function updateBannersBg() {
    if (ua.indexOf('safari') != -1 && ua.indexOf('chrome') <= -1) {
        //Only for Safari
        firstItem.style.webkitBackdropFilter = 'blur(6px)';
        secondItem.style.webkitBackdropFilter = 'blur(6px)';
    } else {
        if ($('#changeStyle').children('#sun').length) {
            theme = "black";
            $('#centerFooter').css("font-family", "'Helvetica Neue', 'Exo 2', sans-serif")
        } else {
            theme = "white";
            $('#centerFooter').css("font-family", "Monaco, Menlo, Consolas, Calibri, Arial, sans-serif")
        }
        firstItem.style.backgroundImage = 'url(img/bgs/'+theme+'-background.png)';
        secondItem.style.backgroundImage = 'url(img/bgs/'+theme+'-background.png)';
    }
}

/* End set navbar's background */

/* Begin shake function for social icons */

/* Adaptable SHAKE function, from
    https://bradleyhamilton.com/projects/shake/index.html */
function shake(thing) {
    var interval = 100;
    var distance = 5;
    var times = 6;

    for (var i = 0; i < (times + 1); i++) {
        $(thing).animate({
            left: (i % 2 == 0 ? distance : distance * -1)
        }, interval);
    }
    $(thing).animate({
        left: 0,
        top: 0
    }, interval*3);
}

/* End shake function for social icons */

/* Begin Progress bars */

function initBars() {
    bash = new ProgressBar.Line(bashBar, {
      strokeWidth: 1,
      easing: 'bounce',
      duration: 1400,
      color: '#2B3539',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '5px'}
    });
    beamer = new ProgressBar.Line(beamerBar, {
      strokeWidth: 1,
      easing: 'bounce',
      duration: 1400,
      color: '#6CC7E2',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '5px'}
    });
    c = new ProgressBar.Line(cBar, {
      strokeWidth: 1,
      easing: 'bounce',
      duration: 1400,
      color: '#A8B9CC',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '5px'}
    });
    cpp = new ProgressBar.Line(cppBar, {
      strokeWidth: 1,
      easing: 'bounce',
      duration: 1400,
      color: '#FF0132',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '5px'}
    });
    cs = new ProgressBar.Line(csBar, {
      strokeWidth: 1,
      easing: 'bounce',
      duration: 1400,
      color: '#0178D6',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '5px'}
    });
    css = new ProgressBar.Line(cssBar, {
      strokeWidth: 1,
      easing: 'bounce',
      duration: 1400,
      color: '#2EA8E3',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '5px'}
    });
    html = new ProgressBar.Line(htmlBar, {
      strokeWidth: 1,
      easing: 'bounce',
      duration: 1400,
      color: '#F16529',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '5px'}
    });
    java = new ProgressBar.Line(javaBar, {
      strokeWidth: 1,
      easing: 'bounce',
      duration: 1400,
      color: '#EA2D2E',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '5px'}
    });
    jq = new ProgressBar.Line(jqBar, {
      strokeWidth: 1,
      easing: 'bounce',
      duration: 1400,
      color: '#0668AD',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '5px'}
    });
    js = new ProgressBar.Line(jsBar, {
      strokeWidth: 1,
      easing: 'bounce',
      duration: 1400,
      color: '#FFD93D',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '5px'}
    });
    latex = new ProgressBar.Line(latexBar, {
      strokeWidth: 1,
      easing: 'bounce',
      duration: 1400,
      color: '#FF0000',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '5px'}
    });
    md = new ProgressBar.Line(mdBar, {
      strokeWidth: 1,
      easing: 'bounce',
      duration: 1400,
      color: '#000',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '5px'}
    });
    mips = new ProgressBar.Line(mipsBar, {
      strokeWidth: 1,
      easing: 'bounce',
      duration: 1400,
      color: '#650F4D',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '5px'}
    });
    python = new ProgressBar.Line(pythonBar, {
      strokeWidth: 1,
      easing: 'bounce',
      duration: 1400,
      color: '#FFDC53',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '5px'}
    });
    php = new ProgressBar.Line(phpBar, {
      strokeWidth: 1,
      easing: 'bounce',
      duration: 1400,
      color: '#6C7EB7',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '5px'}
    });
    sql = new ProgressBar.Line(sqlBar, {
      strokeWidth: 1,
      easing: 'bounce',
      duration: 1400,
      color: '#E48E00',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: {width: '100%', height: '5px'}
    });
}

function displayBars() {
    setTimeout(function () {
        bash.animate(0.6);
        beamer.animate(0.7);
        c.animate(0.75);
        cpp.animate(0.65);
        cs.animate(0.8);
        css.animate(0.85);
        html.animate(0.85);
        java.animate(0.85);
        jq.animate(0.5);
        js.animate(0.6);
        latex.animate(0.7);
        md.animate(0.85);
        mips.animate(0.55);
        python.animate(0.85);
        php.animate(0.5);
        sql.animate(0.65);
    }, 1000);

}

function clearBars() {
    bash.animate(0);
    beamer.animate(0);
    c.animate(0);
    cpp.animate(0);
    cs.animate(0);
    css.animate(0);
    html.animate(0);
    java.animate(0);
    jq.animate(0);
    js.animate(0);
    latex.animate(0);
    md.animate(0);
    mips.animate(0);
    python.animate(0);
    php.animate(0);
    sql.animate(0);
}

/* End Progress bars */


/* Begin Calculate Age */

function setAge() {
    var datesDifference = Date.now() - new Date('1994-06-21').getTime();
    var ageMilli = new Date(datesDifference);
    var age = Math.abs(ageMilli.getFullYear() - 1970);
    document.getElementById("age").innerHTML = age;
}

/* End Calculate Age */

/* Begin Set Year */

function setYear() {
    var year = (new Date()).getFullYear();
    document.getElementById('currentYear').innerHTML = " - " + year;
}

/* End Set Year */
