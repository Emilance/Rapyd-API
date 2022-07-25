const makeRequest = require('../util/utilities').makeRequest;

const issueCard = async(req, res) => {

      try {
        const body = {
          ewallet_contact: 'cont_3625cb4fc18d005b12f9ccf0c466755e',
          country: 'US'
        };
        const result = await makeRequest('POST', '/v1/issuing/cards', body);
    
       res.json(result);
      } catch (error) {
          res.json(error);
      }
}

const activateCard  = async(req, res) => {
      try {
        const body = {
          card: 'card_0f1adc892adfd1885ab8a5236f8bf4b2'
        };
        const result = await makeRequest('POST', '/v1/issuing/cards/activate', body);
    
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}

const updateCardStatus  = async (req, res) => {
      try {
        const body = {
          card: 'card_f8dd3aa099444e1c80cc5a06de38b165',
          status: 'block'
        };
        const result = await makeRequest('POST', '/v1/issuing/cards/status', body);
    
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}
  


const  setCardPin = async (req, res) => {
      try {
        const body = {
          card: 'card_f8dd3aa099444e1c80cc5a06de38b165',
          new_pin: '7777'
        };
        const result = await makeRequest('POST', '/v1/issuing/cards/pin', body);
    
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}


module.exports = {issueCard, activateCard, updateCardStatus, setCardPin}