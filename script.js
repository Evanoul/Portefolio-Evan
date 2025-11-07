console.log("Script chargé !")

const Titreprincipal = document.querySelector('#Titreprincipal');

Titreprincipal.addEventListener('click', () => {
    Titreprincipal.textContent = "ta cliqué bro";
    console.log("Bouton cliqué !")

});

const button = document.querySelector('#theme-toggle');
button.addEventListener('click', () => {
    console.log("Bouton cliqué !")
    document.body.classList.toggle('dark-mode');
    document.header.classList.toggle('dark-mode');
})