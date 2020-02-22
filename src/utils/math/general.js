export const roundTheVal = (e, t) => {
    return Number(Math.round(e + "e" + t) + "e-" + t).toFixed(t)
}