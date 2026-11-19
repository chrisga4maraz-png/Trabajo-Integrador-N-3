// ==========================================================================
// 1. REDIRECCIÓN Y ACCESO (LOGIN - TP5)
// ==========================================================================
const formLogin = document.getElementById("formLogin");

if (formLogin) {
  formLogin.addEventListener("submit", (evento) => {
    // Al presionar enviar y superar la validación nativa HTML5, redirige a gaming.html
    evento.preventDefault();
    window.location.href = "gaming.html";
  });
}

// ==========================================================================
// 2. CALCULADORA GAMER
// ==========================================================================
const botones = document.querySelectorAll(".operadores button");
const resultado = document.getElementById("resultado");
const mensaje = document.getElementById("mensaje");

if (botones.length > 0) {
  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const a = document.getElementById("numero1").value;
      const b = document.getElementById("numero2").value;

      // Validación de campos vacíos
      if (a === "" || b === "") {
        resultado.value = "";
        mensaje.textContent = "Completa los dos números.";
        return;
      }

      const numero1 = Number(a);
      const numero2 = Number(b);
      const operacion = boton.dataset.operacion;
      let total;

      // Operaciones matemáticas
      if (operacion === "+") total = numero1 + numero2;
      if (operacion === "-") total = numero1 - numero2;
      if (operacion === "*") total = numero1 * numero2;
      if (operacion === "/") {
        // Validación de división por cero
        if (numero2 === 0) {
          resultado.value = "";
          mensaje.textContent = "No se puede dividir por cero.";
          return;
        }
        total = numero1 / numero2;
      }

      // Muestra del resultado y limpieza de mensajes de error
      resultado.value = String(total);
      mensaje.textContent = "";
    });
  });
}

// ==========================================================================
// 3. CONTROL DEL FORMULARIO GAMER
// ==========================================================================
const formGamer = document.getElementById("formularioGamer");

if (formGamer) {
  formGamer.addEventListener("submit", (evento) => {
    evento.preventDefault();
    alert("Formulario enviado. ¡Que comience la partida!");
  });
}
