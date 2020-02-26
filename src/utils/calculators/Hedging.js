

export const calculateHedge = (stake, price, exitPrice) => {
    return ((stake * price) / exitPrice).toFixed(2);
};

