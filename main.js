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

let hodnota1 = 8;
let hodnota2 = 10;

function klik(){
  element = document.querySelector("#vysledek").innerHTML = secti(hodnota1,hodnota2);
}


/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log("Gratulace, právě jsi spustila tuto funkci!");
  element = document.querySelector('.ctverecek');
  element.style.lineHeight = '40px';
  element.textContent = 'Gratulace,prave jsi spustila tuto funkci!';
}

function kliknuti(){
  element = document.querySelector('.ctverecek');
  element.style.backgroundColor = 'limegreen';
}