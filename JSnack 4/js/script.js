// Crea un array vuoto. 

// Chiedi per 6 volte all’utente di inserire un numero

// se è dispari inseriscilo nell’array.


let numeri = [];


for (let i = 0; i < 6; i++) {

	let numero = parseInt(prompt('inserisci il primo numero'));
	numeri.push(numero)

	if (isNaN(numero)) {
		alert('devi inserire dei numeri');
	} else {
		console.log('numeri corretti');
	}

}

let risultato = [];

for (let i = 0; i < numeri.length; i++) {

	let risultato = numeri[i] % 2;

	if (risultato > 0) {
		document.getElementById('password').innerHTML = 'i numeri dispari sono ' + risultato;
		console.log('i numeri sono dispari')
	}
	else {
		console.log('i numeri sono pari')
	}

	console.log(risultato)
	
}


