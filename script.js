const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');


// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event) {
//     console.log({event});
//     event.preventDefault();
//     const sumaInputs = (parseInt(input1.value) + parseInt(input2.value));
//     pResult.innerText = "Resultado: " + sumaInputs;
// }

form.addEventListener('click', sumarInputValues);

function sumarInputValues(event) {
    // console.log({event});
    // event.preventDefault();
    const sumaInputs = (parseInt(input1.value) + parseInt(input2.value));
    pResult.innerText = "Resultado: " + sumaInputs;
}



// btn.addEventListener('click', btnOnClick);

// function btnOnClick() {
//     const sumaInputs = (parseInt(input1.value) + parseInt(input2.value));
//     pResult.innerText = "Resultado: " + sumaInputs;
// }



























// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.getElementsByClassName('parrafito');
// const pid = document.getElementById('pid');
// const input = document.querySelector('input');

// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });

// console.log(h1.getAttribute('pantalla'));

// h1.setAttribute('pantalla', 'tv');

// h1.classList.remove('arbol');

// // h1.classList.toggle() para quitar y poner clases
// //h1.classList.contains() es una condicional y nos devuelve true o false

// //h1.innerHTML = '' nos ayuda a insertar texto y codigo html
// //h1.innerText = '' nos ayuda a insertar texto dentro de nuestra etiqueta en html
// //h1.getAttribute() nos ayuda a leer los atributos que tengan nuestro elemento

// input.value = '456';

// // document.createElement('img'); //nos ayuda a crear elementos("etiquetas en html")

// const img = document.createElement('img');

// console.log(img);

// pid.innerHTML = '';
// pid.appendChild(img);