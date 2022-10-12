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
  if(notEmpty(userName))
    resetError(document.getElementById('error1'));
  if(validNumber(userKm) )
    resetError(document.getElementById('error2'));
  if(notEmpty(userKm))
    resetError(document.getElementById('error2'));

  if(notEmpty(userName) && validNumber(userKm) && notEmpty(userKm)){
    takeData();
    resetInputs();
  }
});

btnAnnulla.addEventListener('click', function () {
  resetInputs();
  print("", "", "", "", "");
});

// preleva km ed età inseriti
function takeData(){
  const price = calcPrice(parseInt(userKm.value), userAge.value);
  let offerta;

  if(userAge.value === "minorenne")
    offerta = "Sconto under 18";
  else if(userAge.value === "maggiorenne")
    offerta = "Sconto over 65";
  else 
    offerta = "Nessuno sconto";

  print(userName.value, offerta, myRandom(1,10), myRandom(11111, 99999), price + "€");
  console.log(price);
}

// stampa dati
function print(name, offer, carriage, code, price){
  document.getElementById('outputName').innerHTML = name;
  document.getElementById('outputOfferr').innerHTML = offer;
  document.getElementById('outputCarriage').innerHTML = carriage;
  document.getElementById('outputCode').innerHTML = code;
  document.getElementById('outputPrice').innerHTML = price;
}

// funzione di controllo
function validNumber(inputName){
  let check = true;
  
  if(isNaN(inputName.value)){
    setError(inputName, "Questo campo accetta solo numeri");
    check = false;
  }

  
  return check;
}

//funzione di controllo 
function notEmpty(inputName){
  let check = true;

  if(inputName.value === ''){
    setError(inputName, "Questo campo non può essere vuoto");
    check = false;
  }

  return check;
}

// funzione che gestisce i messaggi di errore
function setError(input, messagge){
  let parent = input.parentElement;
  const error = parent.querySelector('.error');
  error.innerHTML = messagge;
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

// funzione randomica
function myRandom(min, max){
  return Math.round(Math.random() * (max - min)) + min;
}

function resetInputs(){
  userName.value = "";
  userKm.value = "";
}

function resetError(error){
  error.innerHTML = "";
}



