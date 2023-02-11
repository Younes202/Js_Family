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
 
----------------------- correction ex : 2 (Objets) ------------------
array = []
function NextId(){
    i=0;
    return i++;
}
function Etudiant(name,lastname,moy_gen){
    this.id = NextId();
    this.name = name;
    this.lastname = lastname;
    this.moy_gen = moy_gen;
    ajouter = function (array,et)
    {

              nom = prompt("Entrer le nom d'etudiant "+i)
              prenom = prompt("Entrer le prenom d'etudiant "+i)
              moyenne = prompt("Entrer la moyenne d'etudiant "+i)
              et = new Etudiant(nom,prenom,parseFloat(moyenne));
              array.push(et)
              return array 
    }

    afficher = function (array){

        for (let i = 0;i<array.length;i++)
        {
            alert("le nom d'etudiant "+array[i].name)
            alert("le prenom d'etudiant "+array[i].lastname)
            alert("la moyenne d'etudiant "+array[i].moy_gen)


        }
    }
    la_moyenne_plus_moins_note = function (array){

        for (let i = 0;i<array.length;i++)
        {
            if (array[i].moy_gen > array[i+1].moy_gen)
            {
                                alert("la premiere note est "+array[i].moy_gen)
                                alert("la dernier note est "+array[i+1].moy_gen)


            }
            else if (array[i].moy_gen < array[i + 1].moy_gen){
                alert("la premiere note est "+array[i+1].moy_gen)
                alert("la derniere note est "+array[i].moy_gen)


            }
            else if (array[i].moy_gen == array[i + 1].moy_gen)
                {

                        alert("les notes sont en egalité")

                }
            else{
                alert("la moyenne est deux moyennes")
            }
            return array
        }

    }
}
et = Etudiant();
ett = Etudiant();
ettt = Etudiant();
ajouter(array,et)
ajouter(array,ett)
ajouter(array,ettt)

afficher(array)
alert(la_moyenne_plus_moins_note(array))


------------------------ Ex : 4 ----------------------------- 
    
    
    
    function  Nextid(){
    id= 0;
    return id++;
}
function Product(desin,qte,pri)
{
    this.designation = desin;
    this.quantity = parseInt(qte);
    this.price = parseFloat(pri);
    this.display_produit = function (){
        return ""+this.designation + " " + this.quantity + " " + this.price + "\n"
    }
    this.tot_product = function (){
        return this.quantity*this.price;
    }
}
function Command() 
{   
    this.id = Nextid();
    this.Product  = []
    this.total = function (){
        var to=0.0;
        for (var i=0; i<this.Product.length; i++) {
            to+=this.Product[i].tot_product()
        }
        return to;   
    }
    this.paiment = function (d){
        if (d>this.total())
        {
            this.rendu  =   parseFloat(d) - parseFloat(this.total())  

        }
        else if (d<this.total()){
            this.rendu  = "tu dois donner encore "   
        }
        else {
            this.rendu  = 0.0   

        }
        return this.rendu
    }
    this.Display_Facture = function (n){
            document.write("<div style='color:Gray'>")
            document.write("       ******************* Facture  *******************  <br>")
        for (var i=0; i<this.Product.length; i++) {
            document.write("**** Produit "+(i+1))
            document.write("<br>"+"Design :    \t        "+this.Product[i].designation+"<br>");
            document.write("<br>"+"Prix Unit :   \t         "+this.Product[i].price+"<br>");
            document.write("<br>"+"QTE :      \t      "+this.Product[i].quantity+"<br>");
            document.write("<br>"+"Total Product"+(i+1)+":            "+this.Product[i].tot_product()+"<br>");
            document.write("<br>")
            document.write("<br>")
       
    }
    document.write("<br>"+"Total à payer:            "+this.total()+"<br>");
    document.write("<br>"+"Especes:            "+n+"<br>");
    document.write("<br>"+"Rendu:            "+this.paiment(n));
    document.write("</div>")

   
}
}
test_p = false
com = new Command()

  do{

     do {
    des = prompt("Enter the Designation ")
    price = prompt("Enter the price ")
    quantity = prompt("Enter the Quantity ")
     if(parseFloat(price) && parseFloat(quantity)){
        test_p = true
     }
    }while(test_p!=true)
    pr = new Product(des,parseFloat(price),parseInt(quantity))
    com.Product.push(pr)
    conf = confirm("Voulez-vous continuer l'ajout des produits   ?")
    }while(conf!=false || test_p !=true);
test = false
var pay
do{
    pay = prompt("Enter the Payment")
    if (parseFloat(pay))
    {
        test = true
    }

}while(test!=true);
com.Display_Facture(pay)





