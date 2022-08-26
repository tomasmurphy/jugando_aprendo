document.addEventListener('DOMContentLoaded', () => {        
        const btnBurger = document.querySelector('#button');
        const burger = document.querySelector('#burger');
        const cruz = document.querySelector('#cruz');
        const logo = document.querySelector('#logo');

        btnBurger.addEventListener("click", () => {
            const prueba = burger.classList.contains("d-none");
            if (prueba === true) {
                burger.classList.remove("d-none");
                cruz.classList.add("d-none");
                logo.classList.remove("desaparece")
            }else{
                burger.classList.add("d-none");
                cruz.classList.remove("d-none");
                logo.classList.add("desaparece")
            }
        } )
        let icono = window.location.pathname.lastIndexOf('/') == 16 ? "." : "..";
        console.log()
        let celu = screen.width < 990 ? "api" : "web";
        let link = `https://${celu}.whatsapp.com/send?phone=5492604530612&text=Hola%20Jugando%20Aprendo😀!`
        
        let contenidoWs = `
        <img
          class="whatsapp-icon"
          src="${icono}/img/whatsapp.svg"
          alt="ícono de whatsapp"
      />`


        const crearWs = document.querySelector('#whatsapp');
        const cuerpoWs = document.createElement('a')
        cuerpoWs.setAttribute("href", link)  
        cuerpoWs.setAttribute('target', '_blank')
        cuerpoWs.innerHTML = contenidoWs
        crearWs.appendChild(cuerpoWs);
        
        
    })

    