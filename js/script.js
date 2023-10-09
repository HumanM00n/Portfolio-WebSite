// Icône de basculement menu burger
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// sections de défilement
let sections = document.querySelectorAll('section') // Sélectionne toutes les balises <section> de la page
let navLinks = document.querySelectorAll('header nav a') // Sélectionne tous les liens dans la barre de navigation

navLinks.forEach(links => { // Pour chaque lien dans la barre de navigation
    links.addEventListener('click', (e) => { // Ajoute un écouteur d'événements pour le clic
        e.preventDefault(); // Empêche le comportement de lien par défaut (redirection vers une autre page)

        let targetId = links.getAttribute('href').substring(1); // Récupère l'ID de la section cible à partir de l'attribut href du lien
        let targetSection = document.getElementById(targetId); // Sélectionne la section cible par son ID

        window.scrollTo({ // Utilise la méthode scrollTo pour faire défiler la fenêtre
            top: targetSection.offsetTop - 70, // Défile jusqu'au haut de la section avec un décalage de 70 pixels pour laisser un peu d'espace
            behavior: 'smooth' // L'animation de défilement est fluide (smooth)
        });

        // Fermer le menu burger après le clic
        menuIcon.classList.remove('bx-x'); // Retire la classe 'bx-x' de l'icône du menu (le referme)
        navbar.classList.remove('active'); // Retire la classe 'active' de la barre de navigation (la masque)
    });
});


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset  = sec.offsetTop - 100;
        let height  = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            //Barre de navigation de lien active 
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

            // Section active pour l'animation lors du défilement
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    //en-tête collant
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky' , window.scrollY > 100);

    // Supprimer l'icône de basculement et la barre de navigation lorsque l'on clique sur les liens de la barre de navigation (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
