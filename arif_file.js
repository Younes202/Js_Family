function Addition(n1,n2){
    return n1+n2
}
function SOUSTRACTION(n1,n2){
    return n1-n2
}
function PRODUIT(n1,n2){
    return n1*n2
}
function DIVISION(n1,n2){
    return n1/n2
}



function opeartion(x,y,z){
    if(z=="+"){
        console.log("la somme de",x,"et",y,"est",Addition(x,y))
    }else if(z=="-"){
        console.log("la SOUSTRACTION de",x,"et",y,"est",SOUSTRACTION(x,y))
    
    }
    else if(z=="*"){
        console.log("la PRODUIT de",x,"et",y,"est",PRODUIT(x,y))
    
    }
    else if(z=="/"){
        console.log("la DIVISION de",x,"et",y,"est",DIVISION(x,y))
    
    }



}

num1=parseInt(prompt("donnez la valeur 1"))
num2=parseInt(prompt("donnez la valeur 2"))
op=prompt("donnez opearation")

opeartion(num1,num2,op)




//ex16
function PLUS_GRAND(a){
    let aff=a[0]
    for(let i=1;i<a.length;i++){
        if(a[i].length >aff.length){
            aff=a[i]
        
        }
    }
    return aff


}



const tba =["REAL MADRID","Raja casablanca","ARSENAL","Liverpool","MAN CITY"]
console.log(PLUS_GRAND(tba))



///EX4

function produit(de,qt,pu){
    this.désignation=de
    this.qte_commandee=qt
    this.prix_unitaire=pu

    this.total_p=function(){
        return this.qte_commandee*this.prix_unitaire    
    }

}

function DateC(j,m,y){
    this.jour =j;
    this.mois=m;
    this.annee = y;
}

function commande(idc,date_c,li){
    this.id_commande=idc,
    this.date_commande=date_c
    this.liste_des_produits=li

}

tab_produit=[]

x=prompt("donnez le nombre produit ")

for(let i=0;i<x;i++){
    A=prompt("donnez la  désignation ")
    B=prompt("donnez la  qte_commandee ")
    c=prompt("donnez le prix ")


    pro=new produit(A,B,c)

    tab_produit.push(pro)
     


    
    



}
especes= prompt("versement espèces ")
total_pa=0

document.write("************FACTURE*******</th>")

for(let i=0;i<tab_produit.length;i++){

        


        document.write("<br>"+"**PRODUIT "+(i+1)+"*****")
        document.write("<br>"+"   Design :  "+tab_produit[i].désignation+"<br>")  
        document.write("<br>"+"   Prix Unit : "+tab_produit[i].qte_commandee+"<br>")  
        document.write("<br>"+"   QTE :     "+tab_produit[i].prix_unitaire+"<br>")  
       to=tab_produit[i].prix_unitaire*tab_produit[i].qte_commandee
       document.write("<br>"+"   Total Produit :     "+to+"<br>") 
       total_pa+=to
       rendu=especes-to
   


        


}

document.write("---------------------------------------------------------------------") 

document.write("<br>"+"   Total A PAYER :     "+total_pa+"<br>") 
 
document.write("<br>"+"         ESPECES :     "+especes+"<br>")  
document.write("<br>"+"           RENDU :     "+rendu+"<br>")  



