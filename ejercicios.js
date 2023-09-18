alert("Bienvenidos a la pizzeria Bambino Due. Su cuenta es...");
var entrada = parseInt(prompt("ingrese el costo de la entrada"));
var segundo = parseInt(prompt("ingrese el costo del segundo"));
var postre = parseInt(prompt("ingrese el costo del postre"));

var total = entrada + segundo + postre;
var IGV = total + (total/18);

alert("Presione la tecla F12 para mostrar los resultados")

console.log("El costo de la entrada es: " + entrada);
console.log("El costo del segundo es: " + segundo);
console.log("El costo del postre es: " + postre);
console.log("El costo total es :" + total);
console.log("El costo total con IGV es: " + IGV);