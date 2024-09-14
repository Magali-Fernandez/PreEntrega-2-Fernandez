class Peluche {
    constructor(nombre, stock, precio) {
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }

    // Método para verificar si hay suficiente stock disponible
    hayStock(cantidad) {
        return this.stock >= cantidad;
    }

    // Método para calcular el total del precio de la compra
    calcularTotal(cantidad) {
        return this.precio * cantidad;
    }
}

// Array de peluches disponibles en la tienda
let stockPeluches = [
    new Peluche("oso", 10, 20),
    new Peluche("conejo", 5, 15),
    new Peluche("gato", 7, 10),
];

// Función para buscar un peluche en el array por nombre
function buscarPeluche(nombre) {
    return stockPeluches.find(
        (peluche) => peluche.nombre.toLowerCase() === nombre.toLowerCase()
    );
}

// Función para obtener peluches con stock disponible
function peluchesConStock() {
    return stockPeluches.filter((peluche) => peluche.stock > 0);
}

function simuladorVenta() {
    let peluche = "";
    let cantidad;
    let pelucheEncontrado;

    // Muestra los peluches disponibles al cargar la página
    let disponibles = peluchesConStock()
        .map((peluche) => peluche.nombre)
        .join(", ");
    alert("Peluches disponibles para comprar: " + disponibles);
    console.log("Peluches disponibles para comprar: " + disponibles);

    // Bucle para pedir al usuario un peluche válido
    while (peluche !== "Salir") {
        peluche = prompt(
            "¿Qué peluche deseas comprar? (o escribe 'Salir' para terminar):"
        );

        if (peluche === "Salir") {
            alert("Gracias por visitar nuestra tienda.");
            console.log("Gracias por visitar nuestra tienda.");
            break;
        }

        // Busca el peluche en el array
        pelucheEncontrado = buscarPeluche(peluche);

        // Verifica si el peluche existe y tiene stock
        if (pelucheEncontrado && pelucheEncontrado.stock > 0) {
            cantidad = parseInt(prompt("¿Cuántos deseas comprar?"));

            if (pelucheEncontrado.hayStock(cantidad)) {
                let total = pelucheEncontrado.calcularTotal(cantidad);
                alert(
                    "Total a pagar por " +
                        cantidad +
                        " " +
                        pelucheEncontrado.nombre +
                        "(s): $" +
                        total +
                        "."
                );
                console.log(
                    "Total a pagar por " +
                        cantidad +
                        " " +
                        pelucheEncontrado.nombre +
                        "(s): $" +
                        total +
                        "."
                );
                alert("¡Gracias por su compra!.");
                console.log("¡Gracias por su compra!.");
                console.log("Fin del simulador.");
                return;
            } else {
                alert(
                    "Lo sentimos, no tenemos suficiente stock de " +
                        pelucheEncontrado.nombre +
                        "(s)."
                );
                console.log(
                    "Lo sentimos, no tenemos suficiente stock de " +
                        pelucheEncontrado.nombre +
                        "(s)."
                );
            }
        } else {
            alert(
                "Peluche no disponible o sin stock. Por favor, intenta de nuevo."
            );
            console.log(
                "Peluche no disponible o sin stock. Por favor, intenta de nuevo."
            );
        }
    }

    console.log("Fin del simulador.");
}

simuladorVenta();
