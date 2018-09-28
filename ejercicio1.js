function ocurrencias( numero, arreglo ){
    var cont = 0;
    for(let i = 0; i<arreglo.length ;i++){
        if(numero == arreglo[i]){
            cont++ ;
        }
    }
    return cont;
}