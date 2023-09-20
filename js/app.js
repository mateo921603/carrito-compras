//variables

const carrito = document.querySelector('#carrito');  
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCurso = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let agregarCarrito = [];


cargarEventlistener ();
function cargarEventlistener (){
    listaCursos.addEventListener('click', agregarCurso);
}


//funciones
function agregarCurso (e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const leerClick = e.target.parentElement.parentElement;
        extraerDatos(leerClick);
    }
    
}

//creo una funcion que me trae el html

function extraerDatos (contenidoCurso){
    //creo un objeto al traer el html con el click
    const htmlCurso = {
        imagen: contenidoCurso.querySelector('img').src,
        nombre: contenidoCurso.querySelector('h4').textContent,
        precio: contenidoCurso.querySelector('p span').textContent,
        id: contenidoCurso.querySelector('a').getAttribute('data-id'),
        cantidad: 1,
    }
    //console.log(htmlCurso);
    agregarCarrito = [...agregarCarrito, extraerDatos];
    console.log(agregarCarrito);
}