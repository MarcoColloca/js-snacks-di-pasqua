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





// Esercizio 3 → Array Medio
/*
    Dato un array di numeri interi, creare una funzione che sia in grado di restituire un nuovo array con solo i numeri pari o solo i numeri dispari (su richiesta dell'utente)
*/




mediumNumbersArray = [1,3,5,2,10,6,4,9];


const filterButtonDOMElement = document.getElementById('filter-button')

const userChoiceEvenDOMElement = document.getElementById('even');

const userChoiceOddDOMElement = document.getElementById('odd');







filterButtonDOMElement.addEventListener('click', function(){


    const filteredNumbersDOMELement = document.getElementById('new-numbers');

    const filteredMediumNumbersArray = filterByUserChoice(mediumNumbersArray)

    console.log(filteredMediumNumbersArray)


    filteredNumbersDOMELement.innerHTML = 
    `
        <p>Numeri Filtrati:</p>

        <p>${filteredMediumNumbersArray}</p>

    `
})









// Esercizio 3 → Array Medio Parte 2
/*
    Dati un numero intero e un array di numeri interi, creare una funzione che sia in grado di restituire un nuovo array contenente solo i numeri divisibili per il numero intero specificato
*/


let userNumber = 5;
const arrayDiNumeri = [1,3,5,2,10,6,4,9];


const arrayFiltrato = filterByModule(arrayDiNumeri, userNumber)

console.log(arrayFiltrato)








// Esercizio 4 → Array Difficile
/*
    Dati un numero intero e un array di numeri interi, creare una funzione che sia in grado di restituire un nuovo array contenente solo i numeri divisibili per il numero intero specificato
*/


const arrayHard = [
	{ name: "Marco", age: 22 },
	{ name: "Anna", age: 24 },
	{ name: "Luca", age: 17 },
	{ name: "Gianni", age: 53 }
];
console.log(arrayHard)

const sortedArrayByAge = arrayHard.toSorted((a, b) => a.age - b.age);
console.log(sortedArrayByAge)



const sortedArrayByName = arrayHard.toSorted(function(a,b){
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if(nameA < nameB){
        return -1;
    }

    if(nameA > nameB){
        return 1;
    }


    return 0

});



console.log(sortedArrayByName)











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



// funzione che filtra un array di numeri e restituisce un array con solo numeri dispari
function filterOddNumbersInArray(array){

    const newArray = array.filter((number) => number % 2 === 1)

    return newArray
};




// funzione che permette di filtrare un array in base ad una scelta dell'utente e restituire un arrai con numeri pari o dispari, a seconda della scelta
function filterByUserChoice(array){
    let userChoice
    let newArray = [];

    if (userChoiceEvenDOMElement.checked === true){
        userChoice = 'pari';
        console.log("l'utente ha scelto Pari");
        const evenMediumNumbersArray = filterEvenNumbersInArray(array)
        newArray = evenMediumNumbersArray

    }else if (userChoiceOddDOMElement.checked === true){
        userChoice = 'dispari';
        console.log("l'utente ha scelto Dispari");
        const oddMediumNumbersArray = filterOddNumbersInArray(array)
        newArray = oddMediumNumbersArray
    }

    return newArray
}



function filterByModule(array, module){

    const newArray = array.filter((number) => number % module === 0)

    return newArray
}




// ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ Mie Funzioni ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ \\