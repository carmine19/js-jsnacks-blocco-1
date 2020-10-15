// Stampa il cubo dei primi N numeri, dove N è un numero

// indicato dall’utente.


let numero_utente = parseInt(prompt('inserisci un numero'));
let numero_al_cubo= Math.pow(numero_utente, 3)

if(isNaN(numero_utente) == false) {
	document.getElementById('password').innerHTML= 'il tuo numero elevato al cubo è ' + numero_al_cubo;
}else {
	alert('devi inserire un numero corretto')
}