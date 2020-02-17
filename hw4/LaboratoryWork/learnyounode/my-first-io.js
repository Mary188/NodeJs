const fs = require('fs');

const file = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1

console.log(file);





// const file = fs.readFileSync(process.argv[2]);

// const str = file.toString();

// const lines = str.split("\n");

// const numberOfLines = lines.length -1;

// console.log(numberOfLines);


// const fs = require('fs')
    
// const contents = fs.readFileSync(process.argv[2])
// const lines = contents.toString().split('\n').length - 1
// console.log(lines)
