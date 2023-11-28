var elInp = document.querySelector('.inp')
var elPiyoda = document.querySelector('.piyoda')
var elVelik = document.querySelector('.velik')
var elMashina = document.querySelector('.mashina')
var elPlane = document.querySelector('.plane')

function calc(){
elPiyoda.textContent = elInp.value / 4 
elVelik.textContent = elInp.value / 20 
elMashina.textContent = elInp.value / 100 
elPlane.textContent = elInp.value / 800 
}