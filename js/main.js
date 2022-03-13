respuestas = document.querySelectorAll('.answer')
flechas = document.querySelectorAll('.flecha')
preguntas = document.querySelectorAll('.question')

for (let i = 0; i < flechas.length; i++){
    flechas[i].addEventListener('click', () => {
        respuestas[i].classList.toggle('activado');
        flechas[i].classList.toggle('flecha-act');
        preguntas[i].classList.toggle('preg-act');
        
    })
}