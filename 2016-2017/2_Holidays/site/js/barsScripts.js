$(document).ready(function() {
    initBars();
	displayBars();
});

/* Begin Progress bars */

function initBars() {
    bash = new ProgressBar.Line(bashBar, {
        strokeWidth: 1,
        easing: 'bounce',
        duration: 1400,
        color: '#2B3539',
        trailColor: '#FFF',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '5px'}
    });
    beamer = new ProgressBar.Line(beamerBar, {
        strokeWidth: 1,
        easing: 'bounce',
        duration: 1400,
        color: '#6CC7E2',
        trailColor: '#FFF',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '5px'}
    });
    c = new ProgressBar.Line(cBar, {
        strokeWidth: 1,
        easing: 'bounce',
        duration: 1400,
        color: '#A8B9CC',
        trailColor: '#FFF',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '5px'}
    });
    cpp = new ProgressBar.Line(cppBar, {
        strokeWidth: 1,
        easing: 'bounce',
        duration: 1400,
        color: '#FF0132',
        trailColor: '#FFF',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '5px'}
    });
    cs = new ProgressBar.Line(csBar, {
        strokeWidth: 1,
        easing: 'bounce',
        duration: 1400,
        color: '#0178D6',
        trailColor: '#FFF',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '5px'}
    });
    css = new ProgressBar.Line(cssBar, {
        strokeWidth: 1,
        easing: 'bounce',
        duration: 1400,
        color: '#2EA8E3',
        trailColor: '#FFF',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '5px'}
    });
    html = new ProgressBar.Line(htmlBar, {
        strokeWidth: 1,
        easing: 'bounce',
        duration: 1400,
        color: '#F16529',
        trailColor: '#FFF',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '5px'}
    });
    java = new ProgressBar.Line(javaBar, {
        strokeWidth: 1,
        easing: 'bounce',
        duration: 1400,
        color: '#EA2D2E',
        trailColor: '#FFF',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '5px'}
    });
    jq = new ProgressBar.Line(jqBar, {
        strokeWidth: 1,
        easing: 'bounce',
        duration: 1400,
        color: '#0668AD',
        trailColor: '#FFF',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '5px'}
    });
    js = new ProgressBar.Line(jsBar, {
        strokeWidth: 1,
        easing: 'bounce',
        duration: 1400,
        color: '#FFD93D',
        trailColor: '#FFF',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '5px'}
    });
    julia = new ProgressBar.Line(juliaBar, {
        strokeWidth: 1,
        easing: 'bounce',
        duration: 1400,
        color: '#AA7DC0',
        trailColor: '#FFF',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '5px'}
    });
    latex = new ProgressBar.Line(latexBar, {
        strokeWidth: 1,
        easing: 'bounce',
        duration: 1400,
        color: '#FF0000',
        trailColor: '#FFF',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '5px'}
    });
    md = new ProgressBar.Line(mdBar, {
        strokeWidth: 1,
        easing: 'bounce',
        duration: 1400,
        color: '#000',
        trailColor: '#FFF',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '5px'}
    });
    mips = new ProgressBar.Line(mipsBar, {
        strokeWidth: 1,
        easing: 'bounce',
        duration: 1400,
        color: '#650F4D',
        trailColor: '#FFF',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '5px'}
    });
    python = new ProgressBar.Line(pythonBar, {
        strokeWidth: 1,
        easing: 'bounce',
        duration: 1400,
        color: '#FFDC53',
        trailColor: '#FFF',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '5px'}
    });
    php = new ProgressBar.Line(phpBar, {
        strokeWidth: 1,
        easing: 'bounce',
        duration: 1400,
        color: '#6C7EB7',
        trailColor: '#FFF',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '5px'}
    });
    sql = new ProgressBar.Line(sqlBar, {
        strokeWidth: 1,
        easing: 'bounce',
        duration: 1400,
        color: '#E48E00',
        trailColor: '#FFF',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '5px'}
    });
}

function displayBars() {
    //setTimeout(function () {
        bash.animate(0.6);
        beamer.animate(0.65);
        c.animate(0.75);
        cpp.animate(0.6);
        cs.animate(0.8);
        css.animate(0.85);
        html.animate(0.85);
        java.animate(0.85);
        jq.animate(0.7);
        js.animate(0.65);
        julia.animate(0.5);
        latex.animate(0.7);
        md.animate(0.9);
        mips.animate(0.55);
        python.animate(0.85);
        php.animate(0.6);
        sql.animate(0.65);
    //}, 200);

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
