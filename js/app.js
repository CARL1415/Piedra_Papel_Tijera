function eleccion (jugada){
    let resultado = ""
    if (jugada == 1){
        resultado = "Elegiste 🧱"
    }
    else if (jugada == 2){
        resultado = "Elejiste 📄"
    }
    else if (jugada == 3){
        resultado = "Elegiste ✂"
    }
    else{
        resultado = "Valor no reconocible ❔"
    }
    return resultado
}

let jugador= 0
const max = 3
const min = 1
let pc = Math.floor(Math.random()*(max-min+1)+min)

jugador = prompt("Elige: 1 para 🧱, 2 para 📄, 3 para ✂");
//alert("Elegiste " + jugador)

alert("Elegiste: "+ eleccion(jugador));
alert("PC Elige: "+ eleccion(pc));

//combate
if (pc == jugador){
    alert("Empate ✋");
}

else if(pc == 3 && jugador == 1){
    alert("Ganaste ✔");
}

else if(jugador == 2 && pc == 1){
    alert("Ganaste ✔");
}

else if(jugador == 3 && pc == 2 ){
    alert("Ganaste ✔");
}

else{
    alert("Perdiste ❌");
}