function reconocerNumero(){
    let cadena = document.getElementById("cadena").value.toUpperCase();
    var primero = document.getElementById("primero");
    var error = document.getElementById("error");
    var complemento = document.getElementById("complemento");
    complemento.removeAttribute("class");
    primero.textContent = "";
    error.textContent = "";
    complemento.textContent = "";
    let estado = "0";
    let posicionError = -1;
    let caracterError = "";
    var i = 0;
    let caracter = cadena[i];
    while (typeof caracter !== 'undefined') {
        switch (estado) {
            case "0":
                switch (caracter) {
                    case "I":
                        estado = "PI";
                        break;
                    case "V":
                        estado = "RV";
                        break;
                    case "X":
                        estado = "PX";
                        break;
                    case "L":
                        estado = "RL";
                        break;
                    default:
                        estado = "error";
                        posicionError = i + 1;
                        caracterError = caracter;
                        break;
                }
                break;
            case "PI":
                switch (caracter) {
                    case "I":
                        estado = "SI";
                        break;
                    case "V":
                        estado = "F";
                        break;
                    case "X":
                        estado = "F";
                        break;
                    default:
                        estado = "error";
                        posicionError = i + 1;
                        caracterError = caracter;
                        break;
                }
                break;
            case "SI":
                switch (caracter) {
                    case "I":
                        estado = "F";
                        break;
                    default:
                        estado = "error";
                        posicionError = i + 1;
                        caracterError = caracter;
                        break;
                }
                break;
            case "F":
                if(typeof caracter === 'undefined'){
                    estado = "acepta";
                    posicionError = -1;
                    caracterError = "";
                }
                else{
                    estado = "error";
                    posicionError = i + 1;
                    caracterError = caracter;
                }
                break;
            case "RV":
                switch (caracter) {
                    case "I":
                        estado = "VI";
                        break;
                    default:
                        estado = "error";
                        posicionError = i + 1;
                        caracterError = caracter;
                        break;
                }
                break;
            case "VI":
                switch (caracter) {
                    case "I":
                        estado = "SI";
                        break;
                    default:
                        estado = "error";
                        posicionError = i + 1;
                        caracterError = caracter;
                        break;
                }
                break;
            case "PX":
                switch (caracter) {
                    case "I":
                        estado = "PI";
                        break;
                    case "V":
                        estado = "RV";
                        break;
                    case "X":
                        estado = "SX";
                        break;
                    case "L":
                        estado = "RL";
                        break;
                    default:
                        estado = "error";
                        posicionError = i + 1;
                        caracterError = caracter;
                        break;
                }
                break;
            case "SX":
                switch (caracter) {
                    case "I":
                        estado = "PI";
                        break;
                    case "V":
                        estado = "RV";
                        break;
                    case "X":
                        estado = "TX";
                        break;
                    default:
                        estado = "error";
                        posicionError = i + 1;
                        caracterError = caracter;
                        break;
                }
                break;
            case "TX":
                switch (caracter) {
                    case "I":
                        estado = "PI";
                        break;
                    case "V":
                        estado = "RV";
                        break;
                    default:
                        estado = "error";
                        posicionError = i + 1;
                        caracterError = caracter;
                        break;
                }
                break;
            case "RL":
                switch (caracter) {
                    case "I":
                        estado = "PI";
                        break;
                    case "V":
                        estado = "RV";
                        break;
                    case "X":
                        estado = "PX";
                        break;
                    default:
                        estado = "error";
                        posicionError = i + 1;
                        caracterError = caracter;
                        break;
                }
                break;
            case "error":
                i = cadena.length;
                break;
            case "acepta":
                primero.textContent = "Se acepta el número romano ";
                complemento.setAttribute("class", "aceptar");
                complemento.textContent = cadena;
                break;
            default:
                alert("Terminado");
                break;
        }
        i++;
        caracter = cadena[i];
    }
    if(estado != "error"){
        primero.textContent = "Se acepta el número romano ";
        complemento.setAttribute("class", "aceptar");
        complemento.textContent = cadena;
    }
    else{
        primero.textContent = "Se presentó un error en el caracter " + posicionError + " " + cadena.substring(0, posicionError - 1);
        error.textContent = caracterError;
        complemento.textContent = cadena.substring(posicionError, cadena.length);
    }
}