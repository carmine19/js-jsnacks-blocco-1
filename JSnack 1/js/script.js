//JSnack 2: L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

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
    document.getElementById('password').innerHTML = numero1
}else {
    document.getElementById('password').innerHTML = numero2
}