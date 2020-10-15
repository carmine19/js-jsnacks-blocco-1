// Il software deve chiedere per 5 volte all’utente di inserire un numero

//Il programma stampa la somma di tutti i numeri inseriti


let numeri = [];


for (let i = 0; i < 5; i++) {

	let numero = parseInt(prompt('inserisci il primo numero'));
	numeri.push(numero)

	if (isNaN(numero)) {
		alert('devi inserire dei numeri');
	} else {
		console.log('numeri corretti');
	}


	console.log('questi sono i numeri inseriti dal utente ' + numero)

}

let somma = 0;

for (let i = 0; i < numeri.length; i++) {

	somma += numeri[i]
	console.log(somma)

}


document.getElementById('password').innerHTML = 'la somma dei tuoi numeri è ' + somma;