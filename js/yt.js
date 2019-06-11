var player;
var player2;
// var player3;


function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        width: 560,
        height: 315,
        videoId: 'IXjoT1FplCs',
        playerVars: {
            color: 'white',
            // controls: 0,
            iv_load_policy: 3,
            rel: 0,
            modestbranding: 1,
            start: 478,
            end: 498
        },
        events: {
            // onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
    player2 = new YT.Player('video-placeholder-2', {
        width: 560,
        height: 315,
        videoId: 'IXjoT1FplCs',
        playerVars: {
            color: 'white',
            // controls: 0,
            iv_load_policy: 3,
            rel: 0,
            modestbranding: 1,
            mute: 1,
            start: 499,
            end: 519
        },
        events: {
            // onReady: onPlayerReady
            onStateChange: onPlayerStateChange2
        }
    });
}

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        TweenMax.to('#video-placeholder', 1, { opacity: 1, ease: Power2.easeOut });
    }
    if (event.data == YT.PlayerState.ENDED) {
        player2.playVideo();
        TweenMax.to('#video-placeholder', 1, { opacity: .3, ease: Power2.easeIn });
        TweenMax.to('#video-placeholder-2', 1, {opacity: 1, ease: Power2.easeOut});
    }
}

function onPlayerStateChange2(event) {
    if (event.data == YT.PlayerState.ENDED) {
        TweenMax.to('#video-placeholder-2', 1, { opacity: .3, ease: Power2.easeIn });
    }
}



// function initialize() {
//     // Update the controls on load
//     addSpans();
// }
// function addSpans() {
//     var ps = document.querySelectorAll('#closed-captions p');
//     var i = 0;
//     var regex = /\S+/g;
//     while (i < ps.length) {
//         var str = ps[i].innerText;
//         var result = str.replace(regex, function (a) {
//             return "<span>" + a + "</span>";
//         });
//         ps[i].innerHTML = result;
//         ps[i].classList.add('p' + i);
//         i++;
//     }
//     updateTimerDisplay();
// }

// function updateTimerDisplay() {
//     var t = player.getCurrentTime();
//     t = Math.floor10(t, -1);
//     // for each paragraph we want to know:
//     // (paragraph number, start time, end time, current time)

//     //Officer K D 6 - 3 . 7. Let’s begin. Ready?
//     var i = 0;
//     while (i < captions.length) {
//         pTimes(i, captions[i][0], captions[i][1], t);
//         i++;
//     }
//     var i = 0;
//     while (i < sounds.length) {
//         sTimes(i, sounds[i], t);
//         i++;
//     }

//     var i = 0;
//     while (i < visuals.length) {
//         visTimes(i, visuals[i], t);
//         i++;
//     }

//     var i = 0;
//     while (i < vids.length) {
//         videosTimes(i, vids[i], t);
//         i++;
//     }

//     if (t < 142) {
//         setTimeout(() => {
//             updateTimerDisplay();
//         }, 100);
//     }

// }

// function pTimes(num, startT, endT, curT) {
//     var curP = document.querySelector('.p' + num);
//     if (curT > endT && !curP.classList.contains('off')) {
//         curP.classList.add('off');
//     }
//     if (curT < endT && curP.classList.contains('off')) {
//         curP.classList.remove('off');
//     }
//     if (curT > startT && !curP.classList.contains('on')) {
//         curP.classList.add('on');
//         // scroll to the current P to give focus
//         // curP.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
//     }
//     if (curT < startT && curP.classList.contains('on')) {
//         curP.classList.remove('on');
//     }
// }

// function sTimes(num, soundStarts, curT) {
//     var soundClass = 'sound' + num;
//     var b = document.querySelector('body');
//     if (curT > soundStarts && !b.classList.contains(soundClass)) {
//         b.classList.add(soundClass);
//     }
//     if (curT < soundStarts && b.classList.contains(soundClass)) {
//         b.classList.remove(soundClass);
//     }
// }

// (function () {
// 	/**
// 	 * Decimal adjustment of a number.
// 	 *
// 	 * @param {String}  type  The type of adjustment.
// 	 * @param {Number}  value The number.
// 	 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
// 	 * @returns {Number} The adjusted value.
// 	 */
//     function decimalAdjust(type, value, exp) {
//         // If the exp is undefined or zero...
//         if (typeof exp === 'undefined' || +exp === 0) {
//             return Math[type](value);
//         }
//         value = +value;
//         exp = +exp;
//         // If the value is not a number or the exp is not an integer...
//         if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
//             return NaN;
//         }
//         // Shift
//         value = value.toString().split('e');
//         value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
//         // Shift back
//         value = value.toString().split('e');
//         return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
//     }

