// Contenido Principal

const Alumonos = [{
    nombre: "",
    apellido: "",
    nota1: 0,
    nota2: 0,
    nota3: 0,
    condicion: ""
}]

const ingAlumno = () => {
    Alumonos.forEach(el => {
        while (el.nombre == "" || el.apellido == "") {
            el.nombre = prompt("Ingrese el Nombre del alumno: ")
            el.apellido = prompt("Ingrese el Apellido del alumno: ")
        }
        el.nota1 = parseInt(prompt("Ingrese la primera nota del alumno"))
        el.nota2 = parseInt(prompt("Ingrese la segunda nota del alumno"))
        el.nota3 = parseInt(prompt("Ingrese la tercera nota del alumno"))


        if (el.nota1 < 4 || el.nota2 < 4 || el.nota3 < 4) {
            el.condicion = "Desaprobado"
        } else {
            el.condicion = "Aprobado"
        }
    })
}

const verAlumno = () => {
    let opcion = 0
    do {

        opcion = parseInt(prompt("Evaluador de Notas \nPara Ingresar a la opcion deseada ingrese el numero correspondiente \n1- Ver las tres notas del alumno \n2- Ver Promedio final del alumno y su condicion \n3- Salir"))

        switch (opcion) {

            case 1:
                verNotas()
                break;
            case 2:
                promedioNotas()
                break;
            case 3:
                break;
            default:
                alert("Ingrese una opcion correcta")
        }
    } while (opcion != 3)
}

const verNotas = () => {
    Alumonos.map(Alumonos => {
        alert("La primera nota del alumno es: " + Alumonos.nota1 + "\nSegunda nota: " +
            Alumonos.nota2 + "\nTercera nota: " + Alumonos.nota3)
    })
}


const promedioNotas = () => {
    Alumonos.forEach(el => {
        let promedio = (el.nota1 + el.nota2 + el.nota3) / 3
        alert("El promedio del alumno " + el.nombre + " " + el.apellido + " es: " + promedio + "\nY su condicion es de: " + el.condicion)
    })
}


ingAlumno()
verAlumno()