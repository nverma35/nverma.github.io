document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelectorAll(".btn");

    btn.forEach((button) => {
        button.addEventListener("mouseover", () => {
            button.classList.add("hovered");
        });

        button.addEventListener("mouseleave", () => {
            button.classList.remove("hovered");
        });
    });
});
