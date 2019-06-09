var circleMouse = document.querySelector('.circle');



new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    navigationTooltips: ['Intro', 'About', 'Section3', 'Section4'],
    showActiveTooltip: true,
    controlArrows: false,
    slidesNavigation: true,
    loopHorizontal: false,
    // anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
    afterSlideLoad: function (section, origin, destination, direction) {
        var loadedSlide = this;

        //first slide of the second section
        if (section.index == 0 && destination.index == 1) {
            animateHead();
            console.log('Succesfull!');
        }
    }
});

//methods
fullpage_api.setAllowScrolling(true);




// greensock functions

function moveCircle(e) {
    TweenMax.to(circleMouse, 0.3, {
        left: e.pageX,
        top: e.pageY
    });
}

function animateHead() {

    var tlAnimateHead = new TimelineMax({ repeat: 0, paused: false, yoyo: true });

    tlAnimateHead.from('h1', 1, {
        opacity: 0,
        x: 50
    });

    return tlAnimateHead;

}


// callbacks

window.addEventListener('mousemove', moveCircle);