// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []//arreglo vacío

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

function mostrarLista() {
      let lista = document.getElementById("listaAmigos");
      lista.innerHTML = "";// Vacía la lista

      amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
      });
    }

function sortearAmigo() {
      if (amigos.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
      }

      let indiceAleatorio = Math.floor(Math.random() * amigos.length);
      let amigoSorteado = amigos[indiceAleatorio];

      document.getElementById("resultado").textContent =
        "🎉 El amigo secreto es: " + amigoSorteado + " 🎉";
    }
