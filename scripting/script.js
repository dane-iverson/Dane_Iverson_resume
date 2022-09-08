let scroll = requestAnimationFrame || function (c) {
    window.setTimeout(c, 1000 / 60)
};

let scrollElements = document.querySelectorAll('.show-on-scroll');

function loop() {
    scrollElements.forEach(function (e) {
        if (isElementInView(e)) {
            e.classList.add('is-visible')
        } else {
            e.classList.remove('is-visible')
        }
    });
    scroll(loop);

};

loop();

function isElementInView(el) {
    //is jquery the find
    if (typeof jQuery === 'function' && el instanceof jQuery) {
        el = el[0];
    }
    //checks rectangle around element
    let rect = el.getBoundingClientRect();
    //returns true if element is on page and on screen
    return (
        (rect.top <= 0 &&
            rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document
                .documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document
                .documentElement.clientHeight)) ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document
                .documentElement.clientHeight))
    )
}