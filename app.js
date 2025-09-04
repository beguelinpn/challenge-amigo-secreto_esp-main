// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){ 
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();//quitamos espacios en blanco al final
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    amigos.push(nombre);
    mostrarLista();
    input.value = ""; // limpiar campo
}