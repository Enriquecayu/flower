window.addEventListener('DOMContentLoaded', () => {
    const musica = document.getElementById('musicaFondo');

    musica.play().then(() => {
        console.log("Música reproduciéndose correctamente.");
    }).catch(error => {
        console.log("El navegador bloqueó la reproducción automática. Se requiere interacción:", error);
        
        document.body.addEventListener('click', () => {
            musica.play();
        }, { once: true }); 
    });
});