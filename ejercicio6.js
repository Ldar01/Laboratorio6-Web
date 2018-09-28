function clave(cadena){
    var aux = [];
    var cadena2 = "";
    for(let i = 0 ; i<cadena.length;i++){
        switch(cadena[i]){
            case "m":
                aux.push(0);
                break;
            case "u":
                aux.push(1);
                break;
            case "r":
                aux.push(2);;
                break;
            case "c":
                aux.push(3);
                break;
            case "i":
                aux.push(4);
                break;
            case "e":
                aux.push(5);
                break;
            case "l":
                aux.push(6);
                break;
            case "a":
                aux.push(7);
                break;
            case "g":
                aux.push(8);
                break;
            case "o":
                aux.push(9);
                break;
            default:
                aux.push(cadena[i]);
                break;
        }
        
    }
    cadena2 = aux.join("");
    //cadena2.split(",");


    return cadena2;
}