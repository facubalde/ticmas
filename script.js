document.getElementById("botoncambiar").onclick = function () {
    document.getElementById("personalinfo").style.color = "black";
    document.getElementById("cabecera").style.color = "black";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

document.getElementById("botonoriginal").onclick = function () {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

document.getElementById("btnexp").onclick = function () {
    alert("Visita mi Linkedin!");
}

document.getElementById("btnskills").onclick = function () {
    alert("Visita mi Github!");
}

document.getElementById("btnedu").onclick = function () {
    alert("Visita mis Redes Sociales!");
}