import { calculatePoints } from "../../utils/points";

describe("Points Program", () => {
    // A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent over $50 in each transaction
    // (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).

    test("Checking calcuations", () => {
        expect(calculatePoints(120)).toBe(90);
        expect(calculatePoints(150)).toBe(150);
        expect(calculatePoints(50)).toBe(0);
        expect(calculatePoints(1)).toBe(0);
        expect(calculatePoints(200)).toBe(250);
        expect(calculatePoints(495.75)).toBe(840);
        expect(calculatePoints(71)).toBe(21);
        expect(calculatePoints(51)).toBe(1);
    });
});
