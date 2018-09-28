function sumar(arreglo){
    var suma = 0;
    var tamanio = arreglo.length;
    for(let i = 0; i<arreglo.length;i++){
        suma = arreglo[i] + arreglo[tamanio-i];
        console.log(suma);
    }
}