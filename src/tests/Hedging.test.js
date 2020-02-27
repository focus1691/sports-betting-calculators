import { calculateHedge } from "../utils/calculators/Hedging";

test("BACK HEDGE: amount to bet, profit, and total stake", () => {
    let hedge = {
        amountToBet: 11.28,
        profit: 1.28,
        totalStaked: 86.72
    }

    expect(calculateHedge(10, 8.8, 7.8)).toMatchObject(hedge);
});