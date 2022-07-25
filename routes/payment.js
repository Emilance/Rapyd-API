const express = require("express")
const { payByCard, getPaymentList }  = require("../controllers/payment")

const router = express.Router();


router.get("/bycard",  payByCard)
router.get("/paymentlist", getPaymentList)



exports.router = router;