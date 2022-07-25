const express = require("express")
const { issueNumber, makeTransfer }  = require("../controllers/virtualAccount")

const router = express.Router();




router.get("/issueNumber",  issueNumber )
router.get("/transfer", makeTransfer)


exports.router = router;