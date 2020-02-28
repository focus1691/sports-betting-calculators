import { calculateDutching } from "../utils/calculators/Dutching";

test("Dutching on 3 selections", () => {
	const selections = {
		sel1: { odds: 4 },
		sel2: { odds: 7 },
		sel3: { odds: 17 },
		sel4: { odds: "" },
		sel5: { odds: "" },
		sel6: { odds: "" },
		sel7: { odds: "" },
		sel8: { odds: "" },
		sel9: { odds: "" },
		sel10: { odds: "" },
		sel11: { odds: "" },
		sel12: { odds: "" }
	};

	const expectedItem1 = {
		odds: 4,
		stake: 27.67
	};

	const expectedItem2 = {
		odds: 7,
		stake: 15.81
	};

	const expectedItem3 = {
		odds: 17,
		stake: 6.51
	};

    const caculation = calculateDutching(selections, 50);
    
	expect(caculation.sel1).toMatchObject(expectedItem1);
	expect(caculation.sel2).toMatchObject(expectedItem2);
	expect(caculation.sel3).toMatchObject(expectedItem3);
});