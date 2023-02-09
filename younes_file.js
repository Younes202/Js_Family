
function sum(num1,num2){
    return parseFloat(num1) + parseFloat(num2)
}
function soustraction(num1,num2){
    return parseFloat(num1) - parseFloat(num2)
}function division(num1,num2){
    return parseFloat(num1) / parseFloat(num2)
}function produit(num1,num2){
    return parseFloat(num1) * parseFloat(num2)
}
function choice(num1,num2,char)
{

 if (char == '+'){resultat = "La somme de "+F_number+"et"+S_number+" est :" +sum(F_number,S_number)}
 else if (char == '-'){resultat="La soustraction de "+F_number+"et"+S_number+" est :" +soustraction(F_number,S_number)}
 else if (char == '/'){resultat="La division de "+F_number+"et"+S_number+" est :" +division(F_number,S_number)}
 else if (char == '*'){resultat="Le produit de "+F_number+"et"+S_number+" est :" +produit(F_number,S_number)}
 else {resultat="Error in your in inupt"}
 alert(resultat)

}
F_number = parseFloat(prompt("Enter the first number  "))
S_number = prompt("Enter the second number  ")

operation = prompt("Enter your Operation (+,-,*,/)")

choice(F_number,S_number,operation)
