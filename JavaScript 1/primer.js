/* 
-->primer paso: el usuario pone el nombre y DNI, si no ingresa nada va a seguir un bucle hasta que carge los datos.
-->segundo paso: confirmacion de los datos.
-->tercer paso: Si el alumno esta registrado va a dar una nota y por consola va a saltar si esta aprobo o desprobado.
*/

// alumnos registrados: erika, ivan, maria, juan.

let alumno = prompt("Escriba su nombre completo");
let dni = prompt("Escriba su numero de DNI");

while ((alumno && dni) == "") {
alumno = prompt("Escribe tu nombre completo");
dni = prompt("escriba su numero de DNI");
}

alert(
`Si los siguientes datos son correctos precione el boton aceptar. Alumno/a ${alumno}, ${dni}`
);

let notaPorAlumno = (alumno) => {
let nota = 0;

switch (alumno) {
    case "erika" || "Erika":
    nota += 90;
    break;
    case "ivan" || "Ivan":
    nota += 55;
    break;
    case "maria" || "Maria":
    nota += 78;
    break;
    case "juan" || "Juan":
    nota += 43;
    break;
    default:
  alert("No es alumno de esta materia"); //Si el alumno no esta registrado no aparece la nota final despues
}
return nota;
};
let notaFinal = notaPorAlumno(alumno);
//el IF es para los alumnos registrados, si nos sos alumno no va a saltar nada
if (notaFinal >= 1) {

    alert(`Alumno/a ${alumno}, su nota final es de ${notaFinal}`);
    if (notaFinal >= 70) {
        console.log("aprobado");
        alert("Felicitaciones! Ahora a disfrutar las vacaciones");
    } else {
        console.log("desaprobado");
        alert("Un tropieso no define el resto de la carrera, a seguir estudiando!");
    }
}
