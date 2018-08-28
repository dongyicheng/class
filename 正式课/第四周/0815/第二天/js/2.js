function fn1(a,json,endfn) {
    clearInterval(a.timer);
    a.timer = setInterval(function () {
        var bstop = true;
        for (var attr in json) {
            if (attr == 'opacity') {
                var c = parseInt(parseFloat(getstyle(a, attr)) * 100);
            } else {
                var c = parseInt(getstyle(a, attr));
            }
            var speed = (json[attr] - c) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (c != json[attr]) {
                bstop = false;
            }
            if (attr == 'opacity') {
                a.style[attr] = (c + speed) / 100;
            } else {
                a.style[attr] = c + speed + 'px';
            }
        }
        if (bstop) {
            clearInterval(a.timer);
            endfn && endfn();
        }
    }, 14)

    function getstyle(a, b) {
        return getComputedStyle(a)[b];
    }
}