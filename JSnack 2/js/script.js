//JSnack 2: L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

let parola1 = prompt('inserisci la prima parola');

let parola2 = prompt('inserisci la seconda parola');



if(parola1.length > parola2.length) {
    document.getElementById('password').innerHTML = parola1
}else {
    document.getElementById('password').innerHTML = parola2
}