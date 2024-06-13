# smsir_mh_js

This package is for using SMS service from sms.ir
should get API and templetId from sms.ir

## Test Resalt

PASS  ./SendAlertSMSIR.spec.js
  SendAlertSMSIR
    √ should send a POST request with correct data (5 ms)
    √ should log an error if the request fails

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.78 s
Ran all test suites.  


## Author
Mohammad Hadi  
Email: mmm.6336@gmail.com

Donate address : TS3ZnWGHfDnW7FcG8p6BYrWAis2nzX3gDG  //USDT TRC20

## Installation
for install last vertion 
`npm install smsir_mh_js@latest`

To install the package, run:
```bash

#npm
npm install axios
npm install smsir_mh_js



#yarn
yarn add axios
yarn add smsir_mh_js



# Example use:

const { SendAlertSMSIR } = require('smsir_mh_js');

const apiKey = '121212121212121212121';  //Example API Key 
const to = '09100059323';  //Example Phone Number
const message = 'Hello,this test message!'; //Max 24 Character Length
const templateId = '750016';  //Example template ID 

SendAlertSMSIR(to, message, apiKey, templateId);


