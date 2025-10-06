function mostrarSaludo() {
  const nombre = prompt("¿Cuál es tu nombre?");
  const saludo = document.getElementById("saludo");

  if (nombre) {
    saludo.textContent = `¡Hola, ${nombre}! Qué bueno verte por aquí.`;
  } else {
    saludo.textContent = "¡Hola! No dijiste tu nombre.";
  }
}
