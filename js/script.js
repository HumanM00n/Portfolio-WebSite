// Icône de basculement menu burger
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// sections de défilement
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

navLinks.forEach(links => {
    links.addEventListener('click', (e) => {
        e.preventDefault();

        let targetId = links.getAttribute('href').substring(1);
        let targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 100,
            behavior: 'smooth'
        });

        // Fermer le menu burger après le clic
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset  = sec.offsetTop - 100;
        let height  = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
            });
        }
    });

    //en-tête collant
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    // Supprimer l'icône de basculement et la barre de navigation lorsque l'on clique sur les liens de la barre de navigation (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
