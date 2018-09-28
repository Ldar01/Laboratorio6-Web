function ocurrencias( numero, arreglo ){
    var cont = 0;
    for(let i = 0; i<arreglo.lenght ;i++){
        if(numero == arreglo[i]){
            cont++ ;
        }
    }
    return cont;
}