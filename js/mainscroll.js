(function() {
    var H = document.documentElement.clientHeight;
    var fontSize = H / 10;
    var curShowPage = 0;
    document.documentElement.style.fontSize = fontSize + 'px';
    var myScroll;
    var elements = [];
    var length = $('.bg-img').length;
    for (var i = 0; i < length; i++) {
        elements.push($('.bg-img').eq(i));
    }
    $('.cssloader').hide();
    window.onload = function() {
        myScroll = new IScroll('#wrapper', {
            probeType: 3,
            indicators: [{
                el: document.getElementById('starfield1'),
                resize: false,
                ignoreBoundaries: true,
                speedRatioY: 0.7
            }]
        });
        myScroll.on('scroll', function() {
            var y = -myScroll.y;
            var page = ((y / H) >> 0);
            var opacity = y < 0 ? 0 : (y % H) / H;
            var scale = opacity / 2 + 1;
            elements[page].css({
                'opacity': 1 - opacity,
                '-webkit-transform': 'scale3d(' + scale + ', ' + scale + ', 1)',
                'transform': 'scale3d(' + scale + ', ' + scale + ', 1)'
            });
            if (elements[page + 1])
                elements[page + 1].css('opacity', opacity);
        });
    }

    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
        return false;
    }, false);
})();