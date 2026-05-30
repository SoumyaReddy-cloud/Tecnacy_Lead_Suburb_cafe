const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('Reference/Cafe_Menu.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('pdf_text.txt', data.text);
    console.log("PDF parsed successfully. Total pages:", data.numpages);
}).catch(err => {
    console.error("Error parsing PDF:", err);
});
