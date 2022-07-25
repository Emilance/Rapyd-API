const express = require("express")
const userRoutes =require('./routes/wallet').router
const virtualAccount = require("./routes/virtualAccount").router
const paymentRoutes = require("./routes/payment").router

const makeRequest = require('./util/utilities').makeRequest;

const app = express()

app.set('json spaces', 4)
const PORT =  process.env.PORT || 4000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))



app.use('/wallet',  userRoutes)
app.use('/virtualAccount',   virtualAccount)
app.use('/payment', paymentRoutes )

// app.get("/country", async (req, res ) => {
//     // res.json({"output" : "List Payment method  by country"})
//     try {
//         const result = await makeRequest('GET', '/v1/payment_methods/country?country=it');
    
//         res.json(result);
//       } catch (error) {
//         res.json(error)
//       }
// })


// app.get("/payment", async (req, res) => {
//     // res.json({"output" : "Make a Payment"})
//     try {
//      const body = {
//         "amount": 200,
//         "currency": "EUR",
//         "customer": "cus_*******************",
//         "payment_method": {
//             "type": "it_visa_card",
//             "fields": {
//                 "number": "4111111111111111",
//                 "expiration_month": "12",
//                 "expiration_year": "23",
//                 "name": "John Doe",
//                 "cvv": "345"
//             },
//             "metadata": {
//             "merchant_defined": true
//         }
//         },
//         "capture": true
//     };
//      const result = await makeRequest('POST', '/v1/payments', body);
//         res.json(result);
//       } catch (error) {
//         res.json(error)
//       }
// })