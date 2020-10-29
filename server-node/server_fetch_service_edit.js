const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { ok } = require('assert');

const printDataOnScreen =  async (nameOfPart) => {
    await fs.readFile(path.join(__dirname, './web_data.json'), 'utf8', (
        err, data) =>{
            if(err) throw err;
             const partOfJsonForSwap = JSON.parse(data)
        console.log(partOfJsonForSwap[nameOfPart])
        });
}
const overwriteSpecificJsonPart = (nameOfPart, sequenceOfSigns) => {
    fs.readFile(path.join(__dirname, './web_data.json'), 'utf8', (
        err, data) =>{
            if(err) throw err;
            const partOfJsonForSwap = JSON.parse(data)
            partOfJsonForSwap[nameOfPart] = sequenceOfSigns;
    fs.writeFile(path.join(__dirname,  './web_data.json'),
    JSON.stringify(partOfJsonForSwap, null, 2), // Json formated in correct way
    err => {
        if (err) throw err;
        console.log('json saved, alleluja');
    })
            console.log(partOfJsonForSwap)
        });

}

 router.post('/', (request, respond) =>{
  wholeObject =  request.body;
  console.log(wholeObject.nameOfPartAndData.nameOfPart);
  overwriteSpecificJsonPart(wholeObject.nameOfPartAndData.nameOfPart, wholeObject.nameOfPartAndData.data);
     
    respond.json({
        status: ok
    })
});



module.exports = router ; 