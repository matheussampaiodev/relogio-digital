const hora = document.querySelector('.hora');
const minuto = document.querySelector('.minuto');
const segundo = document.querySelector('.segundo');

function relogio() {
    let data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();
    let sec = data.getSeconds();

    if(hr < 10) {
        hr = `0${hr}`;
    }
    if(min < 10) {
        min = `0${min}`;
    }
    if(sec < 10) {
        sec = `0${sec}`;
    }

    hora.innerHTML = hr;
    minuto.innerHTML = min;
    segundo.innerHTML = sec;

    setInterval(relogio, 200);
}