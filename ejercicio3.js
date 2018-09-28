function tipo_dato(arreglo){
    var types = [];
    var cont_number = 0;
    var cont_undef = 0;
    var cont_bool = 0;
    var cont_null = 0;
    var cont_string = 0;
    var cont_symbol = 0;
    for(let i =0 ; i< arreglo.length;i++){
        switch(typeof(arreglo[i])){
            case "number":
                cont_number++;
                break;
            case "null":
                cont_null++;
                break;
            case "boolean":
                cont_bool++;
                break;
            case "string":
                cont_string++;
                break;
            case "symbol":
                cont_symbol++;
                break;
            case "undefined":
                cont_undef++;
                break;
        }
        types.push(typeof(arreglo[i]));
    }
    return types.concat(" Number: "+cont_number+" String:"+cont_string+" Undefined: "+cont_undef+" Boolean: "+cont_bool+" Null: "+cont_null+" Symbol: "+cont_symbol);
}