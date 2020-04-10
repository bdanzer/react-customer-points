export function calculatePoints(price) {
    let points = 0;

    //Round down to the neareast dollar incase of change
    price = Math.floor(price);

    points = 50 < price && price < 100 ? price - 50 : points;
    points = price > 100 ? 50 + 2 * (price - 100) : points;

    return points;
}
