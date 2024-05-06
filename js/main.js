
let ingrediente1 = prompt ("Elige que queres cenar \n 1 Hamburguesa \n2 Pizza \n3 Pasta");

function cena(){
    switch (ingrediente1) {
        case "1":
           console.log  ("Usted a eligido Hamburguesa para cenar")
            break
        case "2":
            console.log ("Usted a eligido Pizza para cenar")
            break
            case "3":
                console.log ("Usted a eligido Pasta para cenar")
            break
        default:
            console.log ("Lo siento, solo hay para cenar hamburguesa, pizza o pasta")
    }
}

cena()

if (ingrediente1=="1"){
    console.log ("el precio de la Hamburguesa son 10mil pesos");
} else if (ingrediente1 =="2"){
    console.log ("el precio de la Pizza son 7mil pesos");
}else if (ingrediente1=="3"){
    console.log("el precio de la pasta son 4mil pesos");
} else{
    console.log ("la opción elegida no es valida")
}
