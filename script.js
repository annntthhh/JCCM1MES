// Función para verificar la clave
function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('error-msg');
    const loginScreen = document.getElementById('login-screen');
    const mainContent = document.getElementById('main-content');

    if (input === "0504") {
        loginScreen.style.display = 'none';
        mainContent.style.display = 'block';
        // Iniciar efecto de corazones al entrar
        for(let i=0; i<10; i++) {
            setTimeout(createHeart, i * 300);
        }
    } else {
        errorMsg.style.display = 'block';
        document.getElementById('passwordInput').value = "";
    }
}

// Lógica del botón de "Te amo"
const loveButton = document.getElementById('loveButton');
const hiddenMessage = document.getElementById('hiddenMessage');

if(loveButton) {
    loveButton.addEventListener('click', () => {
        hiddenMessage.style.display = 'block';
        loveButton.innerText = "❤️";
        for(let i=0; i<15; i++) {
            createHeart();
        }
    });
}

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-20px';
    heart.style.fontSize = Math.random() * 20 + 15 + 'px';
    heart.style.zIndex = '1000';
    heart.style.transition = 'transform 3s linear, opacity 3s linear';
    
    document.body.appendChild(heart);

    let pos = -20;
    const interval = setInterval(() => {
        if (pos > window.innerHeight) {
            clearInterval(interval);
            heart.remove();
        }
        pos += 2.5;
        heart.style.top = pos + 'px';
        heart.style.opacity = 1 - (pos / window.innerHeight);
    }, 16);
}
