// Numero di gatti
const numCats = parseInt(prompt('Quanti gatti ci sono nella stanza?'));

console.log('Numero di gatti presenti:', numCats);

// Gatti in fila
const linesCat = parseInt(prompt('Quante gatti ci sono in una fila?'));

console.log('Numero di gatti in una fila:', linesCat);

// Numero di file risultanti
let numLines = Math.floor(numCats / linesCat);

console.log('Numero di file:', numLines);

// Gatti mancati per fila 
let missCats = numCats % linesCat;

if (missCats != 0) {

    console.log('Gatti mancanti:', missCats);

}




