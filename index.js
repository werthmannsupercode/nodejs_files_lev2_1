const fs = require('fs')
const data = require('./data.json');

// console.log(data);

const fertig = data.map((elt) => {
    return `${elt.id} - ${elt.title}
    ${elt.description}
    `
}).join('\n\n');

console.log(fertig);

fs.writeFile('./newText.txt', fertig, (err, data) => {
    if (err) {
        console.log("Das ist ein Fehler");
        return
    }
    console.log(data)
    console.log('Die Datei wurde erfolgreich erstellt')
})

// const dataString = JSON.stringify(data);
// console.log(dataString);

// data.map((elt) => {
//     const id = elt.id;
//     const title = elt.title;
//     const description = elt.description;

//     const einElement = `${id} - ${title}</n>${description}`;
//     // console.log(`${id} - ${title}</n>${description}`)

//     const fs = require('fs');

//     fs.writeFile("neuerText.txt", `${einElement}', err => {
//         if (err) {
//             throw error
//         }
//     })});
