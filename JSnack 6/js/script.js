// Stampa le potenze di 2 senza superare il numeroero 1000.


let numero = Math.pow(2, 2)

let risultato = 1;

for (i = 0; i < numero; i++) {
	risultato *= numero;
}

document.getElementById('password').innerHTML = 'il risultato è ' + risultato;