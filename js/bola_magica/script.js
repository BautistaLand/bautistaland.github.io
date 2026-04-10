const respuestas = [
  "Sí",
  "No",
  "Es probable",
  "Es imposible",
  "Tal vez",
  "Definitivamente sí",
  "Definitivamente no",
  "No estoy seguro",
  "Pregunta otra vez",
  "No vuelvas a preguntarme" // muy rara
];

// Función para generar un número basado en texto (hash simple)
function generarHash(texto) {
  let hash = 0;
  for (let i = 0; i < texto.length; i++) {
    hash = texto.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

function responder() {
  const pregunta = document.getElementById("pregunta").value.trim().toLowerCase();

  if (pregunta === "") {
    document.getElementById("respuesta").textContent = "Escribe una pregunta primero 🤨";
    return;
  }

  const hash = generarHash(pregunta);

  // Hacemos que "No vuelvas a preguntarme" sea muy rara
  let indice;
  if (hash % 100 === 0) {
    indice = respuestas.length - 1;
  } else {
    indice = hash % (respuestas.length - 1);
  }

  document.getElementById("respuesta").textContent = respuestas[indice];
}
document.body.className = "tema-rojo";
