document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("not-loaded");

    // Aparición del ramo después de 2.5 segundos
    setTimeout(() => {
        const ramo = document.querySelector(".ramo");
        if (ramo) ramo.classList.add("ramo--visible");
    }, 2500);

    // Animación de luces en los tulipanes
    const lights = document.querySelectorAll(".flower__light");
    lights.forEach((light, index) => {
        light.style.animation = `tulip-light 4s infinite ${index * 0.2}s`;
    });

    // Reproducción de audio y manejo de bloqueo del navegador
    const audio = document.querySelector("#musicaFondo");
    if (audio) {
        audio.play().catch(error => {
            console.log("Reproducción automática bloqueada. Esperando clic del usuario...", error);
            document.body.addEventListener('click', () => {
                audio.play();
            }, { once: true });
        });
    }
});

// ==================== SINCRONIZACIÓN DE LA LETRA ====================
const lyricsData = [
    { text: "Él la estaba esperando con una flor amarilla", time: 17 },
    { text: "Ella lo estaba soñando con la luz en su pupila", time: 24 },
    { text: "Y el amarillo del sol iluminaba la esquina", time: 32 },
    { text: "Lo sentía tan cercano, lo sentía desde niña", time: 41 },
    { text: "Ella sabía que él sabía que algún día pasaría", time: 46 },
    { text: "Que vendría a buscarla con sus flores amarillas", time: 50 },
    { text: "No te apures, no detengas el instante del encuentro, Está dicho que es un hecho, no la pierdas, no hay derecho", time: 59 },
    { text: "No te olvides que la vida casi nunca está dormida", time: 68 },
    { text: "En ese bar tan desierto nos esperaba el encuentro", time: 94 },
    { text: "Ella llego en limosina amarilla, por supuesto", time: 102 },
    { text: "Él se acercó de repente y la miró tan de frente ", time: 110 },
    { text: "Toda una vida soñada y no pudo decir nada", time: 117 },
    { text: "Ella sabía que sabía, que algún día pasaría", time: 123 },
    { text: "Que vendría a buscarla con sus flores amarillas", time: 129 },
    { text: "No te apures, no detengas el instante del encuentro, Está dicho que es un hecho, no la pierdas, no hay derecho", time: 137 },
    { text: "No te olvides que la vida casi nunca está dormida", time: 145 },
    { text: "Flores amarillas", time: 160 },
    { text: "Ella sabía que él sabía que algún día pasaría", time: 168 },
    { text: "Que vendría a buscarla con sus flores amarillas", time: 173 },
    { text: "No te apures, no detengas el instante del encuentro, Está dicho que es un hecho, no la pierdas, no hay derecho", time: 182 },
    { text: "No te olvides que la vida casi nunca está dormida", time: 190 },
    { text: "Ella sabía que él sabía, Él sabía, ella sabía, Que él sabía, ella sabía", time: 199 },
    { text: "Y NO SE OLVIDARON DE SUS...", time: 205 },
    { text: "FLORES AMARILLAS :)", time: 206 }
];

function updateLyrics() {
    const audio = document.querySelector("#musicaFondo");
    const lyrics = document.querySelector("#lyrics");
    const specialText = document.querySelector(".special-text");
    const mensajeFinal = document.querySelector("#mensaje-final");
    if (!audio || !lyrics) return;

    var time = audio.currentTime;

    // Ocultar el texto de bienvenida inicial al segundo 12
    if (specialText) {
        if (time >= 12) {
            specialText.style.transition = "opacity 1s ease";
            specialText.style.opacity = 0;
            setTimeout(() => { specialText.style.display = "none"; }, 1000);
        }
    }

    // MOSTRAR LA FRASE FINAL AL TERMINAR LA CANCIÓN (A partir del segundo 210 o cuando acabe)
    if (time >= 210) {
        lyrics.style.opacity = 0; // Oculta la última letra sincronizada
        if (mensajeFinal) {
            mensajeFinal.innerHTML = "Me alegra tanto haberme animado a hablarte aquel día; desde entonces, cada momento compartiendo con vos se ha vuelto algo único, y hoy quiero que sepas lo increíble y especial que eres para mí. ✨💛";
            mensajeFinal.style.opacity = 1; // Hace visible tu mensaje final con suavidad
        }
        return; // Sale de la función
    }

    // Buscar la línea correspondiente al segundo actual
    var currentLine = lyricsData.find(
        (line) => time >= line.time && time < line.time + 6
    );

    if (currentLine) {
        lyrics.style.opacity = 1;
        lyrics.innerHTML = currentLine.text;
    } else {
        lyrics.style.opacity = 0;
        lyrics.innerHTML = "";
    }
}

// Revisar de manera fluida cada 200 milisegundos
setInterval(updateLyrics, 200);