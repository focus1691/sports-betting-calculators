const initialState = {
    arbs: []
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
        case "SET_ARBS":
            return { ...state, arbs: action.payload };
        case "ADD_ARB":
            return { ...state, arbs: [...state.arbs, action.payload]};
        case "EDIT_ARB":
            const newArbs = [...state.arbs];
            newArbs[newArbs.indexOf(action.payload.oldArb)] = action.payload.newArb;
            return { ...state, arbs: newArbs };
        case "DELETE_ARB":
            const newArbs2 = [...state.arbs];
            newArbs2.splice(newArbs2.indexOf(action.payload.oldArb), 1);
            return { ...state, arbs: newArbs2 };
		default:
			return state;
	}
};

export default reducer;