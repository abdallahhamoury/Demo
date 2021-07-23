'use strict';

let orderForm = document.getElementById('orderForm');
// let orders = document.getElementById('orders');
// let container = document.getElementById('container');
// let tableEl = document.createElement('table');
// let theadEl=document.createElement('thead');
// tableEl.appendChild(theadEl);
let tableEl = document.getElementById('table');
let tboodyEl = document.createElement('tbody');
tableEl.appendChild(tboodyEl);
let tfootEl = document.getElementById('foot');
tableEl.appendChild(tfootEl);
// container.appendChild(tableEl);


Coffee.drinks = [];



// ___________________________________object and target__________________________________________________==>

function Coffee(custName, size, milk, isHot, drinkType) {
    this.custName = custName;
    this.size = size;
    this.milk = milk;
    this.isHot = isHot;
    this.drinkType = drinkType;

    Coffee.drinks.push(this);
}

// ___________________________________Add Event Listener________________________________________________==>
orderForm.addEventListener('submit', handelSubmit);
// _____________________________________________________________________________________________________==<

function handelSubmit(event) {
    event.preventDefault();

    let custName = event.target.custName.value;
    let size = event.target.size.value;
    let milk = event.target.milk.value;
    let isHot = event.target.isHot.value;
    let drinkType = event.target.drinkType.value;

    new Coffee(custName, size, milk, isHot, drinkType);
    saveToLocalSrorege();
    renderTable();
}
// ____________________________________________________________________________________________________==<


// ___________________________________Render ul_________________________________________________________==>
// function renderOrder() {
//     orders.textContent = '';

//     for (let i = 0; i < Coffee.drinks.length; i++) {
//         let drinksLi = document.createElement('li');
//         let inoP = document.createElement('p')
//         let temp;
//         if (Coffee.drinks[i].isHot) {
//             temp = 'hot';
//         } else {
//             temp = 'cold';
//         }
//         inoP.textContent = `${Coffee.drinks[i].custName} order${Coffee.drinks[i].size} os ${Coffee.drinks[i].drinkType} milk`
//         drinksLi.appendChild(inoP)
//         orders.appendChild(drinksLi)
//     }
//     saveToLocalSrorege();

// }
// ____________________________________________________________________________________________________==<




// ___________________________________Dealing with storage______________________________________________==>
function saveToLocalSrorege() {
    let data = JSON.stringify(Coffee.drinks);
    localStorage.setItem('cofee', data)
}

function readFromlocalSroreg() {
    let stringObj = localStorage.getItem('cofee');
    let normalObj = JSON.parse(stringObj);

    if (normalObj !== null) {
        Coffee.drinks = normalObj;
        // renderTable()
    }
}

function removeCoffe(event) {
    event.preventDefault();
    let clickedA = event.target.id;
    Coffee.drinks.splice(clickedA, 1);
    saveToLocalSrorege();
    renderTable();
}

// _____________________________________________________________________________________________________==<

// ___________________________________Dealing with Table________________________________________________==>

// function creatTableHeader() {
//     let trEl = document.createElement('tr');
//     tableEl.appendChild(trEl);
//     let thEl1 = document.createElement('th');
//     thEl1.textContent = 'costomer name'
//     trEl.appendChild(thEl1);
//     let thEl2 = document.createElement('th');
//     thEl2.textContent = 'size'
//     trEl.appendChild(thEl2);
//     let thEl3 = document.createElement('th');
//     thEl3.textContent = 'milk'
//     trEl.appendChild(thEl3);
//     let thEl4 = document.createElement('th');
//     thEl4.textContent = 'drink type'
//     trEl.appendChild(thEl4);
//     theadEl.appendChild(trEl);
// }

// creatTableHeader();

function renderTable() {
    readFromlocalSroreg();
    tboodyEl.textContent = '';
    let total = 0;
    for (let i = 0; i < Coffee.drinks.length; i++) {

        let trEl = document.createElement('tr');
        let td0 = document.createElement('td');
        let aEl = document.createElement('a');
        aEl.textContent = 'x';
        aEl.setAttribute('id', i);
        aEl.addEventListener('click', removeCoffe);
        td0.appendChild(aEl);
        let td1 = document.createElement('td');
        td1.textContent = Coffee.drinks[i].custName;
        let td2 = document.createElement('td');
        td2.textContent = Coffee.drinks[i].size.split(',')[0];
        let td2Price = document.createElement('td');
        td2Price.textContent = `${Coffee.drinks[i].size.split(',')[1]}$`;
        let td3 = document.createElement('td');
        total = total + Number(Coffee.drinks[i].size.split(',')[1]);
        td3.textContent = Coffee.drinks[i].milk;
        let td4 = document.createElement('td');
        td4.textContent = Coffee.drinks[i].drinkType.split('.')[0];

        
        let td4img = document.createElement('td');
        let imgEl = document.createElement('img');
        imgEl.setAttribute('src', Coffee.drinks[i].drinkType);
        td4img.appendChild(imgEl);



        trEl.appendChild(td0);
        trEl.appendChild(td1);
        trEl.appendChild(td2);
        trEl.appendChild(td2Price)
        trEl.appendChild(td3);
        trEl.appendChild(td4);
        trEl.appendChild(td4img);
        tboodyEl.appendChild(trEl)
    }
    tfootEl.textContent = '';
    let trEl2 = document.createElement('tr');
    let thEl1 = document.createElement('th');
    thEl1.textContent = 'total';
    trEl2.appendChild(thEl1);
    let thEl2 = document.createElement('th');
    thEl2.textContent = `${total}`;
    trEl2.appendChild(thEl2);
    tfootEl.appendChild(trEl2);
}
renderTable();
// _____________________________________________________________________________________________________==<
