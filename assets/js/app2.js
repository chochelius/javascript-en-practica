const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const btn3 = document.querySelector("#btn3")
const btn4 = document.querySelector("#btn4")
const btn5 = document.querySelector("#btn5")
const btn6 = document.querySelector("#btn6")
const caja = document.querySelector("#caja")

btn1.addEventListener("click", (e) => {
    e.preventDefault();
    caja.style.backgroundColor = "#e53e3e";
})
btn2.addEventListener("click", (e) => {
    e.preventDefault();
    caja.style.backgroundColor = "#dd6b20";
})
btn3.addEventListener("click", (e) => {
    e.preventDefault();
    caja.style.backgroundColor = "#faf089";
})
btn4.addEventListener("click", (e) => {
    e.preventDefault();
    caja.style.backgroundColor = "#48bb78";
})
btn5.addEventListener("click", (e) => {
    e.preventDefault();
    caja.style.backgroundColor = "#81e6d9";
})
btn6.addEventListener("click", (e) => {
    e.preventDefault();
    caja.style.backgroundColor = "#d53f8c";
})

