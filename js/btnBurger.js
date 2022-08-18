document.addEventListener('DOMContentLoaded', () => {        const btnBurger = document.querySelector('#button');
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

        let items = document.querySelectorAll('.carousel .carousel-item')

    items.forEach((el) => {
        const minPerSlide = 1
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
    
    })

    