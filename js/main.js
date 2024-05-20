


alert("Bienvenido, a continuación elija los ingredientes de su combo")

const comidaPrincipal = [
    { nombre: "Pizza", precio: 4000},
    {nombre: "Pasta", precio:3000},
    {nombre: "Hamburguesa", precio: 5000}
];

const guarnicion =[
    {nombre: "Ensalda", precio: 2000},
    {nombre: "Neguets", precio: 2500},
    {nombre:"Papas Fritas", precio: 3000}
];

const bebidas =[
    {nombre: "Agua", precio: 1500},
    {nombre: "Gaseosa", precio: 2500},
    {nombre:"Cerveza", precio: 3000}
];

let precioTotal=0;

function seleccionarOpcion(arrayOpciones, mensaje) {
    let opcionSeleccionada;
    do {
      opcionSeleccionada = parseInt(prompt(mensaje));
    } while (
      isNaN(opcionSeleccionada) ||
      opcionSeleccionada < 1 ||
      opcionSeleccionada > arrayOpciones.length
    );
    return arrayOpciones[opcionSeleccionada - 1];
  }

const hamburguesaSeleccionada = seleccionarOpcion(comidaPrincipal, "Elige que queres cenar \n 1 Pizza \n2 Pasta  \n3 Hamburguesa :");
precioTotal += hamburguesaSeleccionada.precio;
console.log(`Hamburguesa seleccionada: ${hamburguesaSeleccionada.nombre} (${hamburguesaSeleccionada.precio}$)`);

const guarnicionSeleccionado = seleccionarOpcion(guarnicion, "Elige que una guarnición \n 1 Ensalada \n2 Nuguets \n3 Papas Fritas");
precioTotal += guarnicionSeleccionado.precio;
console.log(`Postre seleccionado: ${guarnicionSeleccionado.nombre} (${guarnicionSeleccionado.precio}$)`);

const bebidaSeleccionada = seleccionarOpcion(bebidas, "Elige que queres cenar \n 1 Agua \n2 Gaseosa \n3 Cerveza");
precioTotal += bebidaSeleccionada.precio;
console.log(`Bebida seleccionada: ${bebidaSeleccionada.nombre} (${bebidaSeleccionada.precio}$)`);


alert(`Precio total: ${precioTotal}`);
// alert((`Precio total: ${precioTotal.toFixed(2)}$`));
