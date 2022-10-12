/* 
//* BASIC script

const user_km = parseInt(prompt("Quanti KM vuoi percorrere ? "));
const user_age = parseInt(prompt("Inserisci la tua età"));

// costo x km percorso 
const km_price = 0.21;
// sconti legati all'età
const dis_under18 = 0.20, dis_over65 = 0.40;
// calcolo del prezzo
let result = user_km * km_price;

// controllo se l'età dell'user è soggetta a sconti 
if(user_age < 18)
  result -= result * dis_under18;
else if (user_age >= 65)
  result -= result * dis_over65;

// arrotondamento delle ultime due cifre decimali 
result = result.toFixed(2);
console.log("Prezzo da pagare : " +  result + "€");

 */

//* ----------------------------------------------------------------
// buttons
const btnGenera = document.getElementById('btnGenera');
const btnAnnulla = document.getElementById('btnAnnulla');
// inputs
const userName = document.getElementById('userName');
const userKm = document.getElementById('userKm');
const userAge = document.getElementById('userAge');

btnGenera.addEventListener('click', function(){
  takeData();
});

// preleva km ed età inseriti
function takeData(){
  let price;

  price = calcPrice(parseInt(userKm.value), userAge.value);
  console.log(price);
  
}

// calcola prezzo 
function calcPrice(km, age){
  const km_price = 0.21;
  let result = km * km_price;
  const discount = calcDis(result, age);

  if(discount != 0)
    result -= discount;

  return result.toFixed(2);
}

// calcola sconto 
function calcDis(result, age){
  const dis_under18 = 0.20, dis_over65 = 0.40;

  if(age === "minorenne")
    return result * dis_under18;
  else if(age === "maggiorenne")
    return result * dis_over65;
  
  return 0;
}
