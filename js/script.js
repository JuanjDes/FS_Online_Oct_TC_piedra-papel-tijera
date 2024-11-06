// Obtener elementos del DOM
const botonesJugada = document.querySelectorAll(".boton-jugada");
const resultadosDiv = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");

// Contadores de puntos
let puntosUsuario = 0;
let puntosOrdenador = 0;

// Función para generar jugada aleatoria del ordenador
function jugadaOrdenador() {
  const opciones = ["piedra", "papel", "tijera"];
  const indiceAleatorio = Math.floor(Math.random() * opciones.length);
  return opciones[indiceAleatorio];
}

// Función para comparar jugadas y actualizar el marcador
function jugar(jugadaUsuario) {
  const jugadaPC = jugadaOrdenador();
  let resultado;

  if (jugadaUsuario === jugadaPC) {
    resultado = "Empate";
  } else if (
    (jugadaUsuario === "piedra" && jugadaPC === "tijera") ||
    (jugadaUsuario === "papel" && jugadaPC === "piedra") ||
    (jugadaUsuario === "tijera" && jugadaPC === "papel")
  ) {
    resultado = "¡Ganaste!";
    puntosUsuario++;
  } else {
    resultado = "La máquina gana";
    puntosOrdenador++;
  }

  // Mostrar resultados y actualizar contadores
  resultadosDiv.textContent = `Tu jugada: ${jugadaUsuario} | Jugada de la máquina: ${jugadaPC} | Resultado: ${resultado}`;
  contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
  contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
}

// Añadir evento de clic a cada botón
botonesJugada.forEach((boton) => {
  boton.addEventListener("click", () => {
    const jugadaUsuario = boton.dataset.jugada;
    jugar(jugadaUsuario);
  });
});
