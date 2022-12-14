document.addEventListener('keydown', (event) => {
    console.log (event.key)
    if (event.key === 'a') {
        color = "red"
    } else if (event.key === 's') {
        color = "green"
    } else if (event.key === 'd') {
        color = "blue"
    }
}
)
let color = "white";

document.addEventListener('click', (event) => {
    if (event.target.id === "") return;
    console.log("div => " + event.target.id);
    console.log("color => " + color);
    let currentDiv = document.querySelector("#" + event.target.id)
    currentDiv.style.backgroundColor = color;
})