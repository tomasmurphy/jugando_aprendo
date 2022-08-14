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
        crearMain.classList.add("items", "col-12", "row");
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
                    divProductosImagen.classList.add('img-fluid', 'mx-0', 'px-0',);
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
                    const divProductos = document.createElement('div');
                    divProductos.classList.add('card', 'col-12');
                    const divProductosCardBody = document.createElement('div');
                    divProductosCardBody.classList.add('card-body', "row");
                    const divProductosTitle = document.createElement('h5');
                    divProductosTitle.classList.add('card-title');
                    divProductosTitle.textContent = info.nombre;
                    const divProductosImagen = document.createElement('img');
                    divProductosImagen.classList.add('img-fluid', "col-12", "col-md-3");
                    divProductosImagen.setAttribute('src', `../img/${info.imagen}`);
                    const divProductosDescripcion = document.createElement('p');
                    divProductosDescripcion.classList.add('card-text', "col-12", "col-md-5");
                    divProductosDescripcion.textContent = info.descripcion;
                    const divProductosPrecio = document.createElement('p');
                    divProductosPrecio.classList.add('card-text');
                    divProductosPrecio.textContent = `$ ${info.precio}`;
                    const divProductosBoton = document.createElement('button');
                    divProductosBoton.classList.add('btn', 'btnSweet');
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
      <img src="../img/imgSweet.svg" class="img-fluid borde" alt="">
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
                                confirmButton: 'btnSweet'
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
                                let html = `Hola Jugando Aprendo! Me interesa ${strProducto}. Mi nombre es 
                            ${nombre} vivo en ${direccion} y el codigo postal es ${cp}`
                                window.open(`https://wa.me/+5493416024897/?text='${html}'`, "_blank")
                            }

                        })
                    });

                    divProductosCardBody.appendChild(divProductosTitle);
                    divProductosCardBody.appendChild(divProductosImagen);
                    divProductosCardBody.appendChild(divProductosDescripcion);
                    divProductosCardBody.appendChild(divProductosPrecio);
                    divProductosCardBody.appendChild(divProductosBoton);
                    divProductos.appendChild(divProductosCardBody);
                    crearMain.appendChild(divProductos);

                });
            }
        }

        function agregarAlCarrito() {
            const url = window.location;
            const hash = url.hash
            const id = hash.split("#")[1]
            let producto = productos.filter(a => a.id == id)[0]

            strProducto = `${producto.nombre} $${producto.precio}`

            return strProducto
        }
        traerId()
    };
    // INICIALIZAR EL FETCH 
    importarProductos()
});
