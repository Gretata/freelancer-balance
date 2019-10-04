//////////////////////////////////////////////////////// DALIS-1
// kuriu formule lenteles turiniui:

function renderContent( "table-content", data ) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) { 
        const stuff = data[i];
        
// duomenu eiluciu generavimas per visas 12 eiluciu, t.y. 12 menesiu

    HTML += `<div class="table-row">
        <div class="cell">${stuff.month}</div>
        // <div class="cell">${months}</div>
        <div class="cell">${stuff.income}</div>
        <div class="cell">${stuff.expense}</div>
        <div class="cell">${balansas}</div>
        </div>`; 
    }
return document.querySelector(target).innerHTML = HTML;
}

// jeigu nera ivesta pajamu ir islaidu, tuomet surasyti nulius: 

if (typeof(stuff.income) !=='number') {
    stuff.income = 0;
} else if (typeof(stuff.expense) !=='number') {
    stuff.expense = 0;
}

// pasigaminam formule, kaip apskaiciuoti kiekvieno menesio balansiuka

let balansas = '';
    if (typeof(stuff.income) || 
    typeof(stuff.expense) ==='number') {
    balansas = (stuff.income) – (stuff.expense);
    }

 //////////////////////////////////////////////////////// DALIS-2
// pasigaminam formule metiniu pajamu, islaidu ir metinio balanso apskaiciavimui:

function renderFooter ("table-footer", data) {
    let HTML = '';
}

let income = '';
for (let i = 0; i < data.length; i++) {
const stuff = data[i].income;
income += stuff; 
}

let expense = '';
    for (let i = 0; i < data.length; i++) {
    const stuff = data[i].expense;
    expense += stuff; 
    }

let balansas = '';
    for (let i = 0; i < data.length; i++) {
    balansas = income - expense;
   
return document.querySelector(target).innerHTML = HTML;
 }

//////////////////////////////////////////////////////// DALIS-3
// kuriu formule lenteles summariui, kur tures buti ivardinti keturiu menesiu pavadinimai:

function renderSummary ("summary-list", data) {
    let HTML = '';
}

let summary = ''; 
    for (let i = 0; i < data.length; i++) { 
    const stuff = data[i];
    
// duomenu eiluciu generavimas per visas 4 eilutes, t.y. turi buti nurodomi keturi menesiai:

HTML += `<div class="item">
    <div class="value">${stuff.month}</div>
    <div class="title">${title}</div>
    </div>`; 
    return document.querySelector(target).innerHTML = HTML;
}

// buvo mažiausiai uždirbta, bet ne mažiau nulio;

// buvo daugiausiai uždirbta;

// buvo mažiausiai išlaidų, bet ne mažiau nulio;

// buvo daugiausiai išlaidų;
