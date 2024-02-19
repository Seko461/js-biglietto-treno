/*
    Step 1: Chiedere numero di chilometri da percorrere
    Step 2: Chiedere l'età del passeggero
    Step 3:Calcola il prezzo del biglietto
        definito in base ai km (0,21€ al Km)
        sconto 20% se  età < 18
        sconto 40% se età > 65

        Output in forma umana con massimo due cifre decimali

------------------------------------------------------

variabile km = prompt('Inserisci la distanza in Kilometri')
variabile età = prompt('inserisci età)
var base = km * 0.21
var min_rounded = Math.round(base - ((base)* 20)/100))
var max_rounded = Math.round(base - ((base)* 40)/100))
output = 
if (età < 18){
   console.log(min_rounded)
}
else if (età > 65) {
    console.log(max_rounded)
}
if ((età >= 18) && (età < 65)){
    console.log(base)
}
    
*/



function calcola() {
    const km = document.getElementById('k_m').value;
    const età = document.getElementById("age").value;
    let base = km * 0.21




    if (età < 18) {
        let min_rounded = (base - ((base) * 20) / 100).toFixed(2);
        console.log(min_rounded)
        document.writeln('Il tuo biglietto ha un prezzo di ' + (min_rounded) + ' €')
    }
    else if (età > 65) {
        let max_rounded = (base - ((base) * 40) / 100).toFixed(2);
        console.log(max_rounded)
        document.writeln('Il tuo biglietto ha un prezzo di ' + (max_rounded) + ' €')
    }
    else  /* if ((età >= 18) && (età < 65))*/ {
        console.log(base)
        document.writeln('Il tuo biglietto ha un prezzo di ' + (base) + ' €')
    }

}

function stampa() {

}
