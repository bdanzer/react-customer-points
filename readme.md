# About
* A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
* Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.
* Make up a data set to best demonstrate your solution

# Demo 
https://bdanzer.github.io/react-customer-points/

# Installation

```bash
#clone repo;
#cd /repo/path
npm install;
npm run start;
```

# Transaction Data Generation

Running `npm run generate` will call this file `./src/api/generate.js` and you can specifiy the number of transactions with this function `generateTransactions`. That command will generate the transaction data in `./src/api/data/transactionData.json` to make playing with data easier.

# Components

I opted out using any third party component libraries like material UI

# Tests

Tests are located in `./src/tests` to help test calculating points. To run a test run `npm run test`.

# Deployment

* `npm run build:deploy`

# Node version used

v8.17.0