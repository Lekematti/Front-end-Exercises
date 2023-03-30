
const balloon = document.getElementById("balloon");

function inflate() {
    const size = parseFloat(getComputedStyle(balloon).fontSize);
    balloon.style.fontSize = size * 1.1 + "px";
    if (size > 200) {
        balloon.textContent = "💥";
        document.removeEventListener("keydown", handleKeydown);
    }
}
function deflate() {
    const size = parseFloat(getComputedStyle(balloon).fontSize);
    if (size > 20) {
        balloon.style.fontSize = size * 0.9 + "px";
    }
}
function handleKeydown(event) {
    if (event.key === "ArrowUp") {
        event.preventDefault();
        inflate();
    } else if (event.key === "ArrowDown") {
        event.preventDefault();
        deflate();
    }
}

document.addEventListener("keydown", handleKeydown);