//     // Decimal round
//     if (!Math.round10) {
//         Math.round10 = function (value, exp) {
//             return decimalAdjust('round', value, exp);
//         };
//     }
//     // Decimal floor
//     if (!Math.floor10) {
//         Math.floor10 = function (value, exp) {
//             return decimalAdjust('floor', value, exp);
//         };
//     }
//     // Decimal ceil
//     if (!Math.ceil10) {
//         Math.ceil10 = function (value, exp) {
//             return decimalAdjust('ceil', value, exp);
//         };
//     }
// })();




// function initialize() {
//     // Update the controls on load
//     addSpans();
// }
// function addSpans() {
//     var ps = document.querySelectorAll('#closed-captions p');
//     var i = 0;
//     var regex = /\S+/g;
//     while (i < ps.length) {
//         var str = ps[i].innerText;
//         var result = str.replace(regex, function (a) {
//             return "<span>" + a + "</span>";
//         });
//         ps[i].innerHTML = result;
//         ps[i].classList.add('p' + i);
//         i++;
//     }
//     updateTimerDisplay();
// }

// function updateTimerDisplay() {
//     var t = player.getCurrentTime();
//     t = Math.floor10(t, -1);
//     // for each paragraph we want to know:
//     // (paragraph number, start time, end time, current time)

//     //Officer K D 6 - 3 . 7. Let’s begin. Ready?
//     var i = 0;
//     while (i < captions.length) {
//         pTimes(i, captions[i][0], captions[i][1], t);
//         i++;
//     }
//     var i = 0;
//     while (i < sounds.length) {
//         sTimes(i, sounds[i], t);
//         i++;
//     }
//     // Change 136.1 to the length of your own video in seconds
//     if (t < 660) {
//         setTimeout(() => {
//             updateTimerDisplay();
//         }, 100);
//     }

// }
// function pTimes(num, startT, endT, curT) {
//     var curP = document.querySelector('.p' + num);
//     if (curT > endT && !curP.classList.contains('off')) {
//         curP.classList.add('off');
//     }
//     if (curT < endT && curP.classList.contains('off')) {
//         curP.classList.remove('off');
//     }
//     if (curT > startT && !curP.classList.contains('on')) {
//         curP.classList.add('on');
//     }
//     if (curT < startT && curP.classList.contains('on')) {
//         curP.classList.remove('on');
//     }
// }

// function sTimes(num, soundStarts, curT) {
//     var soundClass = 'sound' + num;
//     var b = document.querySelector('body');
//     if (curT > soundStarts && !b.classList.contains(soundClass)) {
//         b.classList.add(soundClass);
//     }
//     if (curT < soundStarts && b.classList.contains(soundClass)) {
//         b.classList.remove(soundClass);
//     }
// }

// (function () {
// 	/**
// 	 * Decimal adjustment of a number.
// 	 *
// 	 * @param {String}  type  The type of adjustment.
// 	 * @param {Number}  value The number.
// 	 * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
// 	 * @returns {Number} The adjusted value.
// 	 */
//     function decimalAdjust(type, value, exp) {
//         // If the exp is undefined or zero...
//         if (typeof exp === 'undefined' || +exp === 0) {
//             return Math[type](value);
//         }
//         value = +value;
//         exp = +exp;
//         // If the value is not a number or the exp is not an integer...
//         if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
//             return NaN;
//         }
//         // Shift
//         value = value.toString().split('e');
//         value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
//         // Shift back
//         value = value.toString().split('e');
//         return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
//     }

//     // Decimal round
//     if (!Math.round10) {
//         Math.round10 = function (value, exp) {
//             return decimalAdjust('round', value, exp);
//         };
//     }
//     // Decimal floor
//     if (!Math.floor10) {
//         Math.floor10 = function (value, exp) {
//             return decimalAdjust('floor', value, exp);
//         };
//     }
//     // Decimal ceil
//     if (!Math.ceil10) {
//         Math.ceil10 = function (value, exp) {
//             return decimalAdjust('ceil', value, exp);
//         };
//     }
// })();