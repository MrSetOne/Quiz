# Project Quiz

https://fonts.google.com/share?selection.family=Montserrat:wght@100;400;700

## Todo

- [ ] Poner tiempo limite

- [ ] Definir estilos y maquetacion (Mike)

- [ ] Burger Menu (Mike)

- [ ] Seleccion de respuesta en radial

- [ ] BtnFalconMaster5

- [X] submitBtn.addEventListener('click', ()=> goTo(pageQuestion)) (Shan)

- [ ] Selector de dificultad

- [X] Analizar caracteres raros

    - [X] &quot

    - [X] &#039

-----------------------------

Config:

const config = {
  type: 'doughnut',
  data: data,
};

------------------------------

Setup:

const data = {
  labels: [
    'correct',
    'incorrect'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [7, 3],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)'
    ],
    hoverOffset: 4
  }]
};