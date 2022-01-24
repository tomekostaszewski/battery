const btn = document.querySelector('.switch');
const chargingIcon = document.querySelector('.on-charging');
const animation = document.querySelector('.energy');
const activeIcon = document.querySelector('.toggle-icon');

const load = () => {
        btn.classList.toggle('on-switch');
        chargingIcon.classList.toggle('icon-opacity');
        animation.classList.toggle('animation');
        activeIcon.classList.toggle('color-icon');
}

btn.addEventListener('click', load);