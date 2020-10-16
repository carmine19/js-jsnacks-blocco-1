//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

/*
let numero1 = parseInt(prompt('inserisci il primo numero'));
if(isNaN(numero1)) {
    alert('devi inserire un numero')
} else {
    console.log(numero1)
}

let numero2 = parseInt(prompt('inserisci il secondo numero'));
if(isNaN(numero2)) {
    alert('devi inserire un numero')
} else {
    console.log(numero2)
}

if(numero1 > numero2) {
    document.getElementById('password').innerHTML = 'il primo numero è il maggiore ' +numero1
}else if(numero1 === numero2) {
    document.getElementById('password').innerHTML = 'i numeri sono uguali'
}else {
    document.getElementById('password').innerHTML = 'il secondo numero è il maggiore ' +numero2
}*/

let numero1 = parseInt(prompt('inserisci il primo numero'));
let numero2 = parseInt(prompt('inserisci il secondo numero'));

let check = false;

if(!isNaN(numero1) && (!isNaN(numero2) && (numero1 && numero2) > 0 && check === false)) {


    if (numero1 > numero2) {
        document.getElementById('password').innerHTML = 'il primo numero è il maggiore ' + numero1;
    } else if (numero1 === numero2) {
        document.getElementById('password').innerHTML = 'i numeri sono uguali';
    } else {
        document.getElementById('password').innerHTML = 'il secondo numero è il maggiore ' + numero2;
    }

}else {
    alert('devi inseire un numero');
};

