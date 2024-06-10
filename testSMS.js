const { SendAlertSMSIR } = require('./smsir_mh_js');

const apiKey = '1212121212121212121';  //Example API Key get from sms.ir
const to = '09100059323';  //Example Phone Number
const message = 'Hello,this test message!'; //Max 24 Character Length
const templateId = '750016';  //Example template ID 

SendAlertSMSIR(to, message, apiKey, templateId);
