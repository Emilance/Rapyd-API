const express = require("express")
const {paymentMethod, verifyWallet} = require('../controllers/wallets');
const {createWallet}  = require("../controllers/wallets")

const router = express.Router();



router.get("/",  paymentMethod)
router.get("/create",  createWallet )
router.get("/verify", verifyWallet)


exports.router = router;