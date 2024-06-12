const axios = require('axios');

const SendAlertSMSIR = async (to, message, api_key, templateId) => {
  const data = JSON.stringify({
    "mobile": to,
    "templateId": templateId,
    "parameters": [
      { name: 'CONTACTS', value: message }
    ],
  });

  const config = {
    method: 'post',
    url: 'https://api.sms.ir/v1/send/verify',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'text/plain',
      'X-API-KEY': api_key
    },
    data: data
  };

  try {
    const response = await axios(config);
    console.info(JSON.stringify(response.data));
  } catch (error) {
    console.error(error);
  }
};

module.exports = { SendAlertSMSIR };

// Example usage (commented out):
// SendAlertSMSIR("09100059323", "35f389", "your_api_key_here", "750016");
