const turnOn = document.getElementById('ligada');
const turnOff = document.getElementById('desligar');

const lamp = document.getElementById('lamp');


function ligar (){
    lamp.src="ligada.jpeg"

}
function desligar (){
    lamp.src="desligada.jpeg"

}

turnOn.addEventListener('click', ligar);
turnOff.addEventListener('click', desligar);
