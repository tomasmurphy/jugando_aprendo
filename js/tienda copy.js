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

        // VARIABLES 
        const btnVaciar = document.querySelector('#btnVaciar');
        const btnComprar = document.querySelector('#btnComprar');
        const btnEsculturas = document.querySelector("#btnEsculturas");
        const btnPinturas = document.querySelector("#btnPinturas");
        const btnFotos = document.querySelector("#btnFotos");
        let carrito = [];
        const crearItems = document.querySelector('#crearItems');
        const divCarrito = document.querySelector('#carrito');
        const total = document.querySelector('#total');
        const miLocalStorage = window.localStorage;
        const abrirCarrito = document.querySelector("#abrirCarrito");
        const btnButton = document.querySelector("#button");

        // // EVENTOS BOTONES 
        btnButton.addEventListener("click", () => {
            const prueba = abrirCarrito.classList.contains("show");
            if (prueba === true) {
                abrirCarrito.classList.remove("show");
            }
        } )
        btnEsculturas.addEventListener("click", () => {
            location.replace(`${window.location.pathname}#Esculturas`)
            console.log(window.location)
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
        btnComprar.addEventListener("click", () => {
            let userActivo = JSON.parse(localStorage.getItem("user")),
                nombreInput = 'placeholder="Nombre completo"',
                emailInput = 'placeholder="email"',
                telefonoInput = 'placeholder="telefono"',
                direccionInput = 'placeholder="direccion"',
                cpInput = 'placeholder="cp"';
            if (userActivo != null) {
                nombreInput = `value="${userActivo.nombre}"`
                emailInput = `value="${userActivo.email}"`
                telefonoInput = `value="${userActivo.telefono}"`
                direccionInput = `value="${userActivo.direccion}"`
                cpInput = `value="${userActivo.cp}"`
            }
                
            Swal.fire({
                title: "Ingresa tus datos por favor",
                html: `
                    <input id="input1" class="mx-1 text-center col-11" type="text" ${nombreInput} style="display:block !important;">
                    <br>
                    <input id="input4" class="mx-1 text-center col-11"  type="text" ${direccionInput} style="display:block !important;">
                    <br>
                    <input id="input5" class="mx-1 text-center col-11"  type="text" ${cpInput}  style="display:block !important;">`,
                showCancelButton: true,
                confirmButtonText: "Comprar",
                cancelButtonText: "Cancelar",
                focusConfirm: false,
                preConfirm: () => {
                    const nombre = Swal.getPopup().querySelector('#input1').value
                    const direccion = Swal.getPopup().querySelector('#input4').value
                    const cp = Swal.getPopup().querySelector('#input5').value
                    if (!nombre || !direccion || !cp) {
                        Swal.showValidationMessage(`Por favor completa todos los campos`)
                    }
                }
            }).then(resultado => {
                if(resultado.isConfirmed){
                let nombre = document.getElementById("input1").value,
                direccion = document.getElementById("input4").value,
                cp = document.getElementById("input5").value,
                
            nuevoUsuario = new NuevoUsuario(nombre, direccion, cp);
            localStorage.setItem("user", JSON.stringify(nuevoUsuario))
                let html =   `${divCarrito.numeroUnidadesItem} x ${divCarrito.miItem[0].nombre} - $ ${miItem[0].precio}${nombre}${direccion}${cp}`
                location.replace(`https://wa.me/+5493416024897/?text='${html}'` )
            }
            
            })
        });
        btnVaciar.addEventListener("click", () => {
            Swal.fire({
                title: "Vaciar el carrito",
                text: "¿Estás seguro que quieres vaciar el carrito?",
                showCancelButton: true,
                confirmButtonText: "Vaciar",
                cancelButtonText: "Cancelar",
            }).then((result) => {
                if (result.isConfirmed) {
                    vaciarCarrito();
                }
            })
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
            var borrar = document.getElementById("items");
            padre = borrar.parentNode;
            padre.removeChild(borrar);
            const crearMain = document.createElement('main');
            crearMain.setAttribute("id", "items")
            crearMain.classList.add("items", "col-12", "row");
            crearItems.appendChild(crearMain);

            switch (filtro) {
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
                    divProductos.classList.add('card', 'col-12', 'col-sm-6', 'col-md-3');
                    const divProductosCardBody = document.createElement('div');
                    divProductosCardBody.classList.add('card-body');
                    const divProductosTitle = document.createElement('h5');
                    divProductosTitle.classList.add('card-title');
                    divProductosTitle.textContent = info.nombre;
                    const divProductosImagen = document.createElement('img');
                    divProductosImagen.classList.add('img-fluid');
                    divProductosImagen.setAttribute('src', info.imagen);
                    const divProductosDescripcion = document.createElement('a');
                    divProductosDescripcion.classList.add('btnInfo');
                    divProductosDescripcion.setAttribute("id", 'btnInfo')
                    divProductosDescripcion.textContent = `+`;
                    divProductosDescripcion.dataset.id = info.id;
                    divProductosDescripcion.addEventListener("click", () => {
                        location.replace(`${window.location.pathname}#${info.id}`)
                        traerId();
                    });

                    const divProductosPrecio = document.createElement('p');
                    divProductosPrecio.classList.add('card-text');
                    divProductosPrecio.textContent = `$ ${info.precio}`;
                    const divProductosBoton = document.createElement('button');
                    divProductosBoton.classList.add('btn');
                    divProductosBoton.textContent = 'Agregar al carrito';
                    divProductosBoton.setAttribute('marcador', info.id);
                    divProductosBoton.addEventListener('click', agregarAlCarrito);

                    divProductosCardBody.appendChild(divProductosTitle);
                    divProductosCardBody.appendChild(divProductosImagen);
                    divProductosCardBody.appendChild(divProductosDescripcion);
                    divProductosCardBody.appendChild(divProductosPrecio);
                    divProductosCardBody.appendChild(divProductosBoton);
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
                    divProductosImagen.setAttribute('src', info.imagen);
                    const divProductosDescripcion = document.createElement('p');
                    divProductosDescripcion.classList.add('card-text', "col-12", "col-md-5");
                    divProductosDescripcion.textContent = info.descripcion;
                    const divProductosPrecio = document.createElement('p');
                    divProductosPrecio.classList.add('card-text');
                    divProductosPrecio.textContent = `$ ${info.precio}`;
                    const divProductosBoton = document.createElement('button');
                    divProductosBoton.classList.add('btn');
                    divProductosBoton.textContent = 'Agregar al carrito';
                    divProductosBoton.setAttribute('marcador', info.id);
                    divProductosBoton.addEventListener('click', agregarAlCarrito);

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

        function agregarAlCarrito(evento) {
            carrito.push(evento.target.getAttribute('marcador'))
            actualizarCarrito();
            guardarCarritoEnLocalStorage();
            abrirCarrito.classList.add("show");
        }

        function actualizarCarrito() {
            divCarrito.textContent = '';
            const carritoSinDuplicados = [...new Set(carrito)];
            carritoSinDuplicados.forEach((item) => {
                const miItem = productos.filter((itemProductos) => {
                    return itemProductos.id === parseInt(item);
                });
                const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                    return itemId === item ? total += 1 : total;
                }, 0);
                
                const divProductos = document.createElement('li');
                divProductos.classList.add('list-group-item', 'text-right', 'mx-2');
                divProductos.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - $ ${miItem[0].precio}`;
                const miBoton = document.createElement('button');
                miBoton.classList.add('btn');
                miBoton.textContent = 'X';
                miBoton.style.marginLeft = '1rem';
                miBoton.dataset.item = item;
                miBoton.addEventListener('click', borrarItemCarrito);
                divProductos.appendChild(miBoton);
                divCarrito.appendChild(divProductos);
            });
            total.textContent = calcularTotal();
        }

        function borrarItemCarrito(evento) {
            const id = evento.target.dataset.item;
            carrito = carrito.filter((carritoId) => {
                return carritoId !== id;
            });
            actualizarCarrito();
            guardarCarritoEnLocalStorage();

        }
        function calcularTotal() {
            return carrito.reduce((total, item) => {
                const miItem = productos.filter((itemProductos) => {
                    return itemProductos.id === parseInt(item);
                });
                return total + miItem[0].precio;
            }, 0).toFixed(0);
        }

        function guardarCarritoEnLocalStorage() {
            miLocalStorage.setItem('carrito', JSON.stringify(carrito));
        }

        function cargarCarritoDeLocalStorage() {
            if (miLocalStorage.getItem('carrito') !== null) {
                carrito = JSON.parse(miLocalStorage.getItem('carrito'));
            }
        }

        function vaciarCarrito() {
            carrito = [];
            actualizarCarrito();
            localStorage.removeItem("carrito");
        }

        // INICIALIZAR FUNCIONES 
        cargarCarritoDeLocalStorage();
        actualizarCarrito();
        traerId()
    };
    // INICIALIZAR EL FETCH 
    importarProductos()
});
