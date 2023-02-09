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
