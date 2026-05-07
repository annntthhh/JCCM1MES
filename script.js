function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('error-msg');
    const loginScreen = document.getElementById('login-screen');
    const mainContent = document.getElementById('main-content');

    if (input === "0504") {
        loginScreen.style.display = 'none';
        mainContent.style.display = 'block';
        window.scrollTo(0, 0);
    } else {
        errorMsg.style.display = 'block';
        document.getElementById('passwordInput').value = "";
    }
}

const loveButton = document.getElementById('loveButton');
const hiddenMessage = document.getElementById('hiddenMessage');

if(loveButton) {
    loveButton.addEventListener('click', () => {
        hiddenMessage.style.display = 'block';
        loveButton.innerText = "❤️";
        // Efecto extra de lluvia de corazones
        for(let i=0; i<20; i++) {
            setTimeout(createHeart, i * 100);
        }
    });
}

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💗';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-20px';
    heart.style.fontSize = '30px';
    heart.style.zIndex = '1000';
    heart.style.pointerEvents = 'none';
    
    document.body.appendChild(heart);

    let pos = -20;
    const interval = setInterval(() => {
        if (pos > window.innerHeight) {
            clearInterval(interval);
            heart.remove();
        }
        pos += 3;
        heart.style.top = pos + 'px';
    }, 16);
}
