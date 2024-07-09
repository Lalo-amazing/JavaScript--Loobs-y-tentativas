/*
1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
3. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/
prompt("Hola amigos, como tan?");
let contador = 1;
alert("Ciclo While del 1 al 10");
while (contador <= 10) {
  alert(contador);
  contador++;
}
contador = 10;
alert("Ciclo while del 10 al 0");
while (contador >= 0) {
  alert(contador);
  contador--;
}

let numero = prompt("Ingresa un numero bro:");
numero = parseInt(numero);
contador = 0;
while (contador <= numero) {
  alert(contador);
  contador++;
}
