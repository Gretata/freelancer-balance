//////////////////////////////////////////////////////// DALIS-1
// kuriu formules ir salygas lenteles turiniui sugeneruoti:

function sortMonths (account) {
    account.sort(function(a, b) 
    {return a.month - b.month;});
}

function displayTable () {
    let HTML = '';
    for (let i = 0; i < account.length; i++) {
        document.querySelector("#MyAccount").innerHTML =
    `${account[0].month} ${account[0].income}   ${account[0].expense}`
}
}

function renderContent( target, data ) {
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
    }
    console.log(data);
    let balansas = 0;
    for (let i = 0; i < data.length; i++) { 
        const obj = data[i];

        if ((typeof(obj.income) === 'number') && 
            (typeof(obj.expense) === 'number')) { 
            balansas = obj.income - obj.expense;
    }

// duomenu eiluciu generavimas per visas 12 eiluciu, t.y. 12 menesiu

    HTML += `<div class="table-row">
        <div class="cell">${obj.month}</div>
        <div class="cell">${months[i]}</div>
        <div class="cell">${obj.income}</div>
        <div class="cell">${obj.expense}</div>
        <div class="cell">${balansas}</div>
        </div>`; 
    }
    return document.querySelector('#MyAccount.table-content').innerHTML = HTML;
}

 //////////////////////////////////////////////////////// DALIS-2
// pasigaminam formule metiniu pajamu, islaidu ir metinio balanso apskaiciavimui:

function renderFooter (account) {
    let HTML = '';

    let incomes = 0;
    for (let i = 0; i < account.length; i++) {
    const obj = account[i].income;
    incomes += obj; 
    }

    let expenses = 0;
        for (let i = 0; i < account.length; i++) {
        const obj = account[i].expense;
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

//HMMMM... gal cia galima su forEach kazkipa padaryt? 

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

for (let i=0; i<account.length; i++) {
    if (typeof(account[i] === 'number') && (account[i] > 0)) {
        continue;
    }
    if ( account[i] > maxUzdirbta ) {
        maxUzdirbta = account[i];
}
    // return maxUzdirbta;
}
// 
// for (let i=+Infinity; i<list.length; i--) {
//     if (typeof(list[i] === 'number') && (list[i] > 0)) {
//         continue;
//     }
    
//     if ( list[i] > minUzdirbta ) {
//         minUzdirbta = list[i];
// }
//     return minUzdirbta;
// }

for (let i=0; i<account.length; i++) {
    if  (typeof(account[i] === 'number') && (account[i] > 0)) {
            continue;
        }
    
        if ( account[i] > maxIsleista ) {
            maxIsleista = account[i]
    }
        // return maxIsleista;
    
}

// // KITAS VARIATNTAS BANDYT GAUT TA PATI

// // buvo mažiausiai uždirbta, bet ne mažiau nulio + buvo daugiausiai uždirbta;
// HTML = '';
// const minIncome = Math.min(arr1_income > 0);
// const maxIncome = Math.max(arr1_income);
// return document.querySelector(minIncome, maxIncome).innerHTML = HTML;
// }

// // buvo mažiausiai išlaidų, bet ne mažiau nulio + buvo daugiausiai išlaidų;
// let HTML = '';
// const minExpense = Math.min(arr2_expense > 0);
// const maxExpense = Math.max(arr2_expense);
// return document.querySelector(minExpense, maxExpense).innerHTML = HTML;
// }