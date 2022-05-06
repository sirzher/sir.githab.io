var $orbs = $('.orbs span');
$('.end-right').css('left', '-10%');
$('.end-left').css('left', '110%');
var orb = 0;
var numOrbs = $orbs.length;



dropOrbs = function () {
    orb = orb + 1;
    if (orb < numOrbs) {
        setTimeout(dropOrbs, 100);
    }
    else {

    }

}

setTimeout(dropOrbs, 400);