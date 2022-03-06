const fs = require('fs'); // Import built-in modules like this

fs.writeFileSync('demo.txt', 'This is the data we will put inside demo.txt'); // This will write file sunchrounosly

// This will add given data in file without changing previous one
fs.appendFileSync('demo.txt', 'This is the new data');

// This will read buffer data of the file
const bufferData = fs.readFileSync('demo.txt');

// This will give original data
let originalData = bufferData.toString();

// This will rename file
fs.renameSync('demo.txt','rename-file.txt');
