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
        const btnTodos = document.querySelector("#btnTodos");
        const btnEsculturas = document.querySelector("#btnEsculturas");
        const btnPinturas = document.querySelector("#btnPinturas");
        const btnFotos = document.querySelector("#btnFotos");
        let carrito = "";
        const crearItems = document.querySelector('#crearItems');
        const btnButton = document.querySelector("#button");
        let strProducto = "";

        // // EVENTOS BOTONES 
        btnTodos.addEventListener("click", () => {
            location.replace(`${window.location.pathname}`)

            traerId();

        });
        btnEsculturas.addEventListener("click", () => {
            location.replace(`${window.location.pathname}#Esculturas`)

            traerId();

        });
        btnPinturas.addEventListener("click", () => {
            location.replace(`${window.location.pathname}#Pinturas`)
            traerId();
        });
        btnFotos.addEventListener("click", () => {
            location.replace(`${window.location.pathname}#Fotos`)
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
                    btnEsculturas.classList.remove("activo");
                    btnPinturas.classList.add("activo");
                    btnFotos.classList.add("activo");
                    break;

                case "Esculturas":
                    var productosFiltrados = productos.filter(a => a.categoria === filtro);
                    btnEsculturas.classList.remove("activo");
                    btnPinturas.classList.add("activo");
                    btnFotos.classList.add("activo");
                    break;
                case "Pinturas":
                    var productosFiltrados = productos.filter(a => a.categoria === filtro);
                    btnPinturas.classList.remove("activo");
                    btnEsculturas.classList.add("activo");
                    btnFotos.classList.add("activo");
                    break;
                case "Fotos":
                    var productosFiltrados = productos.filter(a => a.categoria === filtro);
                    btnFotos.classList.remove("activo");
                    btnPinturas.classList.add("activo");
                    btnEsculturas.classList.add("activo");
                    break;
                default:
                    var productosFiltrados = productos.filter(a => a.id == filtro);
                    btnFotos.classList.add("activo");
                    btnEsculturas.classList.add("activo");
                    btnPinturas.classList.add("activo");

                    break;
            }

            if (productosFiltrados.length > 1) {
                // POR CATEGORIA 
                productosFiltrados.forEach((info) => {
                    const divProductos = document.createElement('div');
                    divProductos.classList.add('card', 'mx-0', 'px-0', 'col-12', 'col-sm-6', 'col-md-3');
                    const divProductosCardBody = document.createElement('div');
                    divProductosCardBody.classList.add('card-body', 'mx-0', 'px-0',);
                    const divProductosImagen = document.createElement('img');
                    divProductosImagen.classList.add('img-fluid', 'mx-0', 'px-0', 'opaco');
                    divProductosImagen.setAttribute('src', `../img/${info.imagen}`);
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
                    const contenedor = document.createElement('div');
                    contenedor.classList.add('conteiner-fluid');
                    const row = document.createElement('div');
                    row.classList.add("row");
                    const cajaFoto = document.createElement('div')
                    cajaFoto.classList.add('col-12','col-md-6','conociendonosFoto')
                    const img1 = document.createElement('img');
                    img1.classList.add('img-fluid');
                    img1.setAttribute('src', `../img/${info.imagen}`);
                    const img2 = document.createElement('img');
                    img2.classList.add('img-fluid');
                    img2.setAttribute('src', `../img/${info.imagen}`);
                    const img3 = document.createElement('img');
                    img3.classList.add('img-fluid');
                    img3.setAttribute('src', `../img/${info.imagen}`);
                    const cajaProducto = document.createElement('div')
                    cajaProducto.classList.add('col-12','col-md-6','conociendonos')
                    const cajaEdad = document.createElement('div')
                    cajaEdad.classList.add('cajaEdad')
                    const edad = document.createElement('p');
                    edad.classList.add('textoEdad');
                    edad.textContent = `3 a 8 años`;
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
                    textoRojo.textContent = `${info.descripcion}`;
                    const subInstrucciones = document.createElement('p');
                    subInstrucciones.classList.add('subtitulo');
                    subInstrucciones.textContent = `Instrucciones`;
                    const subContiene = document.createElement('p');
                    subContiene.classList.add('subtitulo');
                    subContiene.textContent = `Contiene`;
                    const texto = document.createElement('p');
                    texto.classList.add('texto');
                    texto.textContent = `${info.descripcion}`;
                    const textoContiene = document.createElement('p');
                    textoContiene.classList.add('texto');
                    textoContiene.textContent = `${info.descripcion}`;


                    const divProductosBoton = document.createElement('button');
                    divProductosBoton.classList.add('btn', 'mb-5', 'btnComprarEstilo');
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

                    cajaFoto.appendChild(img1)
                    cajaFoto.appendChild(img2)
                    cajaFoto.appendChild(img3)
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
                    cajaProducto.appendChild(divProductosBoton)
                    
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
