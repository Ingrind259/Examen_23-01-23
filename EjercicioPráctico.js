/*Desarrolla un programa usando JavaScript y siendo ejecutado desde HTML en el navegador, que permita
 a partir de tres números enteros indicar:
(2 puntos cada apartado)

a. Si son todos diferentes.
b. Si son todos iguales.
c. El mayor.
d. El menor.
e. La media entre ellos (suma de todos, dividida entre la cantidad de números).*/

var n1 = parseInt(prompt("Inserta un número"));
var n2 = parseInt(prompt("Inserta un número"));
var n3 = parseInt(prompt("Inserta un número"));
var menor;
if ( n1<= n2 && n2 <= n3){   
    menor=n1;
} else if ( n2<= n1 && n1 <= n3) {
   menor=n2;
} else {
    menor=n3;
} 
alert("el numero menor es:" + menor);

var mayor;
if ( n1>= n2 && n2 >= n3){   
    mayor=n1;
} else if ( n2>= n1 && n1 >= n3) {
   mayor=n2;
} else {
    mayor=n3;
} 
alert("el numero mayor es:" + mayor);

var media = (n1 + n2 + n3)/3;
alert("la media es: " + media);