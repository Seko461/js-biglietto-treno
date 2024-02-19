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


