// Targeting the box and the container to be able to make them go whoosh in future.
const box = document.querySelector("#box")
const boxContainer = document.querySelector("#box-container")

// Making some keywords to be able to make box move.
let Xaxis = 0;
let Yaxis = 0;
let speed = 10;

// Actually making the box move by pressing arrow keys
document.addEventListener("keydown", (e) => {
    if (Yaxis < 0) {
        Yaxis = 0
    } else if (Xaxis < 0) {
        Xaxis = 0
    } else if (Yaxis > 550) {
        Yaxis = 550
    } else if (Xaxis > 550) {
        Xaxis = 550
    } else {
        if (e.key === "ArrowUp") {
            Yaxis -= speed
        } else if (e.key === "ArrowLeft") {
            Xaxis -= speed
        } else if (e.key === "ArrowDown") {
            Yaxis += speed
        } else if (e.key === "ArrowRight") {
            Xaxis += speed
        }
    }
    box.style.left = `${Xaxis}px`
    box.style.top = `${Yaxis}px`
})