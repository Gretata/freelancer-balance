function renderContent( target, data ) {
    let HTML = '';

// return document.getElementById(target).innerHTML = HTML;

let content =  '';
for ( let i=0; i<data.length; i++ ) {
    income += `<div class="table-row">
                <div class="cell"> ${data[i].title}</div>
                 <div class="cell">${data[i].title}</div>
                 <div class="cell">${data[i].title}</div>
                 <div class="cell">${data[i].title}</div>
                <div class="cell">${data[i].title}</div>
                </div>`;
                