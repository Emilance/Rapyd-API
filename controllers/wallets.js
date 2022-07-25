const makeRequest = require('../util/utilities').makeRequest;

const createWallet = async (req, res) => {
  try {
    const body = {
      first_name: 'John',
      last_name: 'Doe',
      ewallet_reference_id: 'Job-Doe-02152020',
      metadata: {
        merchant_defined: true
      },
      type: 'company',
      contact: {
        phone_number: '+14155551234',
        email: 'jobdoe@rapyd.net',
        first_name: 'John',
        last_name: 'Doe',
        mothers_name: 'Jane Smith',
        contact_type: 'business',
        address: {
          name: 'John Doe',
          line_1: '123 Main Street',
          line_2: '',
          line_3: '',
          city: 'Anytown',
          state: 'NY',
          country: 'US',
          zip: '12345',
          phone_number: '+14155551234',
          metadata: { number: 2 },
          canton: '',
          district: ''
        },
        identification_type: 'PA',
        identification_number: '1234567890',
        date_of_birth: '11/22/2000',
        country: 'US',
        metadata: {
          merchant_defined: true
        },
        business_details: {
          entity_type: 'association',
          name: 'Four Star Professional Services',
          registration_number: '4234567779',
          industry_category: 'company',
          industry_sub_category: 'home services',
          address: {
            name: 'John Doe',
            line_1: '1234 Main Street',
            line_2: 'Suite 1200',
            line_3: '',
            city: 'Anytown',
            state: 'NY',
            country: 'US',
            zip: '10101',
            phone_number: '14155557779',
            metadata: {
              merchant_defined: true
            }
          }
        }
      }
    };
    const result = await makeRequest('POST', '/v1/user', body);

   res.json(result)
  } catch (error) {
    res.json(error);
  }
}

const paymentMethod =  async (req, res ) => {
    // res.json({"output" : "List Payment method  by country"})
    try {
        const result = await makeRequest('GET', '/v1/payment_methods/country?country=it');
    
        res.json(result);
      } catch (error) {
        res.json(error)
      }
}


const verifyWallet  =async(req, res)=> {
  try {
    const body = {
      back_side_image: '',
      back_side_image_mime_type: '',
      country: 'US',
      document_type: 'PA',
      ewallet: 'ewallet_f9a13aa96798dcfc912c61735f483da6',
      face_image: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBk=',
      face_image_mime_type: 'image/jpeg',
      front_side_image: '/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGk=',
      front_side_image_mime_type: 'image/jpeg',
      reference_id: '123success',
      request_type: 'store',
      send_callback: null
    };
    const result = await makeRequest('POST', '/v1/identities', body);

    res.json(result);
  } catch (error) {
    res.json(error);
  }
}

module.exports ={ paymentMethod, createWallet, verifyWallet }

