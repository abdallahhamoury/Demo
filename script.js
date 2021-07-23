'use strict'

// var username;
// username = "abdallah";
// var myid = 1234;
// var test = true;



// console.log(username);


// alert("welcom to our webpage " + username)


// document.write(" <p style='color:red;' > this is " + username + " from js </p> ")

// var x = "5";
// var y = 5;

// console.log(5 ** 2);
// // console.log(y++);
// console.log(y);
// console.log(y == x);
// console.log(y === x)
// console.log(y != x)

// var userage =  prompt(" Enter your age? ")
// console.log(userage);

// var age = 25;

// if (age <= 25) {
//   alert("hello")
// } else if (age > 25) {
//   alert("hey")
// } else {
//   alert("hi")
// }
//-----------------------------------------------------------------------------------------------
// let anser1 = Number (prompt('please enter num'));
// while (anser1 != 5)
// if (anser1 == 5){
//   alert('correct')
// }else if(anser1 == 10){
//   alert("amazing")
// }else{
//   alert('plaese try again')
// }

// let car = prompt('enter').toUpperCase;
// switch (car) {
//   case 'k' :
//     alert("nice");
//     break;
//   case 'm' :
//     alert("good");
//     break;
//   default:
//     alert("way");
//     break;
// }

//loops

//for
// for(let i = 0; i < somting; i++){
//     code
// }

//while
//while(condition){
// code
// 

// let userName = prompt('please enter your name')
// while (userName === '') {
//     userName = prompt('please enter your name')
// }

// for (let i = 1; i<=10; i = i++){

//     console.log(i);
// }


// example do waile
// let num10 = 1;
// do{
//     console.log(num10);
// }while (num10 <= 0);


// let num10 = 1;
// do{
//     console.log(num10);
//     num10++;
// }while (num10 <= 10);


//___________________________________________________________________________________________________________________==>
// class2

// let num1 = parseInt(prompt('enter first number'));
// console.log(num1);
// let num2 = Number(prompt('enter scond number'));
// console.log(num2);
// let num3 = parseFloat(prompt('enter third number'));
// console.log(num3);

// console.log('sum=', num1 + num2 + num3);

// let q1 = confirm('do you like coding?');
// console.log(q1);

// **if** ___________________________________________

// let answer1 = Number(prompt('plese enter a number'));
// if (answer1 === 5) {
//     console.log('correct 5');
// }else if (answer1 === 3){
//     console.log('correct 3');
// }
// else{
//     console.log('wrong');
// }

//swithc
// switch (answer1) {
//     case 5:
//         console.log('correct');
//         break;
//     case 4:
//         console.log('correct');
//         break;
//     default:
//         console.log('wrong');
//         break;
// }
//___________________________________________________________________________________________________________________<==

//___________________________________________________________________________________________________________________==>
//class3
// ** loops **

// for

// for (let i = 0; i < something; i++) {
//     //code
// }

//while

// while (condition) {
//     //code
// }

// ---------------------------------------------------------
//ex:
// let userName = prompt('plaese enter your name');
// while (userName === '') {
//     userName = prompt('please enter you name');
// }
// ---------------------------------------------------------
// ---------------------------------------------------------
//ex:
// for (let i = 1; i <= 100; i++){
//     console.log(i);
// }
// ---------------------------------------------------------
// ---------------------------------------------------------
//ex:
// let num10 = 1;
// do {
//     console.log(num10);
//     num10++;
// } while (num10 <= 10);
// ---------------------------------------------------------

// ** Array **


// let cars = ['kia', 'bmw', 'ford'];

// // console.log('the array length',cars.length);

// // console.log(cars[0]);
// // console.log(cars[1]);
// // console.log(cars[2]);

// for(let i = 0; i<cars.length; i++){
//     console.log(cars[i])
// }

// cars.push('toyota');
// cars.push(5000)
// console.log(cars);



// let grades = [10, 20, 30, 40, 50, 100, 110,]
// grades.push(120);
// console.log(grades);

// for (let i =0; i < grades.length; i++){
//     grades[i] = grades[i] + 5;    
// }
// console.log(grades);


// let grades = [1,2,3,4,5,6,7,8];
// console.log(grades.indexOf(4));
// console.log(grades.indexOf(40));

//___________________________________________________________________________________________________________________<==
//___________________________________________________________________________________________________________________==>
// class4
// **function**


// 1------------declaration-----------------
// 
// let num1 = Number(prompt('enter num1'));
// let num2 = Number(prompt('enter num2'));


// function multi(x, y) {
//     let multi = x * y;
//     return multi;
// }
// console.log(multi(num1, num2));


// 2--------------exprtion-------------------
// 
// let getAge = function(year) {
//     return 2021 - year;
// }
// console.log(getAge(1989));

//___________________________________________________________________________________________________________________<==
//___________________________________________________________________________________________________________________==>
// class6
//**object** 

// let shihab ={
//     userName : 'shihab',
//     age : 35,
//     gender : 'male',
//     weight : 100,
//     loveCoding : true,
//     foodlikes : ['mansaf','shaerma', 'maglobeb'],
//     job: {
//         jobTitle: 'frond end develober',
//         level: 'mid',
//         salary: 2000,
//         place: 'imman-irbid',
//     },
//     sayhi: function(){
//         console.log('hi')
//     },
//     sayname: function(){
//         console.log(`my name is ${this.userName}`);
//     },
// }

