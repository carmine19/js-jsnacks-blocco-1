// Calcola la somma e la media dei numeri da 1 a 10.


let numeri = ['1','2','3','4','5','6','7','8','9','10']

let somma = 0;

for( let i = 0; i < numeri.length; i++ ){
    somma += parseInt( numeri[i], 10 );
}

let media = somma/numeri.length;
document.getElementById('password').innerHTML= 'la somma degli elementi è ' + somma + ' la media è ' + media

//creo una variabile somma ed una media dovo immagazino i dati




