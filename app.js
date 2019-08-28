'use strict';

let fs = require('fs');
let xml2js = require('xml2js');
let parser = new xml2js.Parser();
// let Order = require('./orders.js');

let file = process.argv[2];

fs.readFile(file, (err, data) => {
  parser.parseString(data, (err, result) => {
    fs.writeFile('orders.json', JSON.stringify(result, undefined, 2), (err) => {
      if(err) throw err;
      console.log('file saved to orders.json');
    })
  })
});


