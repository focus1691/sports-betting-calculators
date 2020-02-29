import { calculateBonusBet } from "../utils/calculators/BonusBet";

test("Bonus bet test using same odds on 2 events 1.90", () => {
    const expectedObj = {
        bonusBet: "100",
        stake: 47.37,
        profit: 42.63,
        bonus: "Arsenal",
        other: "Tottenham"
    }

    expect(calculateBonusBet("Arsenal", "Tottenham", "1.90", "1.90", "100")).toMatchObject(expectedObj);

});