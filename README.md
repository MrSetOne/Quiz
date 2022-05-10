# <center>GameQuiz!</center>

* Sobre el proyecto
    * Instalación y despliegue <!-- SIN TERMINAR -->
    * Tecnologías usadas
    * Origen
    * Objetivos
    * Concepto e inspiración 

* Retos presentados
    * setInterval
    * Textos no formateados <!-- &#039 -->
    * Ordenar puntuaciones
    * Extraccion y validacion de respuestas
    * Botones dinamicos

* Agradecimientos
* Autores

## Sobre el proyecto

### Instalacion y despliegue <!-- FALTA SUBIR EL ENLACE -->

Para instalar esta pagina solo tienes que tener acceso a internet y ejecutar el comando en consola git clone `https://github.com/MrSetOne/Quiz.git`, tambien se puede acceder a través de este `enlace` 

### Tecnologías usadas

HTML, CSS y Javascript con la libreria [ChartJS](https://www.chartjs.org/) y la API [OpenTrivia](https://opentdb.com/api_config.php)

### Origen

Este proyecto fue planteado como un ejercicio del bootcamp [TheBridge](https://www.thebridge.tech/), consistia en genera un Quiz basandonos en JavaScript Vanilla, a excepcion de la libreria CharJs.

### Objetivos

* El Quiz constará de 10 preguntas. Cada pregunta tendrá 4 opciones y sólo una de ellas será la correcta.

* Deberán ser preguntas que vengan de https://opentdb.com/ o otras API’s que busqueis.
* La aplicación tendrá que ser una SPA (single-page application). Sólo una pregunta cada vez en pantalla.

### Concepto e inspiración

<!-- SIN RELLENAR -->

## Retos presentados

### setInterval
Para diversas funciones de este proyecto hemos tenido que investigar e implementar el metodo setInterval, el cual se encarga de ejecutar una funcion durante cada 'x' tiempo hasta que ejecutes su detención.

Ejemplo de setInterval:
```JavaScript
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
```


### Textos no formateados

Descargamos un API de 10 preguntas para añadir al proyecto, cuando sacamos los Datas que necesitamos algunas sintacsis no estan formateados, entonces buscamos solucion por la web, probamos con la function replace() pero solo cambia una no todos, al final usamos con innerTMHL y se formatea todos los sintacsis correctamente.

### Ordenar puntuaciones

### Extraccion y validacion de respuestas

### Botones dinamicos

<!--

=====================================================

https://fonts.google.com/share?selection.family=Montserrat:wght@100;400;700

=====================================================

## Todo

- [ ] Burger Menu

- [ ] Selector de dificultad

- [ ] Animaciones frontEnd

    - [ ] Transiciones entre Pages

    - [ ] Transicion verificacion de respuestas

    - [ ] Transiciones de botones

        - [ ] Repasar botones

    - [ ] Spinner

- [ ] Refactorizar AnswersBtns

- [ ] Colocar la variante selected del nav

==============================================


-->