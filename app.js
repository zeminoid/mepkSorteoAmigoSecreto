// 1: Crear un array para almacenar los nombres
let amigos = [];

// 2: Implementa una función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('nombreAmigo');
    const nombre = inputAmigo.value.trim();

    // Validar la entrada
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Actualizar el array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    inputAmigo.value = '';

    // Actualizar la lista visual (llamamos a la función de actualización)
    actualizarListaAmigos();
}

// 3: Implementa una función para actualizar la lista de amigos
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaNombres');

    // Limpiar la lista existente
    lista.innerHTML = '';

    // Iterar sobre el arreglo y agregar elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// 4: Implementa una función para sortear los amigos
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, agrega al menos un nombre.');
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;
}