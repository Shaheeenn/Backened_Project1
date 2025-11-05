// Import the File System module
const fs = require('fs');

// File name
const fileName = 'example.txt';

// ---------- CREATE FILE ----------
fs.writeFile(fileName, 'Hello, this is the first line!\n', (err) => {
  if (err) throw err;
  console.log(' File created and data written.');

  // ---------- READ FILE ----------
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('\nFile Contents (After Create):');
    console.log(data);

    // ---------- UPDATE FILE ----------
    fs.appendFile(fileName, 'This is an additional line.\n', (err) => {
      if (err) throw err;
      console.log('\n File updated successfully.');

      // ---------- READ AGAIN TO CONFIRM UPDATE ----------
      fs.readFile(fileName, 'utf8', (err, updatedData) => {
        if (err) throw err;
        console.log('\nFile Contents (After Update):');
        console.log(updatedData);
      });
    });
  });
});
