function maximumValues(arr1, arr2) {
    var result = [];
  
    for (var i = 0; i < arr1.length; i++) {
      result.push(Math.max(arr1[i], arr2[i]));
    }
  
    return result;
}

function minimumValues(arr1, arr2) {
    var result = [];
    
    // Iterate through the arrays
    for (var i = 0; i < arr1.length; i++) {
      // Find the minimum value at each position
      result.push(Math.min(arr1[i], arr2[i]));
    }
    
    return result;
}

function sumArray(arr) {
    
    var sum = 0;
    
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum;
}
  
function calcularSim(arrP, arr2) {
    
    var min = minimumValues(arrP, arr2);
    var max = maximumValues(arrP, arr2);

    var sumMin = sumArray(min);
    var sumMax = sumArray(max);

    var coincidencia = sumMin/sumMax;

    return coincidencia;

}


var a = document.getElementById("edad1");
var a1 = a.value;
var b = document.getElementById("genero1");
var b1 = b.value;
var c = document.getElementById("ocupacion1");
var c1 = c.value;
var d = document.getElementById("personalidad1");
var d1 = d.value;
var e = document.getElementById("enfoque1");
var e1 = e.value;
var f = document.getElementById("actividad1");
var f1 = f.value;
var g = document.getElementById("educacion1");
var g1 = g.value;
var h = document.getElementById("viajar1");
var h1 = h.value;
var i = document.getElementById("paz1");
var i1 = i.value;
var j = document.getElementById("videojuegos1");
var j1 = j.value;
var k = document.getElementById("religion1");
var k1 = k.value;
var l = document.getElementById("familia1");
var l1 = l.value;
var m = document.getElementById("cine1");
var m1 = m.value;
var n = document.getElementById("leer1");
var n1 = n.value;
var o = document.getElementById("mascota1");
var o1 = o.value;
var arrprincipal = [a1, b1, c1, d1, e3, f1, g1, h1, i1, j1, k1, l1, m1, n1, o1];
var arr1 = [0.25, 0.5, 0.25, 0.1, 0.2, 0.2, 0.75, 0.75, 0.1, 0.75, 0.50, 0.25, 0.75, 0.5, 1];
var arr2 = [0.25, 0.5, 0.25, 0.1, 0.4, 0.4, 0.75, 0.75, 0.1, 0.75, 0.25, 0.75, 0.25, 1, 1];
var arr3 = [0.5, 0.1, 0.25, 1, 0.2, 0.4, 0.25, 0.75, 0.1, 0.75, 0.5, 0.25, 0.75, 0.75, 0.25];
var arr4 = [0.375, 0.5, 0.50, 0.1, 0.2, 0.4, 0.5, 0.5, 0.5, 0.25, 0.25, 0.75, 0.5, 0.5, 0.5];
var arr5 = [0.25, 0.1, 0.25, 0.1, 0.4, 0.4, 0.5, 0.75, 0.1, 1, 0.75, 0.5, 0.5, 0.75, 0.25];
var arr6 = [0.25, 0.1, 0.5, 0.1, 0.2, 0.6, 0.5, 0.75, 0.1, 0.75, 0.75, 1, 1, 0.25, 0.5];
var arr7 = [0.375, 0.1, 0.5, 1, 0.4, 0.6, 0.75, 0.75, 0.1, 0.5, 0.5, 0.75, 0.25, 0.25, 0.5];
var arr8 = [0.375, 0.1, 0.25, 0.1, 0.4, 0.6, 0.25, 0.5, 0.1, 0.25, 0.5, 0.25, 0.5, 0.25, 0.5];
var arr9 = [0.25, 0.1, 0.25, 0.1, 0.4, 0.6, 0.25, 0.75, 0.5, 0.5, 0.75, 0.25, 0.75, 1, 0.5];
var arr10 = [0.25, 0.5, 0.25, 0.1, 0.4, 0.2, 0.25, 0.5, 0.1, 0.5, 0.5, 0.25, 0.25, 0.75, 0.5];
var arr11 = [0.25, 0.5, 0.25, 0.1, 0.2, 0.4, 0.25, 0.75, 0.1, 0.25, 0.25, 0.75, 0.75, 0.25, 0.25];
var arr12 = [0.25, 0.1, 0.5, 0.1, 0.2, 0.4, 0.25, 0.75, 0.1, 0.75, 0.25, 0.5, 0.25, 0.5, 1];
var arr13 = [0.25, 0.1, 0.75, 0.1, 0.4, 0.4, 0.25, 0.75, 0.5, 0.25, 0.25, 0.5, 0.25, 0.5, 0.25];
var arr14 = [1, 0.5, 0.75, 0.1, 0.4, 0.6, 0.25, 0.75, 0.1, 0.5, 0.5, 0.25, 0.75, 0.25, 0.75];
var arr15 = [0.5, 0.1, 0.75, 1, 0.4, 0.6, 0.5, 0.75, 1, 0.5, 0.5, 0.5, 0.25, 0.25, 0.75];
var arr16 = [0.5, 0.5, 0.25, 1, 0.4, 0.4, 0.25, 0.25, 0.1, 0.25, 0.25, 0.75, 0.75, 1, 0.50];
var arr17 = [0.75, 0.5, 0.25, 0.1, 0.4, 0.4, 0.5, 0.25, 0.1, 0.5, 0.25, 0.5, 0.25, 1, 0.25];
var arr18 = [0.25, 0.5, 0.5, 1, 0.2, 0.4, 0.25, 0.75, 0.5, 0.25, 0.25, 0.75, 0.75, 0.5, 0.5];
var arr19 = [0.25, 0.1, 0.5, 0.1, 0.4, 0.4, 0.25, 0.75, 0.5, 0.25, 0.25, 0.75, 0.75, 0.5, 0.75];
var arr20 = [0.25, 0.1, 0.25, 1, 0.4, 0.4, 0.25, 0.75, 0.1, 0.5, 0.25, 0.5, 1, 1, 0.5];


function calcular(){

    
    var umbral = 0.7;
    var personasCompatibles = " "; 
    var flagCompatible = false;
    
    if (calcularSim(arrprincipal, arr1) > umbral){
        personasCompatibles += " Yektli ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr2) > umbral){
        personasCompatibles += " Jorge ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr3) > umbral){
        personasCompatibles += " Blanca ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr4) > umbral){
        personasCompatibles += " Ricardo ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr5) > umbral){
        personasCompatibles += " Alex ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr6) > umbral){
        personasCompatibles += " Raquel ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr7) > umbral){
        personasCompatibles += " Mayela ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr8) > umbral){
        personasCompatibles += " Fernanda ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr9) > umbral){
        personasCompatibles += " Rene ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr10) > umbral){
        personasCompatibles += " Carlos ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr11) > umbral){
        personasCompatibles += " Luis ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr12) > umbral){
        personasCompatibles += " Zayda ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr13) > umbral){
        personasCompatibles += " Marisol ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr14) > umbral){
        personasCompatibles += " Juan ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr15) > umbral){
        personasCompatibles += " Mariana ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr16) > umbral){
        personasCompatibles += " Andres ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr17) > umbral){
        personasCompatibles += " Brayan ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr18) > umbral){
        personasCompatibles += " Marko ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr19) > umbral){
        personasCompatibles += " Dalila ";
        flagCompatible = true;
    }
    if (calcularSim(arrprincipal, arr20) > umbral){
        personasCompatibles += " Guadalupe ";
        flagCompatible = true;
    }
    

    if (flagCompatible == true) {
        alert("Personas compatibles contigo: " + personasCompatibles);
    }else{
        alert("No se han encontrado personas compatibles")
    }

} 