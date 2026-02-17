document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.remove("not-loaded");


    setTimeout(() => {
        const ramo = document.querySelector(".ramo");
        ramo.classList.add("ramo--visible");
    }, 2500);

    const lights = document.querySelectorAll(".flower__light");
    lights.forEach((light, index) => {

        light.style.animation = `tulip-light 4s infinite ${index * 0.2}s`;
    });
});