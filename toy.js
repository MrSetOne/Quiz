let intentos = 0;

const intervalo = setInterval(intentaloOtraVez, 2000)

function intentaloOtraVez() {
    console.log("¡Ahora si que si lo he entendido!")
    if (intentos == 5) {
        console.log('Vale... Soy gilipollas, porfin funciona... ( ˘︹˘ ) ')
        clearInterval(intervalo)
    } else {
        setTimeout(() => {
            console.log("Igual no lo he entendido...\n");
            intentos++;
        }, 1000);
    }
}