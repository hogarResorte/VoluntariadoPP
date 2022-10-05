//**********  VINILLA JAVASCRIPT
//*******************************
//*******************************
//  Main
const cards = document.getElementById('cards');
const items = document.getElementById('items');
let contadorIcono = document.getElementById('contadorIcono');
let precioFinal = document.getElementById('precioFinal');
const footer = document.getElementById('footer');
const templeteCard = document.getElementById('template-card').content;
const templeteFooter = document.getElementById('template-footer').content;
const templeteCarrito = document.getElementById('template-carrito').content;
const fragment = document.createDocumentFragment();
let carrito = {}

//  Eventos

document.addEventListener('DOMContentLoaded',()=>{
   fetchData();
   if (localStorage.getItem('carrito')) {
       carrito = JSON.parse(localStorage.getItem('carrito'));
       paintInCarrito();
   }
});

cards.addEventListener('click', e => {
   addCarrito(e)
});

items.addEventListener('click', e =>{
   botonSumRes(e);
})
// Funciones
const fetchData = async () => {
   try {
       const res =await fetch('myFakeApi.json');
       const data =await res.json();
       //console.log(data);
       paintCards(data);
   } catch(error){
       console.log(error);
   }
}

const paintCards = data => {
   data.forEach(producto => {
       templeteCard.querySelector('h5').textContent = producto.titulo;
       templeteCard.querySelector('p').textContent = producto.precio;
       templeteCard.querySelector('span').textContent = producto.moneda;
       templeteCard.querySelector('img').setAttribute('src', producto.imagenUrl);
       templeteCard.querySelector('.boton-carrito').dataset.id = producto.id;

       const clone = templeteCard.cloneNode(true);
       fragment.appendChild(clone);
   })
   cards.appendChild(fragment);
}

const addCarrito = e => {
   if (e.target.classList.contains('boton-carrito')) {
       
       setCarrito(e.target.parentElement);
   }
   e.stopPropagation();
}

const setCarrito = objeto => {
   
   const producto = {
       id: objeto.querySelector('.boton-carrito').dataset.id,
       titulo: objeto.querySelector('h5').textContent,
       precio: objeto.querySelector('p').textContent,
       cantidad: 1
   }
   if (carrito.hasOwnProperty(producto.id)) {
       
       producto.cantidad = carrito[producto.id].cantidad + 1 ;
   }
   carrito[producto.id] = {...producto}
   paintInCarrito()
   

   
}

const paintInCarrito = () => {
  
   items.innerHTML = '';
   Object.values(carrito).forEach(producto => {
       templeteCarrito.querySelector('th').textContent = producto.id;
       templeteCarrito.querySelectorAll('td')[0].textContent = producto.titulo;
       templeteCarrito.querySelectorAll('td')[1].textContent = producto.cantidad;
       templeteCarrito.querySelector('.botonSumar').dataset.id = producto.id;
       templeteCarrito.querySelector('.botonRestar').dataset.id = producto.id;
       templeteCarrito.querySelector('span').textContent = producto.cantidad * producto.precio;
       const clone = templeteCarrito.cloneNode(true);
       fragment.appendChild(clone);
       
       
   })
   items.appendChild(fragment);

   paintFooter();

   localStorage.setItem('carrito', JSON.stringify(carrito));
}

const paintFooter = () => {
   footer.innerHTML = '';
   if (Object.keys(carrito).length === 0) {
       footer.innerHTML =`<th scope="row" colspan="5"> Carrito vacío es momento de comprar!</th>
       `
       return
   }

   const numCantidad = Object.values(carrito).reduce((acumulador, {cantidad}) => acumulador + cantidad, 0);
   const numPrecio = Object.values(carrito).reduce((acumulador, {cantidad, precio}) => acumulador + cantidad * precio, 0);
   
   templeteFooter.querySelectorAll('td')[0].textContent = numCantidad;
   templeteFooter.querySelector('span').textContent = numPrecio;

   // contador productos en el icono del nav
   contadorIcono.innerHTML = numCantidad;
   // Imprimir en el check-out
   precioFinal.innerHTML = "$" + numPrecio;

   const clone = templeteFooter.cloneNode(true);
   fragment.appendChild(clone);
   footer.appendChild(fragment);



   const botonVaciar = document.getElementById('vaciar-carrito');
   botonVaciar.addEventListener('click', () => {
       carrito = {}
       paintInCarrito();
       
       //Cambia el contador del icono " " con botonVaciar
       contadorIcono.innerHTML ="";
       //Cambia el check-out a "" con botonVaciar
       precioFinal.innerHTML = "$"+ 0;
   })
   
}
//funcion boton restar sumar funcion
const botonSumRes = e => {
   ////console.log(e.target);
   //Aumentar(sumar con boton)
   if (e.target.classList.contains('botonSumar')) {
       
       const producto = carrito[e.target.dataset.id];
       producto.cantidad ++;
       carrito[e.target.dataset.id] = {...producto}
       paintInCarrito();
   }

   if (e.target.classList.contains('botonRestar')) {
       const producto = carrito[e.target.dataset.id];
       producto.cantidad --;
       if (producto.cantidad === 0){
           delete carrito[e.target.dataset.id];
       }
       paintInCarrito();
   }
   e.stopPropagation()
}

// Ocultar/Mortrar contenido carrito jquerry evento en el icono carrito nav

let mostrarCarrito = document.querySelector('#mostrar-carrito');
let tablaCarrito = document.querySelector('.tabla-carrito');


mostrarCarrito.addEventListener('click',function(){
    if (tablaCarrito.style.display === 'block') {
        tablaCarrito.style.display = 'none';
    } else {
        tablaCarrito.style.display = 'block';
    }
});
// Function para abrir check-out con onclick en boton pagar desde la tabla del carrito

function mostrarOcultar() {
    let checkOut = document.getElementById("check-out");
    if (checkOut.style.display === "none") {
        checkOut.style.display = "block";
    } else {
        checkOut.style.display = "none";
    }
}

// Reloj count-down section Promociones

let countDate = new Date('september 16, 2021 00:00:00').getTime();

function countDown() {
    
    let now = new Date().getTime();
    gap = countDate - now;

    let segundo = 1000;
    let minuto = segundo * 60;
    let hora = minuto * 60;
    let dia = hora * 24;

    let d = Math.floor(gap / (dia));
    let h = Math.floor((gap % (dia)) / (hora));
    let m = Math.floor((gap % (hora)) / (minuto));
    let s = Math.floor((gap % (minuto)) / (segundo));

    document.getElementById('dias').innerText = d;
    document.getElementById('horas').innerText = h;
    document.getElementById('minutos').innerText = m;
    document.getElementById('segundos').innerText = s;
}

setInterval(function(){
    countDown()
},1000.)


//**********  DESDE AQUÍ JQUERRY
//*******************************
//*******************************

// Header, Nav y Carousel

$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
        if ($(window).scrollTop() > 68) {
            $('header .header-2').addClass('header-activo');
        } else {
            $('header .header-2').removeClass('header-activo');
        }
    });

    $('.home-slider').owlCarousel({
        items:1,
        nav:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:8000,
        loop:true
    }); 
    //Botón Cerrar caja check-out 

    $("#cerrar").click(function(){
        $(".check-out").hide();
        carrito = {}
        paintInCarrito();
    });

    //Botón cerrar con submit para cerrar solo para el test

    $("[boton-submit]").click(function(){
        $(".check-out").hide();
    })
});