// Contenido Principal

//Varriables
let opcion = 0


let nota1 = 0
let nota2 = 0
let nota3 = 0

//Menu
do {

    opcion = parseInt(prompt("Evaluador de Notas \nPara Ingresar a la opcion deseada ingrese el numero correspondiente \n1- Ingresar notas de los tres examenes de un alumno \n2- Ver las tres notas del alumno \n3- Ver Promedio final del alumno y su condicion \n4- Salir"))

    switch (opcion) {
        case 1:
            ingDeNotas()
            break;
        case 2:
            verNotas()
            break;
        case 3:
            promedioNotas()
            break;
        case 4:
            break;
        default:
            alert("Ingrese una opcion correcta")
    }
} while (opcion != 4)


//Funcion Ingreso de Notas
function ingDeNotas() {
    let i = 0
    for (i; i < 4; i++) {
        if (i == 1) {
            nota1 = parseInt(prompt("Ingrese la primera nota: "))
        }
        if (i == 2) {
            nota2 = parseInt(prompt("Ingrese la segunda nota: "))
        }
        if (i == 3) {
            nota3 = parseInt(prompt("Ingrese la tercera nota: "))
        }
    }
}

// Funcion Ver Notas
function verNotas() {
    alert("Notas de los tres examenes \nPrimer Examen: " + nota1 + "\nSegundo Examen: " + nota2 + "\nTercer Examen: " + nota3)

}


// Funcion Ver Promedio 
function promedioNotas() {
    let promedio = (nota1 + nota2 + nota3) / 3
    if (promedio >= 6) {
        alert("El promedio del alumno es de: " + promedio + "\n Y su condicion es de: Regular")
    } else {
        alert("El promedio del alumno es de: " + promedio + "\n Y su condicion es de: Libre")
    }
}