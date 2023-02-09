function ADDITION(a, b) { //+
    return a + b;
}
function SOUSTRACTION(a, b) { //-
    return a - b;
}
function PRODUIT(a, b) { //*
    return a * b;
}
function DIVISION(a, b) {  //"/"
    if (b == 0) {
        return "maymknch t9sm 3la 0";
    }
    return a / b;
}
function OPERATEUR(a, b, c) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return "Error: Invalid number";
    }
    switch (c) {
        case '+':
            return ADDITION(a, b);
        case '-':
            return SOUSTRACTION(a, b);
        case '*':
            return PRODUIT(a, b);
        case '/':
            return DIVISION(a, b);
        default:
            return "Error OPERATEUR";
    }
}
let a = parseFloat(prompt("Enter number 1: "));
let b = parseFloat(prompt("Enter number 2: "));
let c = prompt("Enter +, -, *, / : ");

let result = OPERATEUR(a, b, c);

console.log(" result : " + result);

