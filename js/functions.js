function renderContent( target, data ) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const stuff = data[i];

    HTML += `<div class="table-row">
        <div class="cell">${stuff.month}</div>
        // <div class="cell">${months}</div>
        <div class="cell">${stuff.income}</div>
        <div class="cell">${stuff.expense}</div>
        <div class="cell">${balance}</div>
        </div>`; 
    }
return document.querySelector(target).innerHTML = HTML;
}








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
                


                // function renderBlocks( target, data ) {
                //     let HTML = '';
                //     let quality = 0;
                
                //     for ( let i=0; i<data.length; i++ ) {
                //         const obj = data[i];