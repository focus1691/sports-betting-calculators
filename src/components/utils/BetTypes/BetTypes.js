export const getAmountByBetType = (betType, backStake) => {
	let parseFloatBackStake;
	if (betType === "SNR") {
		parseFloatBackStake = 0;
	} else {
		parseFloatBackStake = parseFloat(backStake);
	}
	return parseFloatBackStake;
}

export const getStakeAddedBetType = (betType , backStake , value) => {
    if(betType !== 'Normal') {
       value = (parseFloat(value) + parseFloat(backStake)); 
    } 
    return parseFloat(value);
}