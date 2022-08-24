let emociones = 0,
    tangram = 0,
    mis_letritas = 0,
    abc = 0,
    conociéndonos = 0,
    el_que_busca_encuentra = 0,
    quién_lo_ve_primero = 0,
    círculo_goethe = 0,
    enhebrado = 0,
    equilibrista = 0,
    mi_familia = 0,
    geometría_didáctica = 0,
    memotestx20 = 0,
    mis_bloques = 0,
    monstruos_de_colores = 0,
    memotestx40 = 0,
    arcoiris_waldorff = 0,
    arcoiris_nube_sol = 0,
    arcoiris_baby = 0;

let preguntaUno = "",
    preguntaDos = "",
    preguntaTres = "",
    preguntaCuatro = "",
    preguntaCinco = "",
    preguntaSeis = "";


document.getElementById('btnFinalizar').onclick = function () {
    var radio1 = document.getElementsByName("preguntaUno");
    var radio2 = document.getElementsByName("preguntaDos");
    var radio3 = document.getElementsByName("preguntaTres");
    var radio4 = document.getElementsByName("preguntaCuatro");
    var radio5 = document.getElementsByName("preguntaCinco");
    var radio6 = document.getElementsByName("preguntaSeis");
    var preguntaUno = (Array.from(radio1).find(radio => radio.checked)).value;

    var preguntaDos = (Array.from(radio2).find(radio => radio.checked)).value;

    var preguntaTres = (Array.from(radio3).find(radio => radio.checked)).value;

    var preguntaCuatro = (Array.from(radio4).find(radio => radio.checked)).value;

    var preguntaCinco = (Array.from(radio5).find(radio => radio.checked)).value;

    var preguntaSeis = (Array.from(radio6).find(radio => radio.checked)).value;

    switch (preguntaUno) {
        case "1":
            monstruos_de_colores += -2,
                mis_letritas += -2,
                mis_bloques += 2,
                mi_familia += -2,
                enhebrado += 2,
                conociéndonos += 2,
                arcoiris_waldorff += -2
            break
        case "2":
            memotestx40 += 2,
                memotestx20 += -2,
                emociones += 2,
                el_que_busca_encuentra += 2,
                arcoiris_waldorff += -2,
                arcoiris_nube_sol += -2
            break
        case "3":
            tangram += 2,
                monstruos_de_colores += 2,
                mis_letritas += -2,
                mi_familia += -2,
                memotestx20 += 2,
                arcoiris_waldorff += -2

            break
    }
    switch (preguntaDos) {
        case "1":
            monstruos_de_colores += -2,
                mis_bloques += 2,
                equilibrista += 2,
                emociones += -2,
                círculo_goethe += 2,
                arcoiris_waldorff += -2
            break
        case "2":
            tangram += 2,
                monstruos_de_colores += 2,
                mis_letritas += -2,
                mi_familia += -2,
                equilibrista += -2,
                arcoiris_nube_sol += 2
            break
        case "3":
            mis_letritas += 2,
                mis_bloques += -2,
                mi_familia += 2,
                el_que_busca_encuentra += -2,
                conociéndonos += -2,
                arcoiris_waldorff += 2
            break
    }
    switch (preguntaTres) {
        case "1":
            mis_letritas += -2,
                mis_bloques += 2,
                equilibrista += 2,
                conociéndonos += 2,
                arcoiris_nube_sol += -2,
                abc += -2

            break
        case "2":
            tangram += 2,
                monstruos_de_colores += 2,
                mis_bloques += -2,
                memotestx20 += -2,
                conociéndonos += -2,
                arcoiris_nube_sol += 2

            break
        case "3":
            tangram += -2,
                quién_lo_ve_primero += -2,
                memotestx20 += 2,
                círculo_goethe += 2,
                arcoiris_waldorff += -2,
                abc += 2
            break
    }
    switch (preguntaCuatro) {
        case "1":
            memotestx40 += -2,
                equilibrista += -2,
                emociones += 2,
                el_que_busca_encuentra += 2,
                arcoiris_waldorff += 2,
                abc += -2
            break
        case "2":
            tangram += 2,
                memotestx20 += 2,
                enhebrado += -2,
                círculo_goethe += 2,
                arcoiris_waldorff += -2,
                arcoiris_nube_sol += -2
            break
        case "3":
            tangram += 2,
                monstruos_de_colores += 2,
                mis_letritas += -2,
                mis_bloques += -2,
                círculo_goethe += -2,
                abc += 2
            break
    }
    switch (preguntaCinco) {
        case "1":
            tangram += 2,
                quién_lo_ve_primero += -2,
                mis_bloques += -2,
                emociones += -2,
                arcoiris_waldorff += 2,
                arcoiris_nube_sol += 2
            break
        case "2":
            tangram += -2,
                monstruos_de_colores += 2,
                memotestx20 += 2,
                el_que_busca_encuentra += 2,
                arcoiris_waldorff += -2,
                arcoiris_nube_sol += -2
            break
        case "3":
            tangram += 2,
                memotestx40 += -2,
                geometría_didáctica += -2,
                emociones += -2,
                arcoiris_waldorff += 2,
                arcoiris_nube_sol += 2
            break
    }
    switch (preguntaSeis) {
        case "1":
            mis_letritas += -2,
                memotestx20 += 2,
                geometría_didáctica += 2,
                el_que_busca_encuentra += -2,
                conociéndonos += -2,
                abc += 2
            break
        case "2":
            monstruos_de_colores += 2,
                mis_letritas += 2,
                mis_bloques += 2,
                memotestx40 += -2,
                arcoiris_waldorff += -2,
                abc += -2
            break
        case "3":
            tangram += -2,
                mis_letritas += -2,
                memotestx40 += 2,
                emociones += -2,
                arcoiris_waldorff += 2,
                arcoiris_nube_sol += 2
            break
    }
    const llaves = {
        emociones,
        tangram,
        mis_letritas,
        abc,
        conociéndonos,
        el_que_busca_encuentra,
        quién_lo_ve_primero,
        círculo_goethe,
        enhebrado,
        equilibrista,
        mi_familia,
        geometría_didáctica,
        memotestx20,
        mis_bloques,
        monstruos_de_colores,
        memotestx40,
        arcoiris_waldorff,
        arcoiris_nube_sol,
        arcoiris_baby
    }

    const lista = []
    let contador = 1
    for (let i in llaves) {
        let a = i;
        let b = llaves[i]
        let nombre = { "id": contador, "nombre": a, "valor": b };
        lista.push(nombre)
        contador += 1
    }
    lista.sort(function (a, b) {
        return b.valor - a.valor;
    });

    sessionStorage.setItem("primero", lista[0].id)
    sessionStorage.setItem("segundo", lista[1].id)
    sessionStorage.setItem("tercero", lista[2].id)
    sessionStorage.setItem("cuarto", lista[3].id)

    


}