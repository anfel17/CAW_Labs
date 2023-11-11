var fs = require('fs');

const destinationFile = process.argv[2];
const textToWrite = process.argv.slice(3).join(' ');

fs.writeFile(destinationFile, textToWrite, () => {
  console.log('The file has been saved!');
  
  fs.readFile(destinationFile, 'utf8', (_, data) => {
    console.log(`Contents of ${destinationFile}:`);
    console.log(data);
  });
});