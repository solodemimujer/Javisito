document.getElementById('button').addEventListener('click', function() {
    document.getElementById('box').classList.add('oculto');
    this.classList.add('oculto');
    document.getElementById('pregunta').classList.remove('oculto');
});
    for (let i = 0; i < 15; i++) {
        crearPetalo();
    }

setInterval(crearPetalo, 500);
    

function mostrarRespuesta() {
document.getElementById('pregunta').classList.add('oculto');
document.getElementById('respuesta-final').classList.remove('oculto');
}

function crearPetalo() {
    let petalo = document.createElement('div');
    petalo.classList.add('petalo');

    document.body.appendChild(petalo);

    let startPosX = Math.random() * 5;
    let duration = Math.random() * 3 + 3;

    petalo.style.left = startPosX + 'px';
    petalo.style.top = startPosX + 'px';
    petalo.style.animationDuration = duration + 's';

    setTimeout(() => {
        petalo.remove();
    }, duration + startDelay) * 1000;
}



