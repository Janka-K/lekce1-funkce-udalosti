// tady je místo pro náš program

//document.querySelector("#vysledek").innerHTML = secti(4, 5);



/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

function klik(){
  element = document.querySelector("#vysledek");
  element.innerHTML = secti(4,5);
}


/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  element = document.querySelector('div.ctverecek');
  element.style.lineHeight = '40px';
  element.textContent = 'Gratulace,prave jsi spustila tuto funkci!';
}

function kliknuti(){
  element = document.querySelector('.ctverecek');
  element.style.backgroundColor = 'limegreen';
}