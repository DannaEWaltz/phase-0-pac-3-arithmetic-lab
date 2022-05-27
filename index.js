1 + 80;
60 - 40;
2 * 3.4;
5.0 / 2.5;

function add(a, b) {
    return a + b;
}
function subtract(c, d) {
    return c - d;
}
function multiply(a, b) {
    return a * b;
}
function divide(e, f) {
    return e / f;
}

number = 10;
function add5() {
    return (number += 5);
}
function divideBy3() {
    return (number /= 3);
}
divideBy3();
add5();

function increment(n) {
    return n + 1;
}
function decrement(n) {
    return n - 1;
}

function makeInt(string) {
    return parseInt(string, 10); 
}

function preserveDecimal(string) {
    return parseFloat(string);
}
