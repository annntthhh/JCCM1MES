// Función para el botón secreto
const loveButton = document.getElementById('loveButton');
const hiddenMessage = document.getElementById('hiddenMessage');

loveButton.addEventListener('click', () => {
    hiddenMessage.style.display = 'block';
    loveButton.innerText = "❤️";
    
    // Lanzar confeti de corazones (opcional)
    for(let i=0; i<15; i++) {
        createHeart();
    }
});

// Crear corazones flotantes de fondo
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-particle');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.position = 'fixed';
    heart.style.top = '-20px';
    heart.style.zIndex = '1000';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    
    document.body.appendChild(heart);

    // Animación de caída
    let pos = -20;
    const interval = setInterval(() => {
        if (pos > window.innerHeight) {
            clearInterval(interval);
            heart.remove();
        }
        pos += 2;
        heart.style.top = pos + 'px';
    }, 16);
}
