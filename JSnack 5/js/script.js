// Stampa il cubo dei primi N numeri, dove N è un numero

// indicato dall’utente.



// chiedo al utente un numero
let numero_utente = parseInt(prompt('inserisci un numero'));
// verifico se ci sono caratteri non corretti e numeri maggiori di 0
if(!isNaN(numero_utente) && numero_utente > 0) {
	// creo un ciclo per partire dal primo numero fino a quello del utente
	for (let i = 1; i <= numero_utente; i++) {
		console.log('numeri ricavati dal ciclo' + i);
		// cacloclo il cubo di tutti i numeri incluso quello del utente
		let potenza = Math.pow(i, 3);
		console.log(potenza);
		// comunico la potenza di tutti i numeri incluso quello del utente
		document.getElementById('password').innerHTML = potenza + '<br>';
	}
}else{
	alert('devi inseire un numero corretto');
}



