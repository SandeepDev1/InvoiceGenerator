# InvoiceGenerator
An Nodejs Invoice generator API which uses HTML and render it in browser then save it as PDF.

## Requirements
Nodejs v16.0+

## Installation
```sh
> Clone Repo
npm i
```

## Setup
* You can Add the port to expose in .env file `PORT=11000`

## Run
```sh
node api.js
```

## Routes
* `GET /sample` - returns the sample request object needed for the invoice to generate
* `POST /getInvoice` - returns the pdf as content-type `application/pdf`

## Sample Request Object
```js
{
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
```

## Sample PDF

The sample PDF can be found [here](https://github.com/SandeepDev1/InvoiceGenerator/blob/main/response.pdf)

## Contributions

Feel free to contribute this project by adding any other features which its useful for different usecases. I'll be happy to accept the pull requests :)
