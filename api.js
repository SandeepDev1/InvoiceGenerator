require('dotenv').config()
const express = require("express")
const {verifyBody} = require("./utils");
const {getInvoice} = require("./invoice");
const app = express()
app.use(express.json())
const PORT = process.env["PORT"] || 11000

const deliveryOptions = {
    logo: "https://thumbs.dreamstime.com/b/laundry-basket-icon-trendy-design-style-isolated-white-background-vector-simple-modern-flat-symbol-web-site-mobile-135748439.jpg",
    name: "Company Name",
    address1: "Some Road No 1",
    address2: "Some State, Pincode",
    orderId: "INV-001",
    customerName: "Sai Sandeep",
    date: "Oct 2, 2022",
    paymentTerms: "Delivery Items Receipt",
    items: [
        {
            name: "SINGLE BED_SHEET",
            qty: 3,
            rate: "10.00",
            amount: "30.00"
        },
        {
            name: "DOUBLE BED_SHEET",
            qty: 2,
            rate: "20.00",
            amount: "40.00"
        },
        {
            name: "TOWELS",
            qty: 3,
            rate: "5.00",
            amount: "15.00"
        },
        {
            name: "CLOTHES",
            qty: 3,
            rate: "50.00",
            amount: "150.00"
        }
    ],
    total: "235.00",
    balanceDue: "235.00",
    notes: "Thanks for being an awesome customer!",
    terms: "This invoice is auto generated at the time of delivery. If there is any issue, Contact provider"
}

app.post("/getInvoice", (req,res) => {
    const result = verifyBody(req.body)
    if(result.success){
        getInvoice(req.body).then(pdf => {
            res.status(200)
            res.contentType("application/pdf");
            res.send(pdf);
        }).catch(err => {
            console.error(err)
            res.status(500).send({success: false, error: "something went wrong"})
        })
    } else {
        res.status(400).send(result)
    }

})

app.get("/sample", (req,res) => {
    res.status(200).send(deliveryOptions)
})

app.get("/", (req,res)=> {
    res.status(200).send({msg: "Hi there, welcome to Invoice API. Go to /sample route to get sample data"})
})

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})