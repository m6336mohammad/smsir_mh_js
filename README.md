# smsir_mh_js

This package is for using SMS service from sms.ir
should get API and templetId from sms.ir

## Author

Mohammad Hadi  
Email: mmm.6336@gmail.com

Donate address : TS3ZnWGHfDnW7FcG8p6BYrWAis2nzX3gDG  //USDT TRC20

## Installation

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


