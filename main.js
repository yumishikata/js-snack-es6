/*Snack 1)
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */

let biciclette = 
[
    {
        'nome' : 'Bianchi',
        'peso' : 7
    },
    {
        'nome' : 'Colnago',
        'peso' : 10
    }, 
    {
        'nome' : 'KTM',
        'peso' : 8
    },
    {
        'nome' : 'Wilier',
        'peso' : 9
    },
    {
        'nome' : 'Tommasini',
        'peso' : 11
    }
]
console.log(biciclette);
var biciLeggera = biciclette[0];
biciclette.forEach((element) => {
    if(element.peso<biciLeggera.peso){
        biciLeggera = element;
    }
});

let {nome,peso} = biciLeggera;
console.log(
    `La bici più leggera è ${nome} e pesa ${peso} kg`
    
);

/*Snack2) Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

let squadre = 
[
    {
        'nome' : 'Milan',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'Inter',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    }, 
    {
        'nome' : 'Juventud',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'Fiorentina',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    },
    {
        'nome' : 'Roma',
        'puntiFatti' : 0,
        'falliSubiti' : 0
    }
]

console.log(squadre);

squadre.forEach((element) => {
    element.puntiFatti = random(1,10);
    element.falliSubiti = random(1,10);
});

var newArray = [];
squadre.forEach((element) => {
    let {nome,falliSubiti} = element;
    newArray.push({nome,falliSubiti});
 });

console.log(newArray);

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/* Snack 3
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */


function numeriCompresi (array, a , b) {
    var arrayCompresi = array.filter((element) => {
        return ( array.indexOf(element) >= a &&  array.indexOf(element) <= b);
    });
    return arrayCompresi;
}

console.log(numeriCompresi(squadre, 1,3));