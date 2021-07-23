'use strict';

let orderForm = document.getElementById('myForm');
let tableOrder = document.getElementById('table');

let tbodyEl = document.createElement('tbody');
tableOrder.appendChild(tbodyEl);

let tfooEl = document.getElementById('foot')
tableOrder.appendChild(tfooEl);

Coffee.drinks = [];


let imgs = ['download2.jpg','download3.jpg']


// ___________________________________object____________________________________________________________==>

function Coffee(custName, size, milk, drinkType) {
    this.custName = custName;
    this.size = size;
    this.milk = milk;
    this.drinkType = drinkType;

    Coffee.drinks.push(this);
    
}
// _____________________________________________________________________________________________________==<
// __________________________________Add Event Listener_________________________________________________==>
orderForm.addEventListener('submit', handelSubmit);
// _____________________________________________________________________________________________________==<
// ______________________________________Target_________________________________________________________==>
function handelSubmit(event) {
    event.preventDefault();

    let custName = event.target.custName.value;
    let size = event.target.size.value;
    let milk = event.target.milk.value;
    let drinkType = event.target.drinkType.value;

    new Coffee(custName, size, milk, drinkType)
    saveToLocalStoreg();
    renderTable();
}
// _____________________________________________________________________________________________________==<
// ___________________________________Dealing with storage______________________________________________==>
function saveToLocalStoreg() {
    let data = JSON.stringify(Coffee.drinks);
    localStorage.setItem('coffee', data);
}
function readFromlocalSroreg() {
    let stringObj = localStorage.getItem('coffee');
    let normalObj = JSON.parse(stringObj);

    if (normalObj !== null) {
        Coffee.drinks = normalObj;
    }
}
// _____________________________________________________________________________________________________==<
// ___________________________________Functiom Remove____________________________________________________==>
function removeCoffe(event){
    event.preventDefault();
    let clickedA = event.target.id;
    Coffee.drinks.splice(clickedA,1);
    saveToLocalStoreg();
    renderTable();
}
// _____________________________________________________________________________________________________==<
// ___________________________________Dealing with Table________________________________________________==>
function renderTable() {
    readFromlocalSroreg();
    tbodyEl.textContent = '';
    for (let i = 0; i < Coffee.drinks.length; i++) {

        let trEl = document.createElement('tr');
        let tdEl1 = document.createElement('td')
        let aEl = document.createElement('a');
        aEl.textContent= 'x';
        aEl.setAttribute('id',i);
        aEl.addEventListener('click',removeCoffe);
        tdEl1.appendChild(aEl);
        trEl.appendChild(tdEl1);

        let tdEl2 = document.createElement('td')
        tdEl2.textContent = Coffee.drinks[i].custName;
        trEl.appendChild(tdEl2);

        let tdEl3 = document.createElement('td')
        tdEl3.textContent = Coffee.drinks[i].size;
        trEl.appendChild(tdEl3);


        let tdEl4 = document.createElement('td')
        tdEl4.textContent = Coffee.drinks[i].milk;
        trEl.appendChild(tdEl4);

        let tdEl5 = document.createElement('td')
        tdEl5.textContent = Coffee.drinks[i].drinkType;
        trEl.appendChild(tdEl5);

        let tdEl6 = document.createElement('td');
        let tdImg = document.createElement('img');
        tdImg.setAttribute('src',`img/${imgs[1]}`);
        tdEl6.appendChild(tdImg);
        trEl.appendChild(tdEl6);

        
        tbodyEl.appendChild(trEl);
    }
    tfooEl.textContent = '';
    let trElFoot = document.createElement('tr');
    let thElFoot = document.createElement('th');
    thElFoot.textContent = 'Total';
    trElFoot.appendChild(thElFoot);
    tfooEl.appendChild(trElFoot);
    
    
}
renderTable();
// _____________________________________________________________________________________________________==<