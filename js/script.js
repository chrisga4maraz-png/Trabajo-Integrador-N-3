/* ========================================
   GAMING O NADA
   Archivo principal de JavaScript
======================================== */


/* ========================================
   1. CONFIGURACIÓN DE ACCESO
======================================== */

const USUARIO_VALIDO = "chrisga_maraz@gmail.com";
const PASSWORD_VALIDO = "987654321";
const CLAVE_SESION = "gamingONadaSesion";


/* ========================================
   2. PROTECCIÓN DE PÁGINAS INTERNAS
======================================== */

if (document.body.dataset.protected === "true") {

    const sesionActiva = sessionStorage.getItem(CLAVE_SESION);

    if (sesionActiva !== "autorizado") {
        alert("Primero tenés que iniciar sesión.");
        window.location.replace("index.html");
    }
}


/* ========================================
   3. FORMULARIO DE INICIO DE SESIÓN
======================================== */

const formularioLogin = document.getElementById("formLogin");

if (formularioLogin) {

    formularioLogin.addEventListener("submit", function (evento) {

        evento.preventDefault();

        const usuario = document.getElementById("usuario").value.trim();
        const password = document.getElementById("password").value;
        const mensaje = document.getElementById("mensajeLogin");

        if (usuario === USUARIO_VALIDO && password === PASSWORD_VALIDO) {

            sessionStorage.setItem(CLAVE_SESION, "autorizado");

            mensaje.textContent = "Acceso correcto. Bienvenido a Gaming o Nada.";
            mensaje.style.color = "#22d3ee";

            window.location.href = "gaming.html";

        } else {

            mensaje.textContent = "Usuario o contraseña incorrectos.";
            mensaje.style.color = "#ec4899";
        }
    });
}


/* ========================================
   4. CALCULADORA
======================================== */

const formularioCalculadora = document.getElementById("formCalculadora");

if (formularioCalculadora) {

    const numero1 = document.getElementById("numero1");
    const numero2 = document.getElementById("numero2");
    const resultado = document.getElementById("resultado");
    const mensaje = document.getElementById("mensaje");

    const botonesOperacion = document.querySelectorAll("[data-operacion]");

    botonesOperacion.forEach(function (boton) {

        boton.addEventListener("click", function () {

            if (!numero1.value || !numero2.value) {

                mensaje.textContent = "Completá los dos números antes de continuar.";
                mensaje.style.color = "#ec4899";
                resultado.value = "";

                return;
            }

            if (!formularioCalculadora.checkValidity()) {

                formularioCalculadora.reportValidity();

                return;
            }

            const valor1 = Number(numero1.value);
            const valor2 = Number(numero2.value);
            const operacion = boton.dataset.operacion;

            let calculo;

            switch (operacion) {

                case "+":
                    calculo = valor1 + valor2;
                    break;

                case "-":
                    calculo = valor1 - valor2;
                    break;

                case "*":
                    calculo = valor1 * valor2;
                    break;

                case "/":

                    if (valor2 === 0) {

                        mensaje.textContent = "No se puede dividir por cero.";
                        mensaje.style.color = "#ec4899";
                        resultado.value = "";

                        return;
                    }

                    calculo = valor1 / valor2;
                    break;

                default:

                    mensaje.textContent = "Operación no válida.";
                    mensaje.style.color = "#ec4899";

                    return;
            }

            resultado.value = Number(calculo.toFixed(8));

            mensaje.textContent = "Operación realizada correctamente.";
            mensaje.style.color = "#22d3ee";
        });
    });
}


/* ========================================
   5. FORMULARIO GAMER
======================================== */

const formularioGamer = document.getElementById("formGamer");

if (formularioGamer) {

    formularioGamer.addEventListener("submit", function (evento) {

        evento.preventDefault();

        if (!formularioGamer.checkValidity()) {

            formularioGamer.reportValidity();

            return;
        }

        const nombre = document.getElementById("nombre").value.trim();
        const mensaje = document.getElementById("mensajeGamer");

        mensaje.textContent = "¡Gracias, " + nombre + "! Tus datos fueron registrados correctamente.";
        mensaje.style.color = "#22d3ee";

        formularioGamer.reset();
    });
}


/* ========================================
   6. FORMULARIO DE CONTACTO
======================================== */

const formularioContacto = document.getElementById("formContacto");

const ventanaConfirmacion = document.getElementById("ventanaConfirmacion");

const botonCerrarConfirmacion = document.getElementById("cerrarConfirmacion");


if (formularioContacto && ventanaConfirmacion && botonCerrarConfirmacion) {

    // ENVIAR FORMULARIO

    formularioContacto.addEventListener("submit", function (evento) {

        evento.preventDefault();

        if (!formularioContacto.checkValidity()) {

            formularioContacto.reportValidity();

            return;
        }

        // Limpiar los campos después de completar el envío.

        formularioContacto.reset();

        // Mostrar la ventana de confirmación.

        ventanaConfirmacion.hidden = false;
        ventanaConfirmacion.setAttribute("aria-hidden", "false");

        // Evitar el desplazamiento de la página.

        document.body.style.overflow = "hidden";

        // Llevar el foco al botón de confirmación.

        botonCerrarConfirmacion.focus();
    });


    // CERRAR CON EL BOTÓN ACEPTAR

    function cerrarVentanaConfirmacion() {

        ventanaConfirmacion.hidden = true;
        ventanaConfirmacion.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

    }

    botonCerrarConfirmacion.addEventListener("click", function () {

        cerrarVentanaConfirmacion();

    });


    // CERRAR AL PRESIONAR FUERA DE LA VENTANA

    ventanaConfirmacion.addEventListener("click", function (evento) {

        if (evento.target === ventanaConfirmacion) {

            cerrarVentanaConfirmacion();

        }

    });


    // CERRAR CON LA TECLA ESCAPE

    document.addEventListener("keydown", function (evento) {

        if (evento.key === "Escape" && !ventanaConfirmacion.hidden) {

            cerrarVentanaConfirmacion();

        }

    });

}
