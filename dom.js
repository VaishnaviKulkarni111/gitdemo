// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header')
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// // headerTitle.innerText= 'Goodbye';
// //headerTitle.innerHTML = <h3> Hello</h3>
// //  headerTitle.style.border = 'solid 3px #000'
// header.style.border = 'solid 3px #000'

// var add = document.getElementsByClassName('title');
// add.style.backgroundColor = 'green'

// get elements by class name // 
// var items =document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// // items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'

// for(var i=0; i<items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4'
// }

// querry selector 
// var header= document.querySelector('#main-header');
// header.style.borderBottom = 'solid 10px #ccc'

// var input = document.querySelector('input');
// input.value = 'Hello world'

// var submit = document.querySelector('input[type="submit"]');
// submit.value= "Send";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red'

// var lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = 'blue'

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var titles = document.querySelectorAll('.title');
// titles[0] = 'Hellooo!!!'

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0; i< odd.length; i++){
//     odd[i].style.backgroundColor = '#008000'  
//     even[i].style.backgroundColor = '#ccc'
// } 


// traversing the dom //

 // var itemList = document.querySelector('#items');
// // parentNode
// console.log(itemList.parentNode)
// itemList.parentNode.style.backgroundColor = '#f1f9f1'
// console.log(itemList.parentNode.parentNode.parentNode)

// parentElement
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = '#f1f9f1'
// console.log(itemList.parentElement.parentElement.parentElement)

 // console.log(itemList.childNodes)

//  console.log(itemList.children);
//  console.log(itemList.children[1]);
//  itemList.children[1].style.backgroundColor= 'yellow'
//  itemList.children[1].textContent = 'yellow'

 // 1st child
//  console.log(itemList.firstChild)
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent = 'VK 1'

// last child 
// console.log(itemList.lastChild)
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'VK 1'

// next sibling 
// console.log(itemList.nextSibling)
//  console.log(itemList.nextElementSibling)

//  // prev sibling 
//  console.log(itemList.previousSibling)
//  console.log(itemList.previousElementSibling);
// itemList.parentElement.style.color = 'green'

// create a div
var newDiv = document.createElement('div')
// add class 
newDiv.className= 'Hello'
newDiv.id = 'hell1'
// add atttrrr
newDiv.setAttribute('title', 'Hello div');

// create text node 
var newdivText = document.createTextNode(' HEllo WOrld')
// add text to div
newDiv.appendChild(newdivText)

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1')
container.insertBefore(newDiv, h1)
newDiv.style.fontSize = '20px'

// task 2
var divv = document.createElement('div');
divv.className = 'hello2';
divv.id = 'hell2'
divv.setAttribute('title', 'Hello div');
var text2 = document.createTextNode('HEllO')
 divv.appendChild(text2)
 // cont2.appendChild(divv)
var cont2 = document.querySelector('#main');
var ul = document.querySelector('ul')
cont2.insertBefore(divv, ul)
divv.style.fontSize = '30px'

