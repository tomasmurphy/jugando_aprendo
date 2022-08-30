const btnCreando = document.querySelector('#btnCreando')
btnCreando.addEventListener("click", () => {
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
placeholder="Nombre"
style="display: block !important"
/>
<br />
<textarea class="mx-1" name="mensaje" 
placeholder="¡Contanos cual es tu evento y que necesitas!" rows="5" id="mensaje"></textarea>
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
        const mensaje = Swal.getPopup().querySelector('#mensaje').value
        if (!nombre || !mensaje) {
          Swal.showValidationMessage(`Por favor completa todos los campos`)
        }
      }
    }).then(resultado => {
      if (resultado.isConfirmed) {
        let nombre = document.getElementById("input1").value,
        mensaje = document.getElementById("mensaje").value,
        celu = screen.width < 990 ? "api" : "web",
        html = `https://${celu}.whatsapp.com/send?phone=5492604530612&text=Hola%20Jugando%20Aprendo😀!.%20Mi%20nombre%20es%20${nombre},%20${mensaje}%20❤️`
        window.open((html), "_blank")
      }

    })
  });
