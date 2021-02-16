function animateTop(obj, target, callback) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        let step = (target - document.documentElement.scrollTop) / 10;
        step = Math.floor(step);
        if (document.documentElement.scrollTop == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        } else {
            document.documentElement.scrollTop += step;
        }
    }, 50);
}