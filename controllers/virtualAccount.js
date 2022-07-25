const makeRequest = require('../util/utilities').makeRequest;



const issueNumber = async (req, res) =>{

  try {
    const body = {
      currency: 'EUR',
      country: 'SK',
      description: 'Issue virtual account number to wallet',
      ewallet: 'ewallet_f9a13aa96798dcfc912c61735f483da6',
      merchant_reference_id: 'abcd_09870987',
      metadata: {
        merchant_defined: 'true',
    }      
    };
    const result = await makeRequest('POST', '/v1/issuing/bankaccounts', body);

   res.json(result);
  } catch (error) {
    res.json(error);
  }

}


const makeTransfer = async(req, res) => {


  try {
    const body = {
      issued_bank_account: 'issuing_01ce6729cf4c1a6c5bd2b16901725876',
      amount: 100,
      currency: 'EUR'      
      
    };
    const result = await makeRequest(
      'POST',
      '/v1/issuing/bankaccounts/bankaccounttransfertobankaccount',
      body
    );

    res.json(result);
  } catch (error) {
    res.json(error);
  }
}
module.exports ={ issueNumber, makeTransfer }