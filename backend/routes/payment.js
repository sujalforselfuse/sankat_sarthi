const express = require('express');
const crypto = require('crypto');
const router = express.Router();
const KEY_ID = process.env.KEY_ID;
const KEY_SECRET = process.env.KEY_SECRET;

const verifyToken = require('../middleware/verifyToken')
const Razorpay = require('razorpay');

router.post('/orders', (req, res) => {

    var instance = new Razorpay({ key_id: `${KEY_ID}`, key_secret: `${KEY_SECRET}` })

    var options = {
        amount: req.body.amount * 100,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11"
    };
    instance.orders.create(options, function (err, order) {
        console.log(order);
        if (err) {
            res.send({ success: false, code: 500, message: err });
        }
        else {
            res.send({ success: true, code: 200, data: order, message: "order created" })
        }
    });

})

router.post('/verify', async (req, res) => {

    try {
        let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;

        var expectedSignature = crypto.createHmac('sha256', KEY_SECRET).update(body.toString()).digest('hex');

        if (expectedSignature === req.body.response.razorpay_signature) {
            res.send({ success: true, message: "Sign Valid" });
        }
        else {

            res.status(500).send({ success: false, msg: "Sign In valid" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({ success: false, msg: "some error occured" });
    }

})



module.exports = router;