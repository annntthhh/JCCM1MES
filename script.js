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

const mainHeart = document.getElementById('mainHeart');
const hiddenMessage = document.getElementById('hiddenMessage');

if(mainHeart) {
    mainHeart.addEventListener('click', () => {
        hiddenMessage.style.display = 'block';
        for(let i=0; i<15; i++) {
            setTimeout(createHeart, i * 100);
        }
        setTimeout(() => {
            hiddenMessage.style.display = 'none';
        }, 3000);
    });
}

function createHeart() {
    const heart = document.createElement('div');
    heart.innerHTML = '💞';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-20px';
    heart.style.fontSize = '25px';
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
