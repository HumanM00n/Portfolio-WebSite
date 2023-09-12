// Icône de basculement menu burger


// sections de défilement
window.onscroll = () => {
    //en-tête collant
    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);
}