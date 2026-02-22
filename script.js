function siguientePantalla(num) {
    document.querySelectorAll('.seccion').forEach(s => s.classList.add('oculta'));
    document.getElementById('pantalla' + num).classList.remove('oculta');
}

function verificarRespuesta(esCorrecta, proxima) {
    if (esCorrecta) {
        siguientePantalla(proxima);
    } else {
        alert("¡Oh no! Esa no es la respuesta correcta, Kalir. ¡Inténtalo de nuevo! ❤️");
    }
}

// Lógica del botón NO que escapa
const btnNo = document.querySelector("#btn-no");
btnNo.addEventListener("mouseover", function() {
    const x = Math.random() * (window.innerWidth - btnNo.clientWidth);
    const y = Math.random() * (window.innerHeight - btnNo.clientHeight);
    btnNo.style.position = "absolute";
    btnNo.style.left = x + "px";
    btnNo.style.top = y + "px";
    
    // Convertir el botón en un "SÍ" gigante si insiste mucho
    if(Math.random() > 0.7) {
        btnNo.innerText = "¡SÍ!";
        btnNo.style.fontSize = "40px";
        btnNo.style.padding = "30px";
        btnNo.onclick = finalFeliz;
    }
});

function finalFeliz() {
    // 1. Lanzar Fuegos Artificiales
    confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
    });

    // 2. Enviar notificación
    const form = document.getElementById('notificacion');
    form.submit();

    // 3. Mostrar pantalla de celebración
    siguientePantalla(7);
}
