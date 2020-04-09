$(document).ready(function () {


    // // ScrollReveal().reveal('.animation', { delay: 800 });
    // let mouseCursor = document.querySelector('.cursor');
    // let navBrand = document.querySelector('.brand a');
    // let navLinks = document.querySelectorAll('.menu-desktop li');

    // window.addEventListener('mousemove', cursor);

    // console.log(navBrand);

    // function cursor(e){
    //     mouseCursor.style.top = e.pageY + 'px';
    //     mouseCursor.style.left = e.pageX + 'px';
    // }

    // navBrand.addEventListener('mouseleave', () => {
    //     mouseCursor.classList.remove('link-grow');
    //     this.classList.remove('hovered-link');
    // });

    // navBrand.addEventListener('mouselover', () => {
    //     mouseCursor.classList.add('link-grow');
    //     this.classList.add('hovered-link');
    // });

    // navLinks.forEach(element => {
    //     element.addEventListener('mouseleave',() => {
    //         mouseCursor.classList.remove('link-grow');
    //         element.classList.remove('hovered-link');
    //     });

    //     element.addEventListener('mouseover',() => {
    //         mouseCursor.classList.add("link-grow");
    //         element.classList.add("hovered-link");
    //     });
    // });
        
    // $('.slider-work').slick({
    //     // dots: true,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 2,
    //     centerMode: true,
    //     // variableWidth: true
    // });
        

    $('.slider-work').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 2,
        // centerMode: true,
        // centerPadding: '40px',
        responsive: [
            {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    });

    $('.next').click(function (e) { 
        e.preventDefault();
        $('.slider-work').slick('slickNext');
    });

    $('.prev').click(function (e) { 
        e.preventDefault();
        $('.slider-work').slick('slickPrev');
    });
    

    $('.slider-detail').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        centerMode: false,
        autoplay: false
    });

});