// shihab.sayhi();
// shihab.sayname();

// console.log(shihab);
// console.log(shihab.age);
// console.log(shihab.job.jobTitle);
// shihab.job.salary +=200;
// console.log(shihab.foodlikes[0]);
// console.log(shihab.job.salary);
// for(let i=0;i<shihab.foodlikes.length;i++){
//     console.log(shihab.foodlikes[i]);
// }


//---------------------------Dom---------------------------------------


// let hiEl = document.getElementById('divHi');
// console.log(hiEl);
// hiEl.textContent = 'hi';


// let byeEl = document.getElementById('divBye');
// console.log(byeEl);
// byeEl.textContent = 'bye';


// let pEl = document.createElement('p');
// pEl.textContent = 'welocom to my wibsite';
// console.log(pEl);


// let pDiv = document.getElementById('pcontent')
// pDiv.appendChild(pEl);


// let shihab = {
//     userName: 'shihab',
//     age: 35,
//     gender: 'male',
//     weight: 100,
//     loveCoding: true,
//     foodlikes: ['mansaf', 'shaerma', 'maglobeb'],
//     job: {
//         jobTitle: 'frond end develober',
//         level: 'mid',
//         salary: 2000,
//         place: 'imman-irbid',
//     },
//     sayhi: function () {
//         console.log('hi')
//     },
//     sayname: function () {
//         console.log(`my name is ${this.userName}`);
//     },
//     render: function () {
//         let ulcontainer = document.getElementById('ulcontainer');
//         let ulEl = document.createElement('ul');

//         for (let i = 0; i < shihab.foodlikes.length; i++) {
//             let liEl = document.createElement('li');
//             liEl.textContent = shihab.foodlikes[i];
//             ulEl.appendChild(liEl);
//         }

//         ulcontainer.appendChild(ulEl);


//     }


// }

// shihab.render();
//___________________________________________________________________________________________________________________<==
//___________________________________________________________________________________________________________________==>
// class7 
// **constructor**                   
// **prorotype**


// let students =[];

// function Student(stdName,age,grade){
//     this.stdName = stdName;
//     this.age = age;
//     this.grade = grade;
//     students.push(this);
// }


// Student.prototype.sayhi= function(){
//     console.log(`hi my name in ${this.stdName}`)
// }
// Student.prototype.saybye= function(){
//     console.log('bye bye')
// }


//     Student.prototype.render = function (){
//         let trEl = document.createElement('tr')
//         let tdEl1 = document.createElement('td')
//         let tdEl2 = document.createElement('td')
//         let tdEl3 = document.createElement('td')

//         tdEl1.textContent= this.stdName;
//         tdEl2.textContent= this.age;
//         tdEl3.textContent= this.grade;

//         trEl.appendChild(tdEl1);
//         trEl.appendChild(tdEl2);
//         trEl.appendChild(tdEl3);
//         tableEl.appendChild(trEl);

// }
// let shihab = new Student('shihab',35,80);
// let abdallah = new Student('abdallah',30,99);

// console.log(students);


// console.log(shihab);
// console.log(abdallah);

// let containerEl= document.getElementById('container');
//     let tableEl = document.createElement('table');
//     containerEl.appendChild(tableEl);
//     let trEl = document.createElement('tr');
//     let tdEl1 = document.createElement('td');
//     tdEl1.textContent = 'Name';
//     let tdEl2 = document.createElement('td');
//     tdEl2.textContent = 'age';
//     let tdEl3 = document.createElement('td');
//     tdEl3.textContent = 'grade';
//     trEl.appendChild(tdEl1)
//     trEl.appendChild(tdEl2)
//     trEl.appendChild(tdEl3)
//     tableEl.appendChild(trEl)


// shihab.sayhi();
// abdallah.sayhi();
// shihab.saybye();
// abdallah.saybye();

// shihab.render();
// abdallah.render();

//___________________________________________________________________________________________________________________<==
//___________________________________________________________________________________________________________________==>
// class9
//**Event**

// let btn1 = document.getElementById('btn1');
// let btn2 = document.getElementById('btn2');
// let comntainer = document.getElementById('container');

// btn2.addEventListener('click',sayHi)
// function sayHi(){
//     alert('hi')
// }

// btn1.addEventListener('click',addP)
// function addP(){
// let pEl =document.createElement('p');
// pEl.textContent = 'tanks';
// comntainer.appendChild(pEl);
// }

//-----------------------------Forms----------------------------------------

// let container = document.getElementById('container');



// let myForm = document.getElementById('myForm');
// myForm.addEventListener('submit', addP);

// function addP(event) {
//     event.preventDefault();
//     let pEl = document.createElement('p')
//     let stdName = event.target.stdName.value;
//     let age = event.target.age.value;
//     let grade = event.target.grade.value;
//     pEl.textContent = `hi may name is ${stdName} and im ${age} yers old ${grade}  `
//     container.appendChild(pEl);

// }
//___________________________________________________________________________________________________________________<==
//___________________________________________________________________________________________________________________==>
// class 11
//___________________________________________________________________________________________________________________<==
//___________________________________________________________________________________________________________________==>
//class13
