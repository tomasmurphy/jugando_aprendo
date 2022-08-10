
const btnEnviar = document.querySelector("#btnEnviar")

btnEnviar.addEventListener("click", () => {
    let nuevoUsuario = ""
    let
        nombre = document.getElementById("name").value,
        mensaje = document.getElementById("message").value,
        mail = document.getElementById("email").value;

    nuevoUsuario = new NuevoUsuario(nombre, mensaje, mail);
    function enviarEmail() {
        emailjs.init("ImGGQgEG_q46xJHvb")
        emailjs.send("service_7wx0hvj", "template_5cz2bod", {
            name: `${nuevoUsuario.nombre}`,
            message: `${nuevoUsuario.mensaje}`,
            to_email: `${nuevoUsuario.mail}`
    
        }).then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
    }
    enviarEmail(nuevoUsuario)
    Swal.fire({
        title: "Message send",
        text: "Thank you for contacting me, I will contact you as soon as possible. Cheers",
        confirmButtonText: "OK",
        confirmButtonColor: "#6f1a07ff",
        color: '#2b2118ff',
    }).then((result) => {
        if (result.isConfirmed) {
            location.reload();
        }
    })     
})

class NuevoUsuario {
    constructor(nombre, mensaje, mail) {
        this.nombre = nombre,
            this.mensaje = mensaje,
            this.mail = mail;
    }
}


