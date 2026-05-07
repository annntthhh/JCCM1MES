// Función para verificar la clave (0504)
function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('error-msg');
    const loginScreen = document.getElementById('login-screen');
    const mainContent = document.getElementById('main-content');

    if (input === "0504") {
        loginScreen.style.display = 'none';
        mainContent.style.display = 'block';
        window.scrollTo(0, 0); // Sube al inicio al entrar
    } else {
        errorMsg.style.display = 'block';
        document.getElementById('passwordInput').value = ""; // Limpia el input
    }
}

// Lógica del Corazón Latiente y Mensaje
const mainHeart = document.getElementById('mainHeart');
const hiddenMessage = document.getElementById('hiddenMessage');

if(mainHeart) {
    // Al hacer clic (o toque en móvil) en el corazón
    mainHeart.addEventListener('click', () => {
        // Muestra el texto flotante sobre el corazón
        hiddenMessage.style.display = 'block';
        
        // Lluvia de corazones (💞)
        for(let i=0; i<15; i++) {
            setTimeout(createHeart, i * 100); // Lluvia escalonada
        }

        // Se oculta el mensaje después de 3.5 segundos
        setTimeout(() => {
            hiddenMessage.style.display = 'none';
        }, 3500);
    });
}

// Función para crear los corazones que caen
function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💞';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-20px';
    heart.style.fontSize = '25px';
    heart.style.zIndex = '1000';
    heart.style.pointerEvents = 'none'; // No interfiere con clics
    
    document.body.appendChild(heart);

    let pos = -20;
    const interval = setInterval(() => {
        if (pos > window.innerHeight) {
            clearInterval(interval);
            heart.remove(); // Elimina el corazón al salir de pantalla
        }
        pos += 3; // Velocidad de caída
        heart.style.top = pos + 'px';
    }, 16);
}
