// Linea para poder poner inputs.
const prompt = require('prompt-sync')();

// Creamos la lista vacia.
numeros = []

// For para que el usaurio ingrese los numeros e ir agregando cada numero a la lista numeros.
for (let i = 0; i < 3; i++){

    // Pedimos al usuario que ingrese el numero.
    let n = parseFloat(prompt(`Ingresa el numero ${i+1}: `))

    // Agregamos el numero a la lista de numeros.
    numeros.push(n)
}

// Mostramos la lista para verificar que los numeros se agregaron correctamente.
console.log(`Lista de numeros: ${numeros}`)

// Verificar si los números son iguales
if (numeros[0] === numeros[1] && numeros[1] === numeros[2]) {
    console.log("Todos los números son iguales.");
} else {
    console.log("Los números no son todos iguales.");
}

// Metodo de burbuja de mayor a menor.
// Primer For para iterar las veces necesarias el array.
for (let i=0; i < numeros.length - 1; i++){
    // Segundo For para iterar sobre el array.
    for(let j=0; j < numeros.length; j++){
        // Comparamos los elementos e intercambiamos si se cumple.
        if(numeros[j] < numeros[j+1]){
            let aux = numeros[j]
            numeros[j] = numeros[j+1]
            numeros[j+1] = aux
        }
    }
}
// Mostramos los numeros del array ordenado de menor a mayor.
console.log(`Lista de numeros ordenados de mayor a menor es: ${numeros}`)

// De la lista numeros tomaremos el primer elemento para saber el mas grande.
console.log(`El numero mas grande de la lista es: ${numeros[0]}`)

// De la lista numeros tomaremos el elemento del centro de la lista para saber el numero del medio.
console.log(`El numero del medio de la lista es: ${numeros[1]}`)

// De la lista numeros tomaremos el ultimo elemento para el numero menor.
console.log(`El numero menor de la lista es: ${numeros[2]}`)



