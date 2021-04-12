function playSound(event) {
    const sound = document.querySelector(`audio[code="${event.code}"]`);
    const key = document.querySelector(`.key[code="${event.code}"]`);
    if(!sound) return;
    sound.currentTime = 0;
    sound.play();
    key.classList.add('playing');
};

function removeTransition(event) {
    if (event.propertyName !== 'transform') return;
    this.classList.remove('playing')
};

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);