// creo un array vuoto.
let numeri = [];

// creo una variabile di check in modo che il ciclo finisca se l utente inserisce un carattere
let check = true;

for (let i = 0; i < 6 && check === true; i++) {

	//chiedo al utente 6 volte i numeri e li pasifico ad interi in modo da non rivecere una stringa
	let numero = parseInt(prompt('inserisci il primo numero'));
	//calcolo il resto del numero se divisibile per 2
	let resto_numeri = numero % 2;
	//verifico se l utente ha inserito un numero corretto o qualcosa di diverso
	if (!isNaN(numero) && numero >= 0) {
		// se i numeri sono dispari li inserisco nell array
		if (resto_numeri > 0) {
			// qui sto effettivamente pushando i numeri nel mio array vuoto, mi ricordo che il compilatore esegue
			// prima i cili e poi il resto
			numeri.push(numero);
			document.getElementById('password').innerHTML = 'i numeri dispari sono ' + numeri;
		}
	} else {
		// se l'utente non inserisce un numero glie lo comunico
		alert('devi inserire dei numeri');

	}

}