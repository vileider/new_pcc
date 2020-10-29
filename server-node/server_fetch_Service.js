
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { request } = require('http');
const { response } = require('express');
let respondOnLogin;

router.post('/', (request, response) =>{
    dataPartWithPasswordAndLogin = request.body;
    if (dataPartWithPasswordAndLogin.twoFrazeObject.login === 'ksandrew' && dataPartWithPasswordAndLogin.twoFrazeObject.password === 'hope321'){
        console.log('zalogowany');
        respondOnLogin = true;
    }else{
        console.log('nie zalogowany');
        respondOnLogin = false;
    }

    fs.writeFile(path.join(__dirname, '/', 'test.json'),
    JSON.stringify(dataPartWithPasswordAndLogin.twoFrazeObject, null, 2), // Json formated in correct way
    err => {
        if (err) throw err;
        console.log('json saved');
    })
    response.json ({
        status: respondOnLogin
    })
    });



router.get('/', (request, response) =>{
    fs.readFile( 'web_data.json' , 'utf8',
    (err, data ) => {
        if (err) throw err;
        console.log('data read', data);
        response.json(data);
    })
    
})    

    module.exports = router ; 