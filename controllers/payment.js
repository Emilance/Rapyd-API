const makeRequest = require('../util/utilities').makeRequest;

const payByCard = async (req, res) => {
    try {
        const body = {
           "amount": 200,
           "currency": "EUR",
        //    "customer": "cus_*******************",
           "payment_method": {
               "type": "it_visa_card",
               "fields": {
                   "number": "4111111111111111",
                   "expiration_month": "12",
                   "expiration_year": "23",
                   "name": "John Doe",
                   "cvv": "345"
               },
               "metadata": {
               "merchant_defined": true
           }
           },
           "capture": true
       };
        const result = await makeRequest('POST', '/v1/payments', body);
           res.json(result);
         } catch (error) {
           res.json(error)
         }
}

const getPaymentList = async (req, res)=> {
      try {
        const result = await makeRequest(
          'GET',
          '/v1/payments?limit=2'
        );
    
        res.json(result);
    } catch (error) {
      res.json(error)
    }
    
} 

module.exports = { payByCard, getPaymentList }