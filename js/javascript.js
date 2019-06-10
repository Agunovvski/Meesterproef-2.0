var circleMouse = document.querySelector('.circle');



new fullpage('#fullpage', {
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    controlArrows: false,
    slidesNavigation: true,
    loopHorizontal: false,
    verticalCentered: false,
    afterRender: function () {
        var pluginContainer = this;

        animateHead();
    },
    afterSlideLoad: function (section, origin, destination, direction) {
        var loadedSlide = this;

        //first slide of the second section
        if (section.index == 0 && destination.index == 1) {
            revealText();
            console.log('Succesfull!');
        }
    },
    onSlideLeave: function (section, origin, destination, direction) {
        var leavingSlide = this;

        //leaving the first slide of the 2nd Section to the right
        if (section.index == 0 && origin.index == 0 && direction == 'right') {
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

    var tlAnimateHead = new TimelineMax({ repeat: 0, paused: false, yoyo: false });

    tlAnimateHead
    .set('.welcome', {opacity: 0, y: 50})
        .set('#fullpage', { scale: .5, opacity: 0})
    .to('#fullpage', 2, { opacity: 1,scale: 1, ease: Power2.easeOut})
    .staggerTo('.welcome', 1, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut
    }, .5, '+=.5');

    return tlAnimateHead;

}

function revealText() {

    var tlrevealText = new TimelineMax({ repeat: 0, paused: false, yoyo: false });

    tlrevealText
        .set('.section .slide:nth-of-type(2) .layout-grid p', { opacity: 0, y: 50 })
        .staggerTo('.section .slide:nth-of-type(2) .layout-grid p', 1, {
            opacity: 1,
            y: 0,
            ease: Power2.easeOut
        }, .2);

    return tlrevealText;

}


// callbacks

window.addEventListener('mousemove', moveCircle);






// Parallex effect, src = https://codepen.io/victorwork/pen/OxebaL

var layout = document.querySelector('.fp-slidesContainer');
var rect = layout.getBoundingClientRect();
var mouse = { x: 0, y: 0, moved: false };


layout.addEventListener('mousemove', function (e) {
    mouse.moved = true;
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});


// Ticker event will be called on every frame
TweenMax.ticker.addEventListener('tick', function () {
    if (mouse.moved) {
        parallaxIt("p", -50);
        parallaxIt("h1", -30);
        parallaxIt("#fullpage", -10);
    }
    mouse.moved = false;
});

function parallaxIt(target, movement) {
    TweenMax.to(target, 0.3, {
        x: (mouse.x - rect.width / 2) / rect.width * movement,
        y: (mouse.y - rect.height / 2) / rect.height * movement
    });
}

window.addEventListener('resize scroll', function () {
    rect = layout.getBoundingClientRect();
});