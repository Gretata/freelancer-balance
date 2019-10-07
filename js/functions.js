//////////////////////////////////////////////////////// DALIS-1
// kuriu formules ir salygas lenteles turiniui sugeneruoti:

function renderContent( id, data ) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) { 
        const obj = data[i];

if (!obj.income || 
    typeof(obj.income) !== 'number') {
        obj.income = 0;
} if (!obj.expense ||
     typeof(obj.expense) !=='number') {
        obj.expense = 0;
}
let balansas = 0;
for (let i = 0; i < data.length; i++) { 
    const obj = data[i];

    if (typeof(obj.income) || 
        typeof(obj.expense) === 'number') { 
    balansas = math.subtract('obj.income', 'obj.expense'); 
}

// duomenu eiluciu generavimas per visas 12 eiluciu, t.y. 12 menesiu

    HTML += `<div class="table-row">
        <div class="cell">${obj.month}</div>
        <div class="cell">${months}</div>
        <div class="cell">${obj.income}</div>
        <div class="cell">${obj.expense}</div>
        <div class="cell">${balansas}</div>
        </div>`; 
    }
return document.querySelector('#MyAccount.table-content').innerHTML = HTML;
}

 //////////////////////////////////////////////////////// DALIS-2
// pasigaminam formule metiniu pajamu, islaidu ir metinio balanso apskaiciavimui:

function renderFooter ( id, data) {
    let HTML = '';
}

let incomes = 0;
for (let i = 0; i < data.length; i++) {
const obj = data[i].income;
incomes += obj; 
}

let expenses = 0;
    for (let i = 0; i < data.length; i++) {
    const obj = data[i].expense;
    expenses += obj; 
    }

let total = 0;
    total = incomes - expenses;

HTML += `<div class="cell" Metines pajamos: ${incomes}, eur </div>
        <div class="cell" Metines islaidos: ${expenses}, eur </div>
        <div class="cell" Metinis balansas: ${incomes}, eur </div>`;

return document.querySelector('#MyReview.table-footer').innerHTML = HTML;
}

//////////////////////////////////////////////////////// DALIS-3
// kuriu formule lenteles summariui, kur tures buti ivardinti keturiu menesiu pavadinimai:

//HMMMM... gal cia galima su forEach padaryt? 

// let HTML = '';

// data.forEach (item => {
//     if () {
//        //surasom logika, kas daugiausiai maziausiai ir tralialia 
//     }
//     return; 
// }

// HTML += `<div class="item">
//         <div class="value">Mėnesio pavadinimas</div>
//         <div class="title">mėnuo, kai buvo mažiausiai uždirbta,bet ne lygu nuliui</div>`


let maxUzdirbta = 0; 
let minUzdirbta = 0; 
let maxIsleista = 0;
let minIsleista = 0; 

for (let i=0; i<list.length; i++) {
    if  typeof(list[i] === 'number') && (list[i] > 0){
        continue;
    }

    if ( list[i] > maxUzdirbta )
        maxUzdirbta = list[i];
}
    return maxUzdirbta;
}

for (let i=0; i<list.length; i++) {
    if  typeof(list[i] === 'number') && (list[i] > 0){
            continue;
        }
    
        if ( list[i] > maxIsleista )
            maxIsleista = list[i];
    }
        return maxIsleista;
        
// KITAS VARIATNTAS BANDYT GAUT TA PATI

// buvo mažiausiai uždirbta, bet ne mažiau nulio + buvo daugiausiai uždirbta;
let HTML = '';
const minIncome = Math.min(arr1 > 0);
const maxIncome = Math.max(arr1);
return document.querySelector(minIncome, maxIncome).innerHTML = HTML;
}

// buvo mažiausiai išlaidų, bet ne mažiau nulio + buvo daugiausiai išlaidų;
let HTML = '';
const minExpense = Math.min(arr2 > 0);
const maxExpense = Math.max(arr2);
return document.querySelector(minExpense, maxExpense).innerHTML = HTML;
}

