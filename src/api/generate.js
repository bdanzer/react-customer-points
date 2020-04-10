const _ = require("lodash");
const names = require("./data/names");
const fs = require("fs");
const path = require("path");

const {
    randomNumberMax,
    getRandomPrice,
    randomDate,
} = require("../utils/helpers");

const generateTransactions = (numberOfTransactions, names) => {
    let transactions = [];

    for (let i = 0; i < numberOfTransactions; i++) {
        let randomPersonId = _.floor(randomNumberMax(0, names.length - 1));
        transactions.push({
            customer: {
                customerId: randomPersonId,
                name: names[randomPersonId],
            },
            amount: getRandomPrice(1, 500),
            currency: "US",
            date: randomDate(new Date(2018, 0, 1), new Date(2019, 0, 1)),
        });
    }

    return transactions;
};

let json = generateTransactions(200, names);

fs.writeFileSync(
    path.resolve(__dirname + "/data/transactionData.json"),
    JSON.stringify(json, null, 4)
);
