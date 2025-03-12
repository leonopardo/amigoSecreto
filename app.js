// Almacenar amigos
let amigos = [];

function agregarAmigo() {
    const inputNombre = document.getElementById('amigo'); //Nombre ingresado
    const nombre = inputNombre.value.trim(); //se eliminan espacios
    //Verificación que no esté vacío
    if (nombre === '') {
        alert('No se aceptan espacios vacíos, ingrese un nombre');
        return;
    }

    // Arreglo amigos (sí es valido se agrega al array con push)
    amigos.push(nombre);
    // Reseteo campo de entrada
    inputNombre.value = '';
    actualizarListaAmigos();
}

// Se actualiza lista de amigos
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    // Reset de lista
    listaAmigos.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li'); //li se refiere al contador de cada amigo; li=n-amigo
        li.textContent = amigos[i]; // Asignar el nombre al contenido de <li>
        listaAmigos.appendChild(li);
    }
}
function sortearAmigo() {
    // Validar que no esté vacío
    if (amigos.length === 0) {
        alert('Por favor, añade al menos un amigo antes de sortear.');
        return;
    }

    // Generar un índice aleatorio para el sorteo
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    //Resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡El amigo secreto es: <strong>${amigoSorteado}</strong>!`;
}
