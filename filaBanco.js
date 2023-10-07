const filaDeDentro = ['Victor', 'Hugo', "Jose", "João"];
const filaDeFora = ["Joana", "Roberta"];

// for (let index = 0; index < filaDeDentro.length; index++) {

//     if (filaDeDentro.length < 5) {
//         filaDeDentro.push(filaDeFora[0])
//         filaDeFora.shift()
//     }

//     if (filaDeFora.length <= 0) {
//         break
//     }
// }

// for (const fila of filaDeDentro) {
//     if (filaDeDentro.length < 5) {
//         filaDeDentro.push(filaDeFora[0])
//         filaDeFora.shift()
//     }

//     if (filaDeFora.length <= 0) {
//         break
//     }
// }

let contador = 0
while (contador < 5) {
    if (filaDeDentro.length < 5) {
        filaDeDentro.push(filaDeFora[0])
        filaDeFora.shift()
    }
    contador++

    if (filaDeFora.length <= 0) {
        contador = 5
    }
}

console.log(filaDeDentro);
console.log(filaDeFora);
