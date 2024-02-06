const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
var path = require("path");
const stripe = require("stripe")('sk_test_4eC39HqLyjWDarjtT1zdp7dc');



dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
/** api routes */


app.get("/", async (req, res) => {

  res.json("hello this is backend! home from backend server.");
});

app.post("/create-payment-intent", async (req, res) => {
    const { items } = req.body;
  
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100,
      currency: "usd",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    console.log(paymentIntent)
  
    res.send({
      clientSecret: paymentIntent.client_secret,
      paymentId:paymentIntent.id
    });
  });


app.listen(process.env.PORT || 8000,()=>{
  console.log('server started in port : ',process.env.PORT || 8000)
})