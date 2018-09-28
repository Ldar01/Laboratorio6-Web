function arregloTipo(arreglo,tipo){
    var aux = [];
    for(let i =0 ; i<arreglo.length ;i++){
        if(typeof(arreglo[i]) == tipo ){
            aux.push(arreglo[i]);
        }
    }
    return "== "+tipo+" ==\n"+ aux;
}