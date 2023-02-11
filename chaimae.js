
// EX4:Créer les objets commande et produit.
// Demander à l'utilisateur de taper les infos de l’objet commande :
// id_commande, date_commande (jour, mois et année)et liste des produits.
// Chaque produit doit contenir les infos désignation, qte_commandee et prix_unitaire.
// La page doit demander de taper des produits tant que l’utilisateur le souhaite.
// Calculer le total de la commande, puis dans une alerte afficher ce total et demander au client
// de taper le montant de paiement.
// Afficher ensuite les détails de cette commande (identifiant, date, total de chaque produit, total
// à payer, montant et rendu) sous forme d’une facture ou d’un ticket de caisse : (utiliser une table
// html pour organiser l’affichage)


//Objet date
function Date_Commande(day,month,year){
    this.day = day;
    this.month=month;
    this.year = year;
}
//Objet Produit
function Produit(designation,prix_U,qte){
    this.designation = designation;
    this.prix_U = prix_U;
    this.qte = qte;
}
//Objet Commande
function Commande(id_commande,date_commande,produits){
    this.id_commande = id_commande;
    this.date_commande = date_commande;
    this.produits = produits;

}
produits = [];

id_commande = prompt("Entrez l'identifiant de la commande :");
day = prompt("Entrez le jour de la commande :");
month = prompt("Entrez le mois de la commande :");
year = prompt("Entrez l'année de la commande :");

let other = "yes";
while (other === "yes") {
    designation = prompt("Entrez la désignation du produit :");
    qte = Number(prompt("Entrez la quantité du produit :"));
    prix_U = Number(prompt("Entrez le prix unitaire :"));

    produits.push(new Produit(designation, prix_U, qte));
    other = prompt("Voulez-vous ajouter un autre produit ? (yes/no)");
}

date = new Date_Commande(day,month,year);
commande = new Commande(id_commande, date, produits);


function Total_commande() {
    let total = 0.0;
    this.produits.forEach(produits => {
      total += produits.qte * produits.prix_U;
    });
    return total;
}
let total_A_Payer = Total_commande();

alert("Total de la commmende est :", total_A_Payer," DH");

let espece = parseFloat(prompt("Montant A payer :"));
let rendu = Math.abs(total_A_Payer - espece);


document.write(`
<p style="color:blue">**********Facture**********</p>
<table >
<tr>
  <th style="color:blue">La date de la commande : </th>
  <td>${commande.date_commande.day}/${commande.date_commande.month}/${commande.date_commande.year}</td>
</tr>
`);

let i=0;
commande.produits.forEach(produit => {
    i++;
    let totalProduit = produit.qte * produit.prix_U;
    document.write(`
    <tr>
      <td>*******Produit :${i}</td>
    </tr>
    <tr>
        <td>Designation</td>
        <td>${produit.designation}</td>
    </tr>
    <tr>
        <td>Prix Unitaire</td>
        <td>${produit.prix_U}</td>
    </tr>
    <tr>
        <td>Qte</td>
        <td>${produit.qte}</td>
    </tr>
    <tr>
        <td>Total Produit ${i} : </td>
        <td>${totalProduit}</td>
    </tr>
    <br>
    <br>

`);
})

document.write(`

    <tr>
      <td><b>TOTAL A PAYER</b></td>
      <td>${total_A_Payer}</td>
    </tr>
    <tr>
        <td><b>ESPECES : </b></td>
        <td>${espece}</td>
    </tr>
    <tr>
        <td><b>RENDU : </b></td>
        <td>${rendu}</td>
    </tr>
    </table>
    
`);

//style
let tdElements = document.querySelectorAll("td");

for (let td of tdElements) {
  td.style.color = "blue";
}

