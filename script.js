/*=============== Toggle icon navbar =================== */
var menuIcon = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*==========Scroll Sections Active Link==================*/
var sections = document.querySelectorAll('section');
var navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        var top = window.scrollY;
        var offset = sec.offsetTop - 150;
        var heigth = sec.offsetHeight;
        var id = sec.getAttribute('id');

        if(top >= offset && top < offset + heigth){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });

/*==========Scroll Sections Active Link==================*/

    var header = document.querySelector('header');

    header.classList.toggle('sticky',window.screenY > 100);

/*====Remove Toggle Icon and Navbar when click navbar link (scroll)*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');


};

/*==========Scroll Reveal =================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delat: 200
});

ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-contact h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-contact p,.about-content',{origin:'right'});