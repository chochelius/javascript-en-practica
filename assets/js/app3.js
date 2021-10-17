const resultado = document.querySelector(".resultado");
const sumar = document.querySelector("#btn-sumar");
const restar = document.querySelector("#btn-restar");


sumar.addEventListener("click", (e) => {
    e.preventDefault();
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    let suma = parseInt(valor1) + parseInt(valor2);
    console.log("sumando");
    console.log(`${suma}`);
    resultado.innerHTML = "<h2>" + suma + "</h2>";
});
restar.addEventListener("click", (e) => {
    e.preventDefault();
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    const resta = valor1 - valor2;
    console.log("restando");
    console.log(`${resta}`);
    resultado.innerHTML = "<h2>" + resta + "</h2>";
});
