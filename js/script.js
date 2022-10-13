
// buttons
const btnGenera = document.getElementById('btnGenera');
const btnAnnulla = document.getElementById('btnAnnulla');
// inputs
const userName = document.getElementById('userName');
const userKm = document.getElementById('userKm');
const userAge = document.getElementById('userAge');
resetInputs();

// listeners
btnGenera.addEventListener('click', function(){
  if(myCheck()){
    takeData();
    resetInputs();
    document.querySelector('.ticket').classList.remove('hide');
    document.querySelector('.ticket').classList.add('show');
  }
});

btnAnnulla.addEventListener('click', function () {
  resetInputs();
  print("", "", "", "", "");
  document.querySelector('.ticket').classList.remove('show');
  document.querySelector('.ticket').classList.add('hide');
});

// preleva km ed età inseriti
function takeData(){
  const price = calcPrice(parseInt(userKm.value), userAge.value);
  let offerta;

  if(userAge.value === "minorenne")
    offerta = "Sconto under 18";
  else if(userAge.value === "over")
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
function myCheck(){
  let nameCheck = true, kmCheck = true;

  if(userName.value === ''){
    setError(userName, "Il campo non può essere vuoto !");
    nameCheck = false;
  }
  else if (!isNaN(userName.value)){
    setError(userName, "Questo campo NON accetta numeri!");
    nameCheck = false;
  }else{
    setError(userName, "");
  }

  if(userKm.value === ''){
    setError(userKm, "Il campo non può essere vuoto !");
    kmCheck = false;
  }
    
  else if (isNaN(userKm.value)){
    setError(userKm, "Questo campo accetta solo numeri!");
    kmCheck = false;
  }else
    setError(userKm, "");

  if(nameCheck && kmCheck)
    return true;
  else
    return false;
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
  else if(age === "over")
    return result * dis_over65;
  
  return 0;
}

// funzione randomica
function myRandom(min, max){
  return Math.round(Math.random() * (max - min)) + min;
}

//reset inputs
function resetInputs(){
  userName.value = "";
  userKm.value = "";
}



