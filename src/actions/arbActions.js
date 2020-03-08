export const setArbs = arbs => {
    return {
        type: "SET_ARBS",
        payload: arbs
    }
};

export const addArb = arb => {
    return {
        type: "ADD_ARB",
        payload: arb
    }
};

export const editArb = data => {
    return {
        type: "EDIT_ARB",
        payload: data
    }
}

export const deleteArb = data => {
    return {
        type: "DELETE_ARB",
        payload: data
    }
}