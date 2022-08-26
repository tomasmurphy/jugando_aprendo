document.addEventListener('DOMContentLoaded', () => {
    // PRODUCTOS IMPORTADOS DE JSON
    const productosJson = './js/productos.json'
    const importarProductos = async () => {
        const respuesta = await fetch(productosJson)
        const productos = await respuesta.json()
        const crearCarruselUno = document.querySelector('#crearCarruselUno');
        const crearCarruselDos = document.querySelector('#crearCarruselDos');
        
        

        function cargarProductos(filtro) {
            
                var productosCarouselUno = productos.filter(a => (a.id <= 9));;            
                var productosCarouselDos = productos.filter(a => (a.id > 9));;

            
                // CARRUSEL UNO
                productosCarouselUno.forEach((info) => {
                    
                    const divItem = document.createElement('div');
                    divItem.classList.add('carousel-item');
                    if (info == productos[0]){
                        divItem.classList.add('active');
                        
                    }
                    const divCol = document.createElement('div');
                    divCol.classList.add('col-md-3');
                    const divCard = document.createElement('div');
                    divCard.classList.add('card');
                    const divCardImg = document.createElement('div');
                    divCardImg.classList.add('card-img');
                    const img = document.createElement('img');
                    img.classList.add('img-fluid');
                    img.setAttribute('src', `./img/productos/${info.imagenUno}`);
                    img.setAttribute('alt', `${info.altUno}`);
                    const aLink = document.createElement('a');
                    aLink.setAttribute('href', `./secciones/jugando.html#${info.id}`)
                    
                    aLink.appendChild(img)
                    divCardImg.appendChild(aLink)
                    divCard.appendChild(divCardImg)
                    divCol.appendChild(divCard);
                    divItem.appendChild(divCol);
                    crearCarruselUno.appendChild(divItem);
                    
                });
                // CARRUSEL DOS 
                productosCarouselDos.forEach((info) => {
                    
                    const divItem = document.createElement('div');
                    divItem.classList.add('carousel-item');
                    if (info == productos[9]){
                        divItem.classList.add('active');
                        
                    }
                    const divCol = document.createElement('div');
                    divCol.classList.add('col-md-3');
                    const divCard = document.createElement('div');
                    divCard.classList.add('card');
                    const divCardImg = document.createElement('div');
                    divCardImg.classList.add('card-img');
                    const img = document.createElement('img');
                    img.classList.add('img-fluid');
                    img.setAttribute('src', `./img/productos/${info.imagenUno}`);
                    img.setAttribute('alt', `${info.altUno}`);
                    const aLink = document.createElement('a');
                    aLink.setAttribute('href', `./secciones/jugando.html#${info.id}`)
                    
                    aLink.appendChild(img)
                    divCardImg.appendChild(aLink)
                    divCard.appendChild(divCardImg)
                    divCol.appendChild(divCard);
                    divItem.appendChild(divCol);
                    crearCarruselDos.appendChild(divItem);
                    
                });
                let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
    const cantFotos = screen.width < 768 ? 2 : 4;
    const minPerSlide = cantFotos 
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})
            }        
cargarProductos()
        
            };
    // INICIALIZAR EL FETCH 
    importarProductos()
    
});

