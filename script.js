'use strict';

let orderForm = document.getElementById('orderForm');
let orders = document.getElementById('orders');

Coffee.drinks = []

// __________________________________________________________________________________________

function saveToLocalSroreg(){
    let data = JSON.stringify(Coffee.drinks);
    localStorage.setItem('coffee',data);
}

function readFromLocalStoreg(){
    let stringObj = localStorage.getItem('coffee');
    let normalObj = JSON.parse(stringObj);

    if (normalObj !== null){
        Coffee.drinks = normalObj;
        renderOrder();
    }
}
readFromLocalStoreg();
// __________________________________________________________________________________________
function Coffee(custName, size, milk, isHot, drinkType) {
    this.custName = custName;
    this.size = size;
    this.milk = milk;
    this.isHot = isHot;
    this.drinkType = drinkType;

    Coffee.drinks.push(this);
}

function handelSubmit(event){
    event.preventDefault();

    let custName = event.target.custName.value;
    let size = event.target.size.value;
    let milk = event.target.milk.value
    let isHot = event.target.isHot.checked;
    let drinkType = event.target.drinkType.value;
    
    new Coffee(custName, size, milk, isHot, drinkType)

    renderOrder();
}
// _____________________________________________________________________________________________


function renderOrder(){
    orders.textContent = '';

    for(let i = 0; i < Coffee.drinks.length; i++){
        let drinkLi = document.createElement('li');
        let infoP = document.createElement('p');
        
        let temp; 
        if (Coffee.drinks[i].isHot){
            temp = 'hot';
        }else{
            temp = 'cold';
        }
        infoP.textContent = `${Coffee.drinks[i].custName} orderd a ${temp} ${Coffee.drinks[i].size} oz ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk} milk `;

        drinkLi.appendChild(infoP);
        orders.appendChild(drinkLi);
    }
    saveToLocalSroreg();
}

orderForm.addEventListener('submit',handelSubmit);