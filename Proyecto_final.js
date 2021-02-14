//DECLARACIÓN DE VARIABLES
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000

//Valores de los recargos del asegurado
var edad_18 = 0.1 // 10% si la edad está comprendida desde los 18 a 24 años de edad
var edad_25 = 0.2 // 20% si la edad está comprendida desde los 25 a 49 años de edad
var edad_50 = 0.3 // 30% si la edad está comprendida desde los 50 años en adelante

//Valores de los recargos del cónyuge
var casado_18 = 0.1 // 10%  si la edad está comprendida desde los 18 a 24 años 
var casado_25 = 0.2 // 20%  si la edad está comprendida desde los 25 a 49 años
var casado_50 = 0.3 // 30%  si la edad está comprendida desde los 50 años en adelante

//Valor del recargo si el asegurado tiene hijos
var hijos_recargo = 0.2 // 20%


//Recargo acumulativos
var recargo = 0  //Recargos del asegurado
var recargo_conyuge = 0  //Recargos del cónyuge
var recargo_hijos = 0    //Recargos de los hijos
var recargo_total = 0    //Total recargo del asegurado
var recargo_total_conyuge = 0  //Total recargo del cónyuge
var recargo_total_hijos = 0    //Total recargo de los hijos


//Cálculo del precio final
var precio_final = 0

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre en este espacio: ")
var edad = prompt("¿Cuantos años tiene? Ingrese solamente números: ")

var casado = prompt("¿Está casado actualmente?")
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?")
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿Tiene hijos o hijas?")
//Comprobamos la cantidad de hijos solamente si los tienen
var cantidad_hijos = 0
if("SI" == hijos.toUpperCase()){
  cantidad_hijos = prompt("¿Cuántos hijos/as tiene?: ")
  cantidad_hijos_numero = parseInt(cantidad_hijos)  //Convierte la cantidad de hijos en número
}

//Aquí debe calcular el recargo total basado en las respuestas ingresadas

//Aquí es donde debe de calcular los recargos y el valor final
//Ejemplo (Debe completar los condicionales): Recargo por edad del asegurado 
if(edad_numero>=18 && edad_numero<25){ 
  recargo = precio_base * edad_18 //Calculamos el recargo en base a la edad
  recargo_total = recargo_total + recargo //Sumamos todos los recargos que hemos obtenido
}else if(edad_numero>=25 && edad_numero<=49){
  recargo = precio_base * edad_25
  recargo_total = recargo_total + recargo
}else if(edad_numero>=50){
  recargo = precio_base * edad_50
  recargo_total = recargo_total + recargo
}else{
  alert("Edad incorrecta")
}


/** 
 * 2. Recargo por la edad del conyuge
 */
if(edad_conyuge_numero>=18 && edad_conyuge_numero <=24){
  recargo_conyuge = precio_base * casado_18
  recargo_total_conyuge = recargo_total_conyuge + recargo_conyuge
}else if(edad_conyuge_numero>=25 && edad_conyuge_numero<=49){
  recargo_conyuge = precio_base * casado_25
  recargo_total_conyuge = recargo_total_conyuge + recargo_conyuge
}else if(edad_conyuge_numero>=50){
  recargo_conyuge = precio_base * casado_50
  recargo_total_conyuge = recargo_total_conyuge + recargo_conyuge
}else{
  alert("Edad incorrecta")
}

/**
 * 3. Recargo por la cantidad de hijos 
 */ 
if(cantidad_hijos>=1){
  recargo_hijos = precio_base * hijos_recargo * cantidad_hijos
  recargo_total_hijos = recargo_total_hijos + recargo_hijos
}else{
  alert("Valor incorrecto")
}

//Cálculo del precio final 
precio_final = precio_base + recargo_total + recargo_total_conyuge + recargo_total_hijos

//Resultados esperados
alert ("Para el asegurado "+nombre)
alert ("El recargo total sera de: "+ recargo_total, + recargo_total_conyuge, + recargo_total_hijos)
alert ("El precio sera de: "+precio_final)

