const _ = require("lodash");
const moment = require("moment");

const randomNumberMax = (min, max) => _.random(min, max, true);

const randomDate = (start, end) => {
    let randomDate = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );

    //Using moment to easily format date to quicky create mock api
    return moment(randomDate).format("MM/DD/YYYY");
};

const getRandomPrice = (minPrice, maxPrice) => {
    let randomPrice = randomNumberMax(minPrice, maxPrice);
    let roundedRandomPrice = _.round(randomPrice, 2).toFixed(2);

    return roundedRandomPrice * 1;
};

module.exports = {
    randomNumberMax,
    randomDate,
    getRandomPrice,
};
