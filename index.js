function positions(firstPlace,secondPlace,lastPlace){
    
    if(secondPlace === "Daniel"){
        let aux = firstPlace
        firstPlace = secondPlace
        secondPlace = aux

    }
    if(lastPlace === "Daniel" ){

        let aux = lastPlace
        lastPlace = secondPlace
        secondPlace = aux


    }

    let array = [
        "1ª - Colocado " + firstPlace,
        "2ª - Colocado: " + secondPlace,
        "3ª - Colocado: " + lastPlace
    
    ];
    
    return array
};
    

let nomeDosCompetidores = [
    "Rafael", 
    "Manoel", 
    "Daniel",
];


 console.log(positions(nomeDosCompetidores[0],nomeDosCompetidores[1],
    nomeDosCompetidores[2]))