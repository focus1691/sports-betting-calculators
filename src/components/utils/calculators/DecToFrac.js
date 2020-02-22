function reduce(a, b) {
    var n = new Array(2);
    var f = GCD(a, b);
    n[0] = a / f;
    n[1] = b / f;
    return n;
}

function GCD(num1, num2) {
    var a; var b;
    if (num1 < num2) { a = num2; b = num1; }
    else if (num1 > num2) { a = num1; b = num2; }
    else if (num1 === num2) { return num1; }
    while (1) {
        if (b === 0) {
            return a;
        }
        else {
            var temp = b;
            b = a % b;
            a = temp;
        }
    }
}

export default (decimal => {
    decimal = parseFloat(decimal).toFixed(2);
    var num = (decimal - 1) * 10000;
    var dom = 10000;

    num = Math.round(num);
    dom = Math.round(dom);

    var a = reduce(num, dom);
    num = a[0];
    dom = a[1];

    return (num + '/' + dom);
});