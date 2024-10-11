let first = document.getElementById('first')

first.addEventListener('click', function(){
    alert("Vyskočíl mi alert")
})
const second = document.getElementById('second')

second.addEventListener('click', function(){
    second.textContent = "Změnilo se"
})
const third = document.getElementById('third')

third.addEventListener('click', function(){
    var paragraph = document.getElementById("three");
    paragraph.textContent = "HOLALA";
})
    
const fourth = document.getElementById('fourth')

fourth.addEventListener('click', function(){
    var paragraph = document.getElementById("four");
    paragraph.textContent = "ZA SOVĚTSKY SVAZ";
})

function hellouser(){
    let user = document.getElementById('user').value;
    alert('Vítám tě na webové stránce ' + user)
}

const eithth = document.getElementById('eighth');
const eight = document.getElementById('eight');

eighth.addEventListener('click', () => {
  const now = new Date();
  const formattedTime = now.toLocaleString(); // Zformátovaný čas (např. 16.11.2023 14:30:23)
  eight.textContent = formattedTime;
})

const tlacitko = document.getElementById("nineth");
const nine = document.getElementById("nine");

tlacitko.addEventListener("click", () => {
  const dnes = new Date();
  const formatovanyDatum = dnes.toLocaleDateString();
  nine.textContent = formatovanyDatum;
})