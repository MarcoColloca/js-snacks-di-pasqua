console.log('JS Test');

// Esercizio 1
/*
    Data una stringa, restituire la versione in alfabeto farfallino (le vocali devono essere trasformate in questo modo: a -> afa, e -> efe, i -> ifi, o -> ofo, u- > ufu)
*/

const string = 'a e i o u'
console.log(string)



console.log(butterlfyLetters(string))





// ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ Mie Funzioni ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ \\

function butterlfyLetters(string){

    const stringA = string.replace('a', 'afa');
    const stringE = stringA.replace('e', 'efe');
    const stringI = stringE.replace('i', 'ifi');
    const stringO = stringI.replace('o', 'ofo');
    const stringU = stringO.replace('u', 'ufu');

    const newString = stringU

    return newString
}

// ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ Mie Funzioni ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ \\