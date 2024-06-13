const axios = require('axios');
const { SendAlertSMSIR } = require('./smsir_mh_js'); // path 

jest.mock('axios');

describe('SendAlertSMSIR', () => {
  beforeEach(() => {
    jest.spyOn(console, 'info').mockImplementation(() => {});
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should send a POST request with correct data', async () => {
    const to = '09100059323';
    const message = '35f389';
    const api_key = 'your_api_key_here';
    const templateId = '750016';

    const response = { data: { status: 'success' } };
    axios.mockResolvedValue(response);

    await SendAlertSMSIR(to, message, api_key, templateId);

    expect(axios).toHaveBeenCalledWith({
      method: 'post',
      url: 'https://api.sms.ir/v1/send/verify',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'text/plain',
        'X-API-KEY': api_key
      },
      data: JSON.stringify({
        mobile: to,
        templateId: templateId,
        parameters: [
          { name: 'CONTACTS', value: message }
        ],
      })
    });

    expect(console.info).toHaveBeenCalledWith(JSON.stringify(response.data));
  });

  it('should log an error if the request fails', async () => {
    const to = '09100059323';
    const message = '35f389';
    const api_key = 'your_api_key_here';
    const templateId = '750016';

    const error = new Error('Network Error');
    axios.mockRejectedValue(error);

    await SendAlertSMSIR(to, message, api_key, templateId);

    expect(console.error).toHaveBeenCalledWith(error);
  });
});
