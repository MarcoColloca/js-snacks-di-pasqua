console.log('JS Test');

// Esercizio 1 → Cifrario 
/*
    Data una stringa, restituire la versione in alfabeto farfallino (le vocali devono essere trasformate in questo modo: a -> afa, e -> efe, i -> ifi, o -> ofo, u- > ufu)
*/

const stringCifrario = 'a e i o u'
console.log(stringCifrario)



console.log(butterlfyLetters(stringCifrario))






// Esercizio 2 → Stringa "infinita"
/*
    Data una stringa con un pattern ripetuto (es. ABCDE), ipoteticamente infinita, restituire le lettere racchiuse fra due indici (es. 13 e 16) inclusi.
*/

const stringaIniziale = 'ABCDE';

const stringaInfinita = stringaIniziale.repeat(9999);


console.log(lettersOfInfiniteString(stringaInfinita, 13, 16));






// Esercizio 3 → Array Facile
/*
    Dato un array di numeri interi, restituire un array con solo i numeri pari
*/

const easyNubersArray = [1,3,5,2,10,6,4,9];

//const evenEasyNubersArray = easyNubersArray.filter((number) => number % 2 === 0)

const evenEasyNubersArray = filterEvenNumbersInArray(easyNubersArray)

console.log(evenEasyNubersArray)





// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ Mie Funzioni ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ \\

// funzione per trasformare una parola nella sua versione con alfabeto farfallino
function butterlfyLetters(string){

    const stringA = string.replace('a', 'afa');
    const stringE = stringA.replace('e', 'efe');
    const stringI = stringE.replace('i', 'ifi');
    const stringO = stringI.replace('o', 'ofo');
    const stringU = stringO.replace('u', 'ufu');

    const newString = stringU

    return newString
};



// funzione per recuperare le lettere comprese negli indici indcati (le lettere negli indici sono compresi nelle lettere)
function lettersOfInfiniteString(string, indexStart, indexEnd){

    const myString = string.substring(indexStart-1, indexEnd+1)

    return myString
};



// funzione che filtra un array di numeri e restituisce un array con solo numeri pari
function filterEvenNumbersInArray(array){

    const newArray = array.filter((number) => number % 2 === 0)

    return newArray
};
// ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ Mie Funzioni ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ \\