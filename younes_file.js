///// Excercice : 14 

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
//// Excercice : 15 
function plus_grande(tableau){
    let plus_grande = tableau[0];
    for (let i=0;i<tableau.length;i++){
       if(tableau[i].length >plus_grande.length)
       {
           plus_grande = tableau[i];
        } 
    }
    return plus_grande;
}
tab = [];
let i =0
do{
    tab[i] = prompt("Ajouter une chaine de caractère")
    a = confirm("Voulez-Vous Ajouter une autre chaine de caractère")
    i++
}while(a!=false)
alert(plus_grande(tab))
-------------------------------------------------- EX:1 (Objets)-----------------------


function Cercle(r){
    this.rayon = parseFloat(r)
    this.surface= function(){ 
       return 3.14 * r * r
    };
    
}

rayon = parseFloat(prompt("Ecrire le rayon"))
ce = new Cercle(rayon)
alert("La surface de cercle  qu'a le rayon  "+rayon+"est : " + ce.surface())






