document.addEventListener('DOMContentLoaded', () => {
    // CONSTRUCTOR DE USUARIO
    class NuevoUsuario {
        constructor(nombre, direccion, cp) {
            this.nombre = nombre,
                this.direccion = direccion,
                this.cp = cp;
        }
    }
    let nuevoUsuario = ""
    // PRODUCTOS IMPORTADOS DE JSON
    const productosJson = '../js/productos.json'
    const importarProductos = async () => {
        const respuesta = await fetch(productosJson)
        const productos = await respuesta.json()
        let carrito = "";
        const crearItems = document.querySelector('#crearItems');
        const btnButton = document.querySelector("#button");
        let strProducto = "";
        const btnCero = document.querySelector("#btnCero");
        const btnCuatro = document.querySelector("#btnCuatro");
        const btnCinco = document.querySelector("#btnCinco");
  // BOTONES 
btnCero.addEventListener("click", () => {
  location.replace(`${window.location.pathname}#+0`)
  traerId();
});
btnCuatro.addEventListener("click", () => {
  location.replace(`${window.location.pathname}#+4`)
  traerId();
});
  btnCinco.addEventListener("click", () => {
  location.replace(`${window.location.pathname}#+5`)
  traerId();
});

  


        // CREAR MAIN DONDE CARGAR PRODUCTOS 
        const crearMain = document.createElement('main');
        crearMain.setAttribute("id", "items")
        crearMain.classList.add("items", "col-12", "row", "mx-0");
        crearItems.appendChild(crearMain);


        // FUNCIONES 
        function traerId() {
            const url = window.location;
            const hash = url.hash
            const id = hash.split("#")[1]
            cargarProductos(id);
        };
        function cargarProductos(filtro) {
            window.scrollTo(0, 0)
            var borrar = document.getElementById("items");
            padre = borrar.parentNode;
            padre.removeChild(borrar);
            const crearMain = document.createElement('main');
            crearMain.setAttribute("id", "items")
            crearMain.classList.add("items", "col-12", "row");
            crearItems.appendChild(crearMain);

            switch (filtro) {
                case undefined:
                    var productosFiltrados = productos;
                    break;

                case "+0":
                    var productosFiltrados = productos.filter(a => a.aPartirDe >= 0);
                    break;
                case "+4":
                    var productosFiltrados = productos.filter(a => (a.aPartirDe >= 4) && (a.aPartirDe < 5) );
                    break;
                case "+5":
                    var productosFiltrados = productos.filter(a => a.aPartirDe >= 5);
                    break;
                default:
                    var productosFiltrados = productos.filter(a => a.id == filtro);
                    break;
            }

            if (productosFiltrados.length > 1) {
                // POR CATEGORIA 
                productosFiltrados.forEach((info) => {
                    const divProductos = document.createElement('div');
                    divProductos.classList.add('card', 'mx-0', 'px-0', 'col-6', 'col-md-3');
                    const divProductosCardBody = document.createElement('div');
                    divProductosCardBody.classList.add('card-body', 'mx-0', 'px-0',);
                    const divProductosImagen = document.createElement('img');
                    divProductosImagen.classList.add('img-fluid', 'mx-0', 'px-0', 'opaco');
                    divProductosImagen.setAttribute('src', `../img/productos/${info.imagenUno}`);
                    const divProductosLink = document.createElement('a');
                    divProductosLink.addEventListener("click", () => {
                        location.replace(`${window.location.pathname}#${info.id}`)
                        traerId();
                    });
                    divProductosLink.appendChild(divProductosImagen)
                    divProductosCardBody.appendChild(divProductosLink);

                    divProductos.appendChild(divProductosCardBody);
                    crearMain.appendChild(divProductos);
                });
            } else {
                // POR ID 
                productosFiltrados.forEach((info) => {
                    const carruselProducto = `<div class="d-md-none justify-content-center">
                    <div
                    id="recipeCarousel1"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-inner" id="crearCarruselUno" role="listbox">
                      <img
                      class="carousel-item active img-fluid"
                      src="../img/productos/${info.imagenUno}"
                      alt="${info.altUno}"
                      data-bs-toggle="modal" data-toggle="modal" data-bs-target="#exampleModal"
                    />
                    <img
                      class="img-fluid carousel-item"
                      src="../img/productos/${info.imagenDos}"
                      alt="${info.altDos}"
                      data-bs-toggle="modal" data-toggle="modal" data-bs-target="#exampleModal"
                      />
                    <img
                      class="img-fluid carousel-item"
                      src="../img/productos/${info.imagenTres}"
                      alt="${info.altTres}"
                      data-bs-toggle="modal" data-toggle="modal" data-bs-target="#exampleModal"
                    />
                    </div>
                    
                    <a
                      class="carousel-control-prev w-aut"
                      href="#recipeCarousel1"
                      role="button"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon bg-transparent"
                        aria-hidden="true"
                      ></span>
                    </a>
                    <a
                      class="carousel-control-next w-aut"
                      href="#recipeCarousel1"
                      role="button"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon bg-transparent"
                        aria-hidden="true"
                      ></span>
                    </a>
                  </div>
              </div>`
       const carruselModal = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  

        <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content ">
            
            <div class="modal-body ">
              <div class="container-fluid modalContainer">
                <div
                id="recipeCarousel2"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner" id="crearCarruselUno" role="listbox">
                  <img
                  class="carousel-item active img-fluid"
                  src="../img/productos/${info.imagenUno}"
                  alt="${info.altUno}"
                />
                <img
                  class="img-fluid carousel-item"
                  src="../img/productos/${info.imagenDos}"
                  alt="${info.altDos}"/>
                <img
                  class="img-fluid carousel-item"
                  src="../img/productos/${info.imagenTres}"
                  alt="${info.altTres}"
                />
                </div>
                
                <a
                  class="carousel-control-prev w-aut margenModalFlecha"
                  href="#recipeCarousel2"
                  role="button"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon bg-transparent"
                    aria-hidden="true"
                  ></span>
                </a>
                <a
                  class="carousel-control-next w-aut margenModalFlecha"
                  href="#recipeCarousel2"
                  role="button"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon bg-transparent"
                    aria-hidden="true"
                  ></span>
                </a>
              </div>
            
            </div>
            </div>
        </div>
    </div>
`

                    const modal = document.createElement('div');
                    modal.innerHTML = carruselModal
                    const contenedor = document.createElement('div');
                    contenedor.classList.add('container-fluid');
                    const row = document.createElement('div');
                    row.classList.add("row", "maxDesk");
                    const cajaFoto = document.createElement('div')
                    cajaFoto.classList.add('col-12','col-md-6','conociendonosFoto')
                    cajaFoto.innerHTML = carruselProducto;
                    const divFotos = document.createElement('div')
                    divFotos.classList.add("d-none" ,"d-md-block") 
                    const img1 = document.createElement('img');
                    img1.setAttribute("data-bs-toggle","modal")
                    img1.setAttribute("data-toggle","modal")
                    img1.setAttribute("data-bs-target","#exampleModal")
                    img1.classList.add('img-fluid');
                    img1.setAttribute('src', `../img/productos/${info.imagenUno}`);
                    img1.setAttribute('alt', `../img/productos/${info.altUno}`);
                    const img2 = document.createElement('img');
                    img2.setAttribute("data-bs-toggle","modal")
                    img2.setAttribute("data-toggle","modal")
                    img2.setAttribute("data-bs-target","#exampleModal")
                    img2.classList.add('img-fluid');
                    img2.setAttribute('src', `../img/productos/${info.imagenDos}`);
                    img2.setAttribute('alt', `../img/productos/${info.altDos}`);
                    const img3 = document.createElement('img');
                    img3.setAttribute("data-bs-toggle","modal")
                    img3.setAttribute("data-toggle","modal")
                    img3.setAttribute("data-bs-target","#exampleModal")
                    img3.classList.add('img-fluid');
                    img3.setAttribute('src', `../img/productos/${info.imagenTres}`);
                    img3.setAttribute('alt', `../img/productos/${info.altTres}`);
                    const cajaProducto = document.createElement('div')
                    cajaProducto.classList.add('col-12','col-md-6','conociendonos')
                    const cajaEdad = document.createElement('div')
                    cajaEdad.classList.add('cajaEdad')
                    const edad = document.createElement('p');
                    edad.classList.add('textoEdad');
                    edad.textContent = `A partir de los ${info.aPartirDe} años`;
                    const edadImg = document.createElement('img');
                    edadImg.setAttribute('src', `../img/edad.png`);
                    const titulo = document.createElement('p');
                    titulo.classList.add('titulo');
                    titulo.textContent = `${info.nombre}`;
                    const precio = document.createElement('p');
                    precio.classList.add('precio');
                    precio.textContent = `$${info.precio} ARS`;
                    const textoRojo = document.createElement('p');
                    textoRojo.classList.add('texto','rojo');
                    textoRojo.textContent = `${info.textoUno}`;
                    const subInstrucciones = document.createElement('p');
                    subInstrucciones.classList.add('subtitulo');
                    subInstrucciones.textContent = ``;
                    const subContiene = document.createElement('p');
                    subContiene.classList.add('subtitulo');
                    subContiene.textContent = `¿Como jugamos?`;
                    const texto = document.createElement('p');
                    texto.classList.add('texto');
                    texto.textContent = `${info.textoDos}`;
                    const textoContiene = document.createElement('p');
                    textoContiene.classList.add('texto');
                    textoContiene.textContent = `${info.textoTres}`;


                    const divProductosBoton = document.createElement('button');
                    divProductosBoton.classList.add('btn', 'btnComprarEstilo');
                    divProductosBoton.textContent = 'Comprar';
                    divProductosBoton.setAttribute('marcador', info.id);
                    divProductosBoton.addEventListener("click", () => {
                        location.replace(`${window.location.pathname}#${info.id}`)
                            ;
                    });
                    divProductosBoton.addEventListener("click", () => {
                        let userActivo = JSON.parse(localStorage.getItem("user")),
                            nombreInput = 'placeholder="Nombre completo"',
                            direccionInput = 'placeholder="direccion"',
                            cpInput = 'placeholder="cp"';
                        if (userActivo != null) {
                            nombreInput = `value="${userActivo.nombre}"`
                            direccionInput = `value="${userActivo.direccion}"`
                            cpInput = `value="${userActivo.cp}"`
                        }

                        Swal.fire({
                            title: `
                            <img src="../img/logoTexto.svg" alt="">
                            `,
                            width: "50rem",
                            footer: `<img src="../img/footerSweet.svg" class="img-fluid mx-0 px-0" alt="">`,
                            showLoaderOnConfirm: true,
                            html: `
                            <div class="container">
  <div class="row text-center">
    <div class="col-12 col-md-6">
      <img src="../img/imgSweet.png" class="img-fluid borde" alt="">
    </div>
  <div class="col-12 col-md-6 flexSweet">
    <h1 class="titleSweet">Ingresa tus datos</h1>
    <input
    id="input1"
    class="mx-1 btnComprar text-center"
    type="text"
    ${nombreInput}
    style="display: block !important"
  />
  <br />
  <input
    id="input4"
    class="mx-1 text-center "
    type="text"
    ${direccionInput}
    style="display: block !important"
  />
  <br />
  <input
    id="input5"
    class="mx-1 text-center "
    type="text"
    ${cpInput}
    style="display: block !important"
  />
  </div>
  
  </div>
  
  </div>
                            `,
                            showCloseButton: true,
                            confirmButtonText: "Comprar",
                            buttonsStyling: false,
                            padding: "0",
                            grow: "row",
                            customClass: {
                                confirmButton: 'btnComprarEstilo'
                            },

                            focusConfirm: true,
                            preConfirm: () => {
                                const nombre = Swal.getPopup().querySelector('#input1').value
                                const direccion = Swal.getPopup().querySelector('#input4').value
                                const cp = Swal.getPopup().querySelector('#input5').value
                                if (!nombre || !direccion || !cp) {
                                    Swal.showValidationMessage(`Por favor completa todos los campos`)
                                }
                            }
                        }).then(resultado => {
                            if (resultado.isConfirmed) {
                                let nombre = document.getElementById("input1").value,
                                    direccion = document.getElementById("input4").value,
                                    cp = document.getElementById("input5").value,

                                    nuevoUsuario = new NuevoUsuario(nombre, direccion, cp);
                                localStorage.setItem("user", JSON.stringify(nuevoUsuario))
                                agregarAlCarrito()
                                let html = `https://api.whatsapp.com/send?phone=5492604530612&text=Hola%20Jugando%20Aprendo😀!%20Me%20interesa%20el%20juego%20🧩%20${strProducto}.%20Mi%20nombre%20es%20${nombre},%20vivo%20en%20${direccion}%20y%20el%20codigo%20postal%20es%20${cp}❤️`
                                window.open((html), "_blank")
                            }

                        })
                    });
                    const btnSeguir = document.createElement('button');
                    btnSeguir.classList.add('btn', 'btnSeguirEstilo');
                    btnSeguir.textContent = 'Seguir mirando';
                    btnSeguir.addEventListener("click", () => {
                        location.replace(`${window.location.pathname}`)
                            ;
                    });
                    const botonera = document.createElement('div');
                    botonera.classList.add("botonera");
                    
                    botonera.appendChild(divProductosBoton)
                    botonera.appendChild(btnSeguir)
                    divFotos.appendChild(img1)
                    divFotos.appendChild(img2)
                    divFotos.appendChild(img3)
                    cajaFoto.appendChild(divFotos)
                    cajaEdad.appendChild(edadImg)
                    cajaEdad.appendChild(edad)
                    cajaProducto.appendChild(cajaEdad)
                    cajaProducto.appendChild(titulo)
                    cajaProducto.appendChild(precio)
                    cajaProducto.appendChild(textoRojo)
                    cajaProducto.appendChild(subInstrucciones)
                    cajaProducto.appendChild(texto)
                    cajaProducto.appendChild(subContiene)
                    cajaProducto.appendChild(textoContiene)
                    cajaProducto.appendChild(botonera)
                    crearMain.appendChild(modal)
                    
                    row.appendChild(cajaFoto)
                    row.appendChild(cajaProducto)
                    contenedor.appendChild(row)
                    crearMain.appendChild(contenedor)
                    ;

                });
            }
        }

        function agregarAlCarrito() {
            const url = window.location;
            const hash = url.hash
            const id = hash.split("#")[1]
            let producto = productos.filter(a => a.id == id)[0]

            strProducto = `${producto.nombre} ($${producto.precio})`

            return strProducto
        }
        traerId()
    };
    // INICIALIZAR EL FETCH 
    importarProductos()
});
