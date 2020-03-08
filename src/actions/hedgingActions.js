export const setHedges = hedges => {
    return {
        type: "SET_HEDGES",
        payload: hedges
    }
};

export const addHedge = hedge => {
    return {
        type: "ADD_HEDGE",
        payload: hedge
    }
};

export const editHedge = data => {
    return {
        type: "EDIT_HEDGE",
        payload: data
    }
};

export const deleteHedge = data => {
    return {
        type: "DELETE_HEDGE",
        payload: data
    }
};