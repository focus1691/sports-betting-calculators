const initialState = {
	arbs: [],
	bonusBets: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_ARBS":
			return { ...state, arbs: action.payload };
		case "ADD_ARB":
			return { ...state, arbs: [...state.arbs, action.payload] };
		case "EDIT_ARB":
			const newArbs = [...state.arbs];
			newArbs[newArbs.indexOf(action.payload.oldArb)] = action.payload.newArb;
			return { ...state, arbs: newArbs };
		case "DELETE_ARB":
			const newArbs2 = [...state.arbs];
			newArbs2.splice(newArbs2.indexOf(action.payload.oldArb), 1);
			return { ...state, arbs: newArbs2 };
		case "SET_BONUSES":
			return { ...state, bonusBets: action.payload };
		case "ADD_BONUS":
			return { ...state, bonusBets: [...state.bonusBets, action.payload] };
		case "EDIT_BONUS":
			const newBonusBets = [...state.bonusBets];
			newBonusBets[newBonusBets.indexOf(action.payload.oldBonusBet)] = action.payload.newBonusBet;
			return { ...state, bonusBets: newBonusBets };
		case "DELETE_BONUS":
			const newBonusBets2 = [...state.bonusBets];
			newBonusBets2.splice(newBonusBets2.indexOf(action.payload.oldBonusBet), 1);
			return { ...state, bonusBets: newBonusBets2 };
		default:
			return state;
	}
};

export default reducer;
