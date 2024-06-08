const { SendAlertSMSIR } = require('smsir_mh_js');

const apiKey = '12121212112121212121212121'; //Example API Key should get this id of sms.ir
const to = '09100059323'; //Example Phone Number
const message = 'Hello,this test message!'; //Max 24 Character Length  
const templateId = '750016'; //Example template ID you should get this id of sms.ir

SendAlertSMSIR(to, message, apiKey, templateId);
