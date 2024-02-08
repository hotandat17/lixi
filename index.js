const buttonYes = document.getElementById('buttonYes');
const buttonNo = document.getElementById('buttonNo');
const none = document.getElementById('none');
const closex = document.getElementById('close');

buttonYes.addEventListener('click', () => {
    none.style.display = 'block';
})


buttonNo.addEventListener('mousemove', () => {

    const i = Math.floor(Math.random() * 500) + 1;
    const j = Math.floor(Math.random() * 500) + 1;
    buttonNo.style.left = i + 'px';
    buttonNo.style.top = j + 'px';
    buttonNo.innerHTML = 'đố bắt được em =]]'
})

closex.addEventListener('click', () => {
    none.style.display = 'none';
})