$(document).ready(function () {

    // ScrollReveal().reveal('.animation', { delay: 800 });
    let mouseCursor = document.querySelector('.cursor');
    let navLinks = document.querySelector('.menu-desktop li');

    window.addEventListener('mouseover', cursor);

    function cursor(e){
        mouseCursor.style.top = e.pageY + 'px';
        mouseCursor.style.left = e.pageX + 'px';
    }

    navLinks.forEach(element => {
        element.addEventListener('mouseleave',() => {
            mouseCursor.classList.remove('link-grow');
        });

        element.addEventListener('mouseover',() => {
            mouseCursor.classList.add('link-grow');
        });
    });
    

    

});