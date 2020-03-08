export const setBonusBets = arbs => {
    return {
        type: "SET_BONUSES",
        payload: arbs
    }
};

export const addBonusBet = bonusBet => {
    return {
        type: "ADD_BONUS",
        payload: bonusBet
    }
};

export const editBonusBet = data => {
    return {
        type: "EDIT_BONUS",
        payload: data
    }
}

export const deleteBonusBet = data => {
    return {
        type: "DELETE_BONUS",
        payload: data
    }
}