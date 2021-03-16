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
var pesoMin = 100000;
var k;
for (i=0 ; i<biciclette.length; i++){
    var {peso} = biciclette[i];
    if(peso <= pesoMin){
        pesoMin = peso;
        k= i;
    }
}

var {nome} = biciclette[k];
console.log(
    `La bici più leggera è ${nome} e pesa ${pesoMin} kg`
    
)

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

for(i=0; i<squadre.length; i++){
    var object = squadre[i];
    object.puntiFatti = random(1,10);
    object.falliSubiti = random(1,10);
}

var newArray = [];
for(i=0; i<squadre.length; i++){
    squadra = new Object();
    var {nome,falliSubiti} = squadre[i];
    squadra.nome = nome;
    squadra.falliSubiti = falliSubiti;
    newArray.push(squadra);
}

console.log(newArray);


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }